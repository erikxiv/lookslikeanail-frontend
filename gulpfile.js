// Imports
var child_process = require('child_process')
var gulp          = require('gulp');
var watch         = require('gulp-watch');
var tar           = require('gulp-tar');
var plumber       = require('gulp-plumber');
var gutil         = require('gulp-util');
var yaml          = require('yamljs');
var path          = require('path');
var fs            = require('fs');

// Variables for docker
var mainDockerName = 'ember';
var mainDockerPath = '/myapp';

// Calculate/set variables used in tasks
var dockerCompose = yaml.load('docker-compose.yml');
var pwd = __dirname;
var projectName = __dirname.split(path.sep).pop();
var mainDockerImage = dockerCompose[mainDockerName].image;
var mainContainerName = projectName.replace(/\W/g, '')+'_'+mainDockerName+'_1';
var boot2dockerWasRunning = true;
var dockerComposeWasStarted = false;
 
//////
// Get development environment up and running
//////
gulp.task('up', ['docker-up', 'watch'], function () {
  // Only dependencies executed
})

//////
// Execute an ember task in the container
// Usage: gulp run --cmd "help generate"
//////
gulp.task('run', ['boot2docker-up'], function () {
  if (gutil.env.cmd) {
    var args = 'run --rm -t -v ' + pwd + ':' + mainDockerPath + ' ' + mainDockerImage + ' ' + gutil.env.cmd;
    gutil.log('cmd: docker ' + args);
    child_process.spawn('docker', args.split(' '), { stdio: 'inherit' });
  }
  else
    gutil.log(gutil.colors.red('Usage: gulp run --cmd "some command to run"'));
})

//////
// Catch Ctrl-C to clean up
// E.g. stop docker
//////
process.on('SIGINT', function() {
  // Stop docker-compose
  if (dockerComposeWasStarted) {
    gutil.log('Stopping docker-compose');
    child_process.spawnSync('docker-compose', ['stop'], { stdio: 'pipe' });
  }
  // Stop boot2docker if it wasn't running
  if (process.platform === 'darwin' && ! boot2dockerWasRunning) {
    gutil.log('Stopping boot2docker');
    child_process.spawnSync('boot2docker', ['down'], { stdio: 'pipe' });
  }
  // Quit
  process.exit();
});

/////
// Start docker
/////
gulp.task('docker-up', ['tar', 'boot2docker-up'], function() {
  // Start docker-compose
  gutil.log('Starting docker-compose');
  child_process.spawn('docker-compose', ['up'], { stdio: 'inherit' });
  dockerComposeWasStarted = true;
});

/////
// Start boot2docker
/////
gulp.task('boot2docker-up', function() {
  // If on Mac, start boot2docker if needed
  if (process.platform === 'darwin') {
    var b2dstatus = child_process.spawnSync('boot2docker', ['status'], { stdio: 'pipe' })
    boot2dockerWasRunning = b2dstatus.stdout.toString().indexOf('running') === 0;
    if (! boot2dockerWasRunning) {
      gutil.log('Starting boot2docker (was not running)');
      child_process.spawnSync('boot2docker', ['up'], { stdio: 'inherit' });
    }
    // Set boot2docker environment variables
    var stdout = child_process.execSync('boot2docker shellinit', { stdio: 'pipe' });
    var envs = stdout.toString().match(/(DOCKER.*=\S+)/g);
    if (envs) {
      envs.forEach(function (e) {
        var key = e.split('=')[0];
        var value = e.split('=')[1];
        gutil.log('Setting environment variable ' + key + '=' + value);
        process.env[key] = value;
      });
    }
  }
});

/////
// Pack current directory (for swift copy to docker container)
/////
gulp.task('tar', function () {
  return gulp.src(['**/*', '**/.*', '!tmp/**'])
      .pipe(tar('init.tar'))
      .pipe(gulp.dest('tmp'));
});

//////
/// Watch for changes
//////
gulp.task('watch', ['docker-up'], function() {
  watch(['**/*', '**/.*', '!tmp/**'], function(file) {
    gutil.log('watch: ' + file.event + ' ' + file.relative);
    if (file.event === 'unlink') {
      child_process.exec('docker exec '+mainContainerName+' rm -rf ' + mainDockerPath + '/' + file.relative, { stdio: 'inherit' }, log_errors);
    }
    else {
      child_process.exec('docker exec '+mainContainerName+' cp -R /tmp/project/'+file.relative+' ' + mainDockerPath + '/'+file.relative, { stdio: 'inherit' }, log_errors);
    }
    // Run tests, save to file
    if (file.relative !== 'test-report.txt') {
      child_process.exec('docker exec '+mainContainerName+' ember test --silent', function (error, stdout, stderr) {
        gutil.log(stdout);
        gutil.log(stderr);
        if (error == null) {
          fs.writeFile('test-report.txt', stdout);
        }
        else {
          gutil.log('Failed to run ember test: ' + error);
        }
      });
    }
  });
});

/////
/// Utility functions
/////
function log_errors(error, stdout, stderr) {
  if (error !== null) {
    gutil.log('exec error: ' + error);
    gutil.log('stdout: ' + stdout);
    gutil.log('stderr: ' + stderr);
  }
}

var gulp_src = gulp.src;
gulp.src = function() {
  return gulp_src.apply(gulp, arguments)
    .pipe(plumber(function(error) {
      // Output an error message
      gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
      // emit the end event, to properly end the task
      this.emit('end');
    })
  );
};
