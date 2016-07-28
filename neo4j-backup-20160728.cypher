begin
create (_633:`Tool` {`created`:1437522726931, `description`:"Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented,[12] and specifically designed to have as few implementation dependencies as possible. It is intended to let application developers 'write once, run anywhere' (WORA),[13] meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.[14] Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of computer architecture. As of 2015, Java is one of the most popular programming languages in use,[15][16][17][18] particularly for client-server web applications, with a reported 9 million developers.[citation needed] Java was originally developed by James Gosling at Sun Microsystems (which has since been acquired by Oracle Corporation) and released in 1995 as a core component of Sun Microsystems' Java platform. The language derives much of its syntax from C and C++, but it has fewer low-level facilities than either of them.", `id`:101, `subTitle`:"Programming Language", `title`:"Java", `updated`:1438469292195})
create (_634:`Tool` {`created`:1437522726931, `description`:"TortoiseSVN is a Subversion client, implemented as a Microsoft Windows shell extension, that helps programmers manage different versions of the source code for their programs. It is a free software released under the GNU General Public License.", `id`:102, `subTitle`:"Application", `title`:"TortoiseSVN", `updated`:1438555549146})
create (_635:`Tool` {`created`:1437522726931, `description`:"Mix is a build tool that ships with Elixir that provides tasks for creating, compiling, testing your application, managing its dependencies and much more;", `id`:103, `subTitle`:"Build Tool", `title`:"Mix", `updated`:1438195397387})
create (_636:`Tool` {`created`:1437522726931, `description`:"Elixir is a functional, concurrent, general-purpose programming language that runs on the Erlang virtual machine (BEAM). Elixir builds on top of Erlang to provide distributed, fault-tolerant, soft real-time, non-stop applications but also extends it to support metaprogramming with macros and polymorphism via protocols.", `id`:104, `subTitle`:"Programming Language", `title`:"Elixir", `updated`:1438712130896})
create (_637:`Tool` {`created`:1437522726931, `description`:"PostgreSQL, often simply Postgres, is an object-relational database management system (ORDBMS) with an emphasis on extensibility and on standards-compliance. As a database server, its primary function is to store data securely, supporting best practices, and to allow for retrieval at the request of other software applications. It can handle workloads ranging from small single-machine applications to large Internet-facing applications with many concurrent users.", `id`:105, `subTitle`:"Database", `title`:"Postgres", `updated`:1438194844405})
create (_638:`Tool` {`created`:1437522726931, `description`:"MySQL (/maɪ ˌɛskjuːˈɛl/ 'My S-Q-L',[6] officially, also /maɪ ˈsiːkwəl/ 'My Sequel') is a relational database management system (RDBMS).[7] In July 2013 it was the world's second most[a] widely used RDBMS, and the most widely used open-source RDBMS.[10] It is named after co-founder Michael Widenius's daughter, My.[11] The SQL acronym stands for Structured Query Language. The MySQL development project has made its source codeavailable under the terms of the GNU General Public License, as well as under a variety of proprietary agreements. MySQL was owned and sponsored by a single for-profit firm, the Swedish company MySQL AB, now owned by Oracle Corporation.[12] For proprietary use, several paid editions are available, and offer additional functionality.", `id`:106, `subTitle`:"Database", `title`:"MySQL", `updated`:1438195241244})
create (_639:`Tool` {`created`:1437522726931, `description`:"Heroku is a cloud platform as a service (PaaS) supporting several programming languages. Heroku was acquired by Salesforce.com in 2010.[1] Heroku, one of the first cloud platforms[citation needed], has been in development since June 2007, when it supported only the Ruby programming language, but has since added support for Java, Node.js, Scala, Clojure, Python and PHP and (undocumented) Perl. The base operating system is Debian or, in the newest stack, the Debian-based Ubuntu.[2]", `id`:107, `subTitle`:"Platform as a Service", `title`:"Heroku", `updated`:1438712087082})
create (_640:`Capability` {`created`:1437522726931, `description`:"BuildingDescription", `id`:201, `subTitle`:"Task", `title`:"Building", `updated`:1440856751154})
create (_641:`Capability` {`created`:1437522726931, `description`:"HostingDescription", `id`:202, `subTitle`:"Task", `title`:"Hosting", `updated`:1437522726931})
create (_642:`Capability` {`created`:1437522726931, `description`:"TestingDescription", `id`:203, `subTitle`:"Task", `title`:"Testing", `updated`:1440946004679})
create (_643:`Capability` {`created`:1437522726931, `description`:"ConnectingDescription", `id`:204, `subTitle`:"Task", `title`:"Connecting", `updated`:1437522726931})
create (_644:`Capability` {`created`:1437522726931, `description`:"DatastorageDescription", `id`:205, `subTitle`:"Task", `title`:"Datastorage", `updated`:1437522726931})
create (_645:`Feature` {`created`:1437522726931, `id`:301, `title`:"mixBuilding", `updated`:1437522726931})
create (_646:`Feature` {`created`:1437522726931, `id`:302, `title`:"ecto", `updated`:1437522726931})
create (_647:`Feature` {`created`:1437522726931, `id`:303, `title`:"postgresDatastorage", `updated`:1437522726931})
create (_648:`Feature` {`created`:1437522726931, `id`:304, `title`:"mysqlDatastorage", `updated`:1437522726931})
create (_649:`Feature` {`created`:1437522726931, `id`:305, `title`:"herokuHosting", `updated`:1437522726931})
create (_651:`Feature` {`created`:1438465394983, `id`:651, `implements`:"", `updated`:1438465394983})
create (_652:`Feature` {`created`:1438465413640, `id`:652, `implements`:"", `updated`:1438465413640})
create (_653:`Feature` {`created`:1438465670363, `id`:653, `implements`:"", `updated`:1438465670363})
create (_658:`Feature` {`created`:1438587738145, `id`:658, `title`:"manualTestFromSwaggerUi", `updated`:1438587738145})
create (_662:`Feature` {`created`:1438733053112, `id`:662, `updated`:1438733053969})
create (_664:`Capability` {`created`:1438871580352, `description`:"A component of software configuration management, revision control, also known as version control or source control, is the management of changes to documents, computer programs, large web sites, and other collections of information. Changes are usually identified by a number or letter code, termed the \"revision number,\" \"revision level,\" or simply \"revision.\" For example, an initial set of files is \"revision 1.\" When the first change is made, the resulting set is \"revision 2,\" and so on. Each revision is associated with a timestamp and the person making the change. Revisions can be compared, restored, and with some types of files, merged.  The need for a logical way to organize and control revisions has existed for almost as long as writing has existed, but revision control became much more important, and complicated, when the era of computing began. The numbering of book editions and of specification revisions are examples that date back to the print-only era. Today, the most capable (as well as complex) revision control systems are those used in software development, where a team of people may change the same files.  Version control systems (VCS) most commonly run as stand-alone applications, but revision control is also embedded in various types of software such as word processors and spreadsheets, e.g., Google Docs and Sheets[1] and in various content management systems, e.g., Wikipedia's Page history. Revision control allows for the ability to revert a document to a previous revision, which is critical for allowing editors to track each other's edits, correct mistakes, and defend against vandalism and spamming.  Software tools for revision control are essential for the organization of multi-developer projects.[2]", `id`:664, `subTitle`:"Capability", `title`:"Revision Control", `updated`:1438871665784})
create (_665:`Feature` {`created`:1438871679823, `id`:665, `updated`:1438871680646})
create (_666:`Meta_Node` {`name`:"Tool"})
create (_667:`Meta_Node` {`name`:"Feature"})
create (_668:`Meta_Node` {`name`:"Capability"})
create (_669:`Meta_Node` {`name`:"Meta_Node"})
create (_670:`Tool` {`created`:1439446521414, `description`:"# Ecto

[![Build Status](https://travis-ci.org/elixir-lang/ecto.svg?branch=master)](https://travis-ci.org/elixir-lang/ecto)
[![Inline docs](http://inch-ci.org/github/elixir-lang/ecto.svg?branch=master&style=flat)](http://inch-ci.org/github/elixir-lang/ecto)

Ecto is a domain specific language for writing queries and interacting with databases in Elixir. Here is an example:

```elixir
# In your config/config.exs file
config :my_app, Sample.Repo,
  adapter: Ecto.Adapters.Postgres,
  database: \"ecto_simple\",
  username: \"postgres\",
  password: \"postgres\"

# In your application code
defmodule Sample.Repo do
  use Ecto.Repo,
    otp_app: :my_app
end

defmodule Sample.Weather do
  use Ecto.Model

  schema \"weather\" do
    field :city     # Defaults to type :string
    field :temp_lo, :integer
    field :temp_hi, :integer
    field :prcp,    :float, default: 0.0
  end
end

defmodule Sample.App do
  import Ecto.Query
  alias Sample.Weather
  alias Sample.Repo

  def sample_query do
    query = from w in Weather,
          where: w.prcp > 0 or is_nil(w.prcp),
         select: w
    Repo.all(query)
  end
end
```

See the [online documentation](http://hexdocs.pm/ecto) or [run the sample application](https://github.com/elixir-lang/ecto/tree/master/examples/simple) for more information.

## Usage

You need to add both Ecto and the database adapter as a dependency to your `mix.exs` file. The supported databases and their adapters are:

Database                | Ecto Adapter           | Dependency
:---------------------- | :--------------------- | :-------------------
PostgreSQL              | Ecto.Adapters.Postgres | [postgrex][postgrex]
MySQL                   | Ecto.Adapters.MySQL    | [mariaex][mariaex]
MSSQL                   | Tds.Ecto               | [tds_ecto][tds_ecto]
SQLite3                 | Sqlite.Ecto            | [sqlite_ecto][sqlite_ecto]

[postgrex]: http://github.com/ericmj/postgrex
[mariaex]: http://github.com/xerions/mariaex
[tds_ecto]: https://github.com/livehelpnow/tds_ecto
[sqlite_ecto]: https://github.com/jazzyb/sqlite_ecto

For example, if you want to use PostgreSQL, add to your `mix.exs` file:

```elixir
defp deps do
  [{:postgrex, \">= 0.0.0\"},
   {:ecto, \"~> 0.14.3\"}]
end
```

and update your applications list to include both projects:

```elixir
def application do
  [applications: [:postgrex, :ecto]]
end
```

Then run `mix deps.get` in your shell to fetch the dependencies. If you want to use another database, just choose the proper dependency from the table above.

Finally, in the repository configuration, you will need to specify the `adapter:` respective to the chosen dependency. For PostgreSQL it is:

```elixir
config :my_app, Repo,
  adapter: Ecto.Adapters.Postgres,
  ...
```

We are currently looking for contributions to add support for other SQL databases and folks interested in exploring non-relational databases too.

## Important links

  * [Documentation](http://hexdocs.pm/ecto)
  * [Mailing list](https://groups.google.com/forum/#!forum/elixir-ecto)
  * [Examples](https://github.com/elixir-lang/ecto/tree/master/examples)

## Contributing

Ecto is on the bleeding edge of Elixir so the latest master build is most likely needed, see [Elixir's README](https://github.com/elixir-lang/elixir) on how to build from source.

To contribute you need to compile Ecto from source and test it:

```
$ git clone https://github.com/elixir-lang/ecto.git
$ cd ecto
$ mix deps.get
$ mix test
```

Besides the unit tests above, it is recommended to run the adapter integration tests too:

```
# Run only PostgreSQL tests (version of PostgreSQL must be >= 9.4 to support jsonb)
MIX_ENV=pg mix test

# Run all tests (unit and all adapters/pools)
mix test.all
```

In addition, build the docs locally to review any changes:

```
$ MIX_ENV=docs mix docs
```

## License

Copyright 2012 Plataformatec

  Licensed under the Apache License, Version 2.0 (the \"License\");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an \"AS IS\" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.", `id`:670, `subTitle`:"Elixir module", `title`:"Ecto", `updated`:1439446637846})
create (_671:`Tool` {`created`:1440053558656, `description`:"![phoenix logo](https://raw.githubusercontent.com/phoenixframework/phoenix/master/priv/static/phoenix.png)
> ### Productive. Reliable. Fast.
> A productive web framework that does not compromise speed and maintainability.

[![Build Status](https://api.travis-ci.org/phoenixframework/phoenix.svg)](https://travis-ci.org/phoenixframework/phoenix)
[![Inline docs](http://inch-ci.org/github/phoenixframework/phoenix.svg)](http://inch-ci.org/github/phoenixframework/phoenix)

## Getting started

See the official site at http://www.phoenixframework.org/

## Documentation

API documentation is available at [http://hexdocs.pm/phoenix](http://hexdocs.pm/phoenix)

## Contributing

We appreciate any contribution to Phoenix, so check out our [CONTRIBUTING.md](CONTRIBUTING.md) guide for more information. We usually keep a list of features and bugs [in the issue tracker][1].

### Running a Phoenix master app

```bash
$ cd installer
$ mix phoenix.new path/to/your/app --dev
```

The command above will create a new application, using your current Phoenix checkout thanks to the `--dev` flag.

Note that `path/to/your/app` must be within the directory containing the Phoenix source code. This is so that a relative path can be used for the `:phoenix` dependency.

### Building phoenix.js

```bash
$ npm install
$ npm install -g brunch
$ brunch watch
```

## Important links

* \\#elixir-lang on freenode IRC
* [Issue tracker][1]
* [phoenix-talk Mailing list (questions)][2]
* [phoenix-core Mailing list (development)][3]

  [1]: https://github.com/phoenixframework/phoenix/issues
  [2]: http://groups.google.com/group/phoenix-talk
  [3]: http://groups.google.com/group/phoenix-core
", `id`:671, `subTitle`:"Elixir module", `title`:"Phoenix Framework", `updated`:1440053583764})
create (_672:`Tool` {`created`:1440053625578, `description`:"Cowboy
======

Cowboy is a small, fast and modular HTTP server written in Erlang.

Goals
-----

Cowboy aims to provide a **complete** HTTP stack in a **small** code base.
It is optimized for **low latency** and **low memory usage**, in part
because it uses **binary strings**.

Cowboy provides **routing** capabilities, selectively dispatching requests
to handlers written in Erlang.

Because it uses Ranch for managing connections, Cowboy can easily be
**embedded** in any other application.

No parameterized module. No process dictionary. **Clean** Erlang code.

Sponsors
--------

The project is currently sponsored by
[Kato.im](https://kato.im).

The SPDY implementation was sponsored by
[LeoFS Cloud Storage](http://www.leofs.org).

Online documentation
--------------------

 *  [User guide](http://ninenines.eu/docs/en/cowboy/HEAD/guide)
 *  [Function reference](http://ninenines.eu/docs/en/cowboy/HEAD/manual)

Offline documentation
---------------------

 *  While still online, run `make docs`
 *  Function reference man pages available in `doc/man3/` and `doc/man7/`
 *  Run `make install-docs` to install man pages on your system
 *  Full documentation in Markdown available in `doc/markdown/`
 *  Examples available in `examples/`

Getting help
------------

 *  Official IRC Channel: #ninenines on irc.freenode.net
 *  [Mailing Lists](http://lists.ninenines.eu)
 *  [Commercial Support](http://ninenines.eu/support)
", `id`:672, `subTitle`:"Web server", `title`:"Cowboy", `updated`:1440053665750})
create (_673:`Tool` {`created`:1440154829756, `description`:"KANBAN çæ¿
===========

Demo
----
Live demo hosted here on Heroku (database is reset daily):
[**LIVE DEMO**](http://kanban.seanomlor.com)

[![Screenshot](/app/assets/images/screenshot.jpg)](http://kanban.seanomlor.com)

Summary
-------
Kanban is a work-in-progress Trello clone I developed for a final project at [App Academy](http://appacademy.io), a 9-week Ruby on Rails and JavaScript web development intensive in San Francisco.

Built with Ruby on Rails on the backend as a JSON API for Backbone.js on the frontend.

Notes
-----
* Hand-rolled Rails user authentication with BCrypt
* Custom, nested Rails JSON templating with [Rabl](https://github.com/nesquena/rabl)
* Backbone models/collections with [Backbone-relational.js](http://backbonerelational.org/)
* Auto-updating comment timestamps with jQuery [timeago](http://timeago.yarp.com)
* Editable board, list and card titles with jQuery [JEditable](http://www.appelsiini.net/projects/jeditable)

License
-------
Kanban is released under the [MIT License](/LICENSE).

---
Developed by [Sean Omlor](http://seanomlor.com)
", `id`:673, `subTitle`:"Software as a Service", `title`:"KANBAN", `updated`:1440156440078})
create (_674:`Tool` {`created`:1440195415855, `description`:"Trello is a free web-based project management application originally made by Fog Creek Software in 2011, that spun out to be its own company in 2014.According to Trello, it uses a paradigm for managing projects known as kanban, a method that had originally been popularized by Toyota in the 1980s for supply chain management. Projects are represented by boards, which contain lists (corresponding to task lists). Lists contain cards (corresponding to tasks).", `id`:674, `subTitle`:"Wikipedia", `title`:"Trello", `updated`:1440195415855})
create (_675:`Capability` {`created`:1440245384490, `description`:"Project management is the discipline of carefully projecting or planning, organizing, motivating and controlling resources to achieve specific goals and meet specific success criteria. A project is a temporary endeavor designed to produce a unique product, service or result with a defined beginning and end (usually time-constrained, and often constrained by funding or deliverables) undertaken to meet unique goals and objectives, typically to bring about beneficial change or added value.[1][2] The temporary nature of projects stands in contrast with business as usual (or operations),[3] which are repetitive, permanent, or semi-permanent functional activities to produce products or services. In practice, the management of these two systems is often quite different, and as such requires the development of distinct technical skills and management strategies.[4]

The primary challenge of project management is to achieve all of the project goals[5] and objectives while honoring the preconceived constraints.[6] The primary constraints are scope, time, quality and budget.[7] The secondary — and more ambitious — challenge is to optimize the allocation of necessary inputs and integrate them to meet pre-defined objectives.", `id`:675, `subTitle`:"Capability", `title`:"Project Management", `updated`:1440245423187})
create (_676:`Feature` {`created`:1440245438320, `id`:676, `updated`:1440245439620})
create (_677:`Feature` {`created`:1440245451014, `id`:677, `updated`:1440245451855})
create (_678:`Tool` {`created`:1440764910047, `description`:"Stackify
========
Stackify manages your Cloudformation parameters for multiple AWS regions, environments and accounts. Stackify pulls necessary information about your current Cloudformation stacks, and then dynamically generates the necessary parameters for your next stack launch.  It does this through pulling resource information about a stack and storing it for you in SimpleDb, this information can then be passed as parameters for launching future dependent stacks. Stackify helps make launching servers in a VPC a breeze!   

Usage
-----
Stackify is made to integrate with simple\\_deploy. After a stack is created with simple\\_deploy, \"stackify put ...\" is then ran for the created stack and all resource information about the stack and outputs defined, are then stored in the region's simpleDB 'stacks' domain. This is especially useful for launching a Cloudformation stack for your VPC, and then launching a stack inside of that VPC. Non-AWS resource specific parameters should be stored using the alternate json method. Parameters from a json formatted file and/or from simpleDB are then provided to the CAP simple\\_deploy job for the creation of new stacks.

Prerequisites
-------------

* Python 2.x version 2.6 or higher installed.
* Boto Version 2.9.9 or higher (will be installed automatically during the setup.py install)
* AWS account access key and secret key or IAM Instance Role with SimpleDB read/write and Cloudformation read-only access on the machine running stackify

Installation
------------

Install python if necessary (most current distributions will have python 2.6 or higher)

python setuptools and pip must be installed

If necessary run: 

```
yum install python-setuptools
easy_install pip
```

Run the setup.py installation from the stackify folder

```
python setup.py install
```

* this will install the necessary libraries, and the stackify command to: /usr/bin/stackify


AWS API Access
--------------

Set access and secret keys as environmental variables or use IAM instance role with access for simpledb (read/write) and cloudformation (read).

```
export AWS_ACCESS_KEY_ID=<AWS Access Key ID>
export AWS_SECRET_ACCESS_KEY=<AWS Secret Access key>
```

If using an IAM instance role with SDB and CF permission, then access should be provided automagically!


Using Stackify
--------------

### stackify put


The **'put'** argument is used to save stack resource and output information to SimpleDB.
This should be ran after succefully launching a stack using 'simple\\_deploy' to enable the resources to be used as parameters for future stacks.
The -s  and -r parameters are mandatory with this argument


Example:
``` 
./stackify put -s STACKNAME-VPC -r us-west-1        
```

* The -n/--simpledeployname flag will put resource information about the stack into the SimpleDB namespace used by the simple\\_deploy parameter store, and the simple\\_deploy parameters of a stack will then also be passed to future stacks
* Stackify 'put' will force an overwrite of any old parameters in SimpleDB with the same key name and same stackname



### stackify get

The **'get'** argument is used to provide parameters to simple\\_deploy when launching a stack.
By default, the 'get' argument will pull the saved resource information from simpledb to be used for launching a stack.



#### Passing Parameters from SimpleDB
 
* The -s/--stack and -r/--region options are mandatory when pulling parameters from SimpleDB
* The -n/--simpledeployname flag will get the resource information about the stack from the SimpleDB namespace used by simple\\_deploy to store parameters, this enables the simple\\_deploy parameters to be passed to new stacks as well
* Cloudformation Outputs will take precedence over Cloudformation resources if they have the same name.

Example: 
```
./stackify get -s STACKNAME-VPC -r us-west-1        
```


#### Passing Parameters from a .json file

* If you would like to pull the parameters from a json formatted file you can use the options: \"-f filename(s) -p projectname -e environment  -r region\"
  
Example: 
1. Create a json formatted file with the projectname key(s), nesting environment(s) then region(s), with parameters as key value pairs:

```
file.json < '{ \"projectname\": { \"prod\": { \"us-west-1\" { \"VPCID\": \"vpc-123456\", \"MinimumInstances\": \"1\",}}}}'
```

2. Run stackify get with _'-f pathto/file.json'_ 

```
stackify get -f ./file.json -p projectname -e prod -r us-west-1
```

* This returns the key value pairs from the json file in a simple\\_deploy compatible parameter format: '-a VPCID=123456 -a MinimumInstances=1'

* Multiple .json files may be passed using -f
 
* When using the -f option, the -p -e and -r parameters are mandatory


#### Passing Parameters from both a json File and SimpleDB

Parameters can be pulled from both a json file and the SimpleDB saved parameters. 

If you'd like to specify parameters from both a .json file and from simpledb, use -f file.json and the -s stack option
    
Example:

```
stackify get -f ./file.json -p projectname -e prod -r us-west-1 -s STACKNAME-VPC
```

' -s STACKNAME-VPC' was added to the command. When using the -s stack option, the specific stack's information will be pulled from simpledb. 

* Multiple stacknames may be provided to -s
* The -n/--simpledeployname flag will pull resource information about the stack from the simple\\_deploy parameter store namespace in SimpleDB, this enables the simple\\_deploy parameters to be passed to future stacks along with the resources. This is usefull for clone jobs.


", `id`:678, `subTitle`:"Software as a Service", `title`:"Stackify", `updated`:1440946300538})
create (_679:`Tool` {`created`:1440765049697, `description`:"# Travis CI

[Travis CI](https://travis-ci.com) is a hosted continuous integration and
deployment system. There are two versions of it,
[travis-ci.com](https://travis-ci.com) for private repositories, and
[travis-ci.org](https://travis-ci.org) for public repositories.

This repository contains the [central issue
tracker](https://github.com/travis-ci/travis-ci/issues) for the Travis CI
project.

## Documentation

Documentation for the Travis CI project can be found at
<http://docs.travis-ci.com>.

## Other repositories

Travis CI consists of many different sub-projects. The main ones are:

### travis-api

[travis-api](https://github.com/travis-ci/travis-api) is the Sinatra app that's
responsible for serving our API. It responds to different HTTP endpoints and
runs services in [travis-core](#travis-core). Very little logic is in this
repository.

### travis-build

[travis-build](https://github.com/travis-ci/travis-build) creates the build
script for each job. It takes the configuration from the `.travis.yml` file and
creates a `bash` script that is then run in the build environment by
[travis-worker](#travis-worker).

### travis-core

[travis-core](https://github.com/travis-ci/travis-core) holds most of the logic
for Travis CI. This repository is shared across several other apps and
holds the models, services, and other things that these apps need.

### travis-cookbooks

[travis-cookbooks](https://github.com/travis-ci/travis-cookbooks) holds the
[Chef](http://docs.opscode.com/) cookbooks that are used to provision the build environments.

### travis-hub

[travis-hub](https://github.com/travis-ci/travis-hub) collects events from
other apps and notifies other apps about the events. For example, it notifies
[travis-tasks](#travis-tasks) about builds starting and finishing so
notifications can be sent out.

travis-hub is also responsible for enqueueing jobs that have been created and
enforcing the Quality of Service restrictions, such as the number of concurrent
builds per user.

### travis-listener

[travis-listener](https://github.com/travis-ci/travis-listener) receives
notifications from GitHub whenever commits are pushed or pull requests are
opened. They are then pushed onto RabbitMQ for other apps to process.

### travis-logs

[travis-logs](https://github.com/travis-ci/travis-logs) receives log updates
from [travis-worker](#travis-worker), saves them to the database and pushes
them to the [web client](#travis-web). When a job is finished, travis-logs is
responsible for pushing the log to Amazon S3 for archiving.

### travis-support

[travis-support](https://github.com/travis-ci/travis-support) holds shared
logic for the different Travis CI apps. It is different from travis-core in
that it holds more generic things, like how to run an async job or how to
handle exceptions.

### travis-tasks

[travis-tasks](https://github.com/travis-ci/travis-tasks) receives
notifications from [travis-hub](#travis-hub) and sends out notifications to the
different notification providers as needed.

### travis-web

[travis-web](https://github.com/travis-ci/travis-web) is our main Web client.
It is written using [Ember](http://emberjs.com) and communicates with
[travis-api](#travis-api) to get information and gets live updates from
[travis-hub](#travis-hub) and [travis-logs](#travis-logs) through
[Pusher](http://pusher.com/).

### travis-worker

[travis-worker](https://github.com/travis-ci/travis-worker) is responsible for
running the build scripts in a clean environment. It streams the log output to
[travis-logs](#travis-logs) and pushes state updates (build starting/finishing)
to [travis-hub](#travis-hub).
", `id`:679, `subTitle`:"Software as a Service", `title`:"Travis CI", `updated`:1440946094914})
create (_680:`Feature` {`capability`:203, `created`:1440932397129, `id`:680, `tool`:103, `updated`:1440932397129})
create (_681:`Tool` {`created`:1440944881383, `description`:"BrowserStack is a cross-browser testing tool, to test public websites and protected servers, on a cloud infrastructure of desktop and mobile browsers. Websites can be tested interactively, or through the use of Selenium or JavaScript automated test suites. The features include 700+ real browsers, Local Testing, Screenshots, Responsive, developer tools, and APIs for integration among others. BrowserStack was founded by Ritesh Arora and Nakul Aggarwal in April 2011, and launched fully in September 2011. It has gained widespread acceptance in the web development community, as of August 2014, there are 25,000 customers and 520,000 registered developers in 130+ countries.", `id`:681, `subTitle`:"Software as a Service", `title`:"BrowserStack", `updated`:1440944898494})
create (_682:`Feature` {`capability`:203, `created`:1440944904579, `id`:682, `tool`:681, `updated`:1440944904579})
create (_683:`Tool` {`created`:1440944955759, `description`:"# Selenium

Selenium is an umbrella project encapsulating a variety of tools and 
libraries enabling web browser automation. Selenium specifically 
provides infrastructure for the [W3C WebDriver specification](https://dvcs.w3.org/hg/webdriver/raw-file/tip/webdriver-spec.html) 
â a platform and language-neutral coding interface compatible with all 
major web browsers.

The project is made possible by volunteer contributors who've 
generously donated thousands of hours in code development and upkeep. 

Selenium's source code is made available under the [Apache 2.0 license](https://github.com/SeleniumHQ/selenium/blob/master/LICENSE).

## Documentation

Narrative documentation:

* [User Manual](http://docs.seleniumhq.org/docs/)
* [New Handbook](https://seleniumhq.github.io/docs/) (work in progress)

API documentation:

* [C#](http://seleniumhq.github.io/selenium/docs/api/dotnet/)
* [JavaScript](http://seleniumhq.github.io/selenium/docs/api/javascript/)
* [Java](http://seleniumhq.github.io/selenium/docs/api/java/index.html)
* [Python](http://seleniumhq.github.io/selenium/docs/api/py/)
* [Ruby](http://seleniumhq.github.io/selenium/docs/api/rb/)

## Pull Requests

Please read [CONTRIBUTING.md](https://github.com/SeleniumHQ/selenium/blob/master/CONTRIBUTING.md) 
before submitting your pull requests.

## Building

Selenium uses a custom build system aptly named
[crazyfun](https://github.com/SeleniumHQ/selenium/wiki/Crazy-Fun-Build)
available on all fine platforms (Linux, Mac, Windows).  We are in the
process of replacing crazyfun with
[buck](http://facebook.github.io/buck/), so don't be alarmed if you
see directories carrying multiple build directive files.
For reference, crazyfun's build files are named *build.desc*,
while buck's are named simply *BUCK*.

To build Selenium, in the same directory as this file:

```sh
./go
```

The order of building modules is determined by the build system.
If you want to build an individual module
(assuming all dependent modules have previously been built),
try the following:

```sh
./go //javascript/atoms:test:run
```

In this case, `javascript/atoms` is the module directory,
`test` is a target in that directory's `build.desc` file,
and `run` is the action to run on that target.

As you see *build targets* scroll past in the log,
you may want to run them individually.
crazyfun can run them individually,
by target name as long as `:run` is appended (see above).

To list all available targets, you can append the `-T` flag:

```sh
./go -T
```

### Buck

Although the plan is to return to a vanilla build of Buck as soon as
possible, we currently use a fork hosted at
https://github.com/shs96c/buck To build using Buck, first clone that
repo and build using ant. Then add Buck's \"bin\" directory to your
PATH.

To obtain a list of all available targets:

```sh
buck targets
```

And build a particular file:

```sh
buck build //java/client/src/org/openqa/selenium:webdriver-api
```

There are aliases for commonly invoked targets in the `.buckconfig`
file, and these aliases can be invoked directly:

```sh
buck build htmlunit
```

All buck output is stored under \"buck-out\", with the outputs of build
rules in `buck-out/gen`.

If you are doing a number of incremental builds, then you may want to
use `buckd`, which starts a long-lived buck process to watch outputs
and input files. If you do this, consider using `watchman` too, since
the Java 7 file watcher isn't terribly efficient. This can be cloned
from https://github.com/facebook/watchman

## Requirements

* [Java 7 JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
* `java` and `jar` on the PATH

Although the build system is based on rake it's **strongly advised**
to rely on the version of JRuby in `third_party/` that is invoked by
`go`.  The only developer type who would want to deviate from this is
the âbuild maintainerâ who's experimenting with a JRuby upgrade.

Note that all Selenium Java artefacts are **built with Java 7
(mandatory)**.  Those _will work with any Java >= 7_.

### Optional Requirements

* Python 2.6.x to 2.7 (without this, Python tests will be skipped)
* Ruby 1.9.3

### Internet Explorer Driver

If you plan to compile the
[IE driver](https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver)
you also need:

* [Visual Studio 2008](http://www.microsoft.com/visualstudio/en-gb/products/2008-editions)
* 32 and 64 bit cross compilers

The build will work on any platform, but the tests for IE will be 
skipped silently, if you are not building on Windows.

## Common Tasks

For an express build of the binaries we release run the following from 
the directory containing the `Rakefile`:

```sh
./go clean release
```

All build output is placed under the `build` directory. The output can
be found under `build/dist`.  If an error occurs while running this
task complaining about a missing Albacore gem, the chances are you're
using `rvm`.  If this is the case, switch to the system ruby:

```sh
rvm system
```

Of course, building the entire project can take too long. If you just
want to build a single driver, then you can run one of these targets:

```sh
./go chrome
./go firefox
./go htmlunit
./go ie
```

As the build progresses, you'll see it report where the build outputs
are being placed.  Of course, just building isn't enough.  We should
really be able to run the tests too.  Try:

```sh
./go test_chrome
./go test_firefox
./go test_htmlunit
./go test_ie
```

Note that the `test_chrome` target requires that you have the separate
[Chrome Driver](https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver)
binary available on your `PATH`.

If you are interested in a single language binding, try one of:

```sh
./go test_java
./go test_dotnet
./go test_rb
./go test_javascript
```

To run all the tests just run:

```sh
./go test
```

This will detect your OS and run all the tests that are known to be
stable for every browser that's appropriate to use for all language
bindings.  This can take a healthy amount of time to run.

To run the minimal logical Selenium build:

```sh
./go test_javascript test_java
```

As a side note, **none of the developers** run tests using
[Cygwin](http://www.cygwin.com/).  It is very unlikely that the build
will work as expected if you try and use it.

## Tour

The code base is generally segmented around the languages used to
write the component.  Selenium makes extensive use of JavaScript, so
let's start there.  Working on the JavaScript is easy.  First of all,
start the development server:

```sh
./go debug-server
```

Now navigate to
[http://localhost:2310/javascript](http://localhost:2310/javascript).
You'll find the contents of the `javascript/` directory being shown.
We use the [Closure
Library](https://developers.google.com/closure/library/) for
developing much of the javascript, so now navigate to
[http://localhost:2310/javascript/atoms/test](http://localhost:2310/javascript/atoms/test).

The tests in this directory are normal HTML files with names ending
with `_test.html`.  Click on one to load the page and run the test. You
can run all the javascript tests using:

```sh
./go test_javascript
```

## Maven POM files

Ignore the [Maven](http://maven.apache.org/) POM file present in the
same directory. It is only used for releasing to jars to Maven
Repository (public or local), and is not considered the main build
mechanism.

Here is the [public Selenium Maven
repository](http://repo1.maven.org/maven2/org/seleniumhq/selenium/).

## Build Output

`./go` only makes a top-level `build` directory.  Outputs are placed
under that relative to the target name. Which is probably best
described with an example.  For the target:

```sh
./go //java/client/src/org/openqa/selenium:selenium-api
```

The output is found under:

```sh
build/java/client/src/org/openqa/selenium/selenium-api.jar
```

If you watch the build, each step should print where its output is
going.  Java test outputs appear in one of two places: either under
`build/test_logs` for [JUnit](http://junit.org/) or in
`build/build_log.xml` for [TestNG](http://testng.org/doc/index.html)
tests.  If you'd like the build to be chattier, just append `log=true`
to the build command line.

# Help with *go*

More general, but basic, help for *go*â¦

```sh
./go --help
```

Remember, *go* is just a wrapper around
[Rake](http://rake.rubyforge.org/), so you can use the standard
commands such as `rake -T` to get more information about available
targets.

## Maven _per se_

If it is not clear already, Selenium is not built with Maven, it is
built with [Crazy-Fun](https://github.com/SeleniumHQ/selenium/wiki/Crazy-Fun-Build) 
though that is invoked with *go* as outlined above so you do not really 
have to learn too much about that.

That said, it is possible to relatively quickly build selenium pieces
for Maven to use. You are only really going to want to do this when
you are testing the cutting-edge of Selenium development (which we
welcome) against your application.  Here is the quickest way to build
and deploy into you local maven repository (`~/.m2/repository`), while
skipping Selenium's own tests.

```sh
./go release
cd maven
mvn clean install
```

This sequence will push some seven or so jars into your local Maven
repository with something like 'selenium-server-2.0-SNAPSHOT.jar' as
the name.

## Useful Resources

Refer to the [Building Web
Driver](https://github.com/SeleniumHQ/selenium/wiki/Building-WebDriver) 
wiki page for the last word on building the bits and pieces of Selenium.
", `id`:683, `subTitle`:"Library", `title`:"Selenium", `updated`:1440946212275})
create (_684:`Feature` {`capability`:203, `created`:1440944964154, `id`:684, `tool`:683, `updated`:1440944964154})
create (_685:`Tool` {`created`:1440945378890, `description`:"Description goes here", `id`:685, `subTitle`:"Software as a Service", `title`:"Sauce Labs", `updated`:1440945386681})
create (_686:`Feature` {`capability`:203, `created`:1440945393252, `id`:686, `tool`:685, `updated`:1440945393252})
create (_687:`Tool` {`created`:1440945689233, `description`:"# Karma
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/karma-runner/karma) [![npm version](https://img.shields.io/npm/v/karma.svg?style=flat-square)](https://www.npmjs.com/package/karma) [![npm downloads](https://img.shields.io/npm/dm/karma.svg?style=flat-square)](https://www.npmjs.com/package/karma)

[![Build Status](https://img.shields.io/travis/karma-runner/karma/master.svg?style=flat-square)](https://travis-ci.org/karma-runner/karma) [![Code Climate](https://img.shields.io/codeclimate/github/karma-runner/karma.svg?style=flat-square)](https://codeclimate.com/github/karma-runner/karma) [![Dependency Status](https://img.shields.io/david/karma-runner/karma.svg?style=flat-square)](https://david-dm.org/karma-runner/karma) [![devDependency Status](https://img.shields.io/david/dev/karma-runner/karma.svg?style=flat-square)](https://david-dm.org/karma-runner/karma#info=devDependencies)

A simple tool that allows you to execute JavaScript code in multiple
_real_ browsers.

> The main purpose of Karma is to make your test-driven development easy,
>  fast, and fun.


## Help and Support

> For questions and support please use the mailing list or Gitter.
> The issue tracker is for bug reports and feature discussions only.

* Obligatory [documentation]
* Quick questions:
[![Gitter Chat](https://img.shields.io/badge/GITTER-join%20chat-green.svg?style=flat-square)](https://gitter.im/karma-runner/karma)
* Longer questions: [Mailing List]
* Bug reports [Issue Tracker]
* Everything less than 140 characters: [@JsKarma] on Twitter



## When should I use Karma?

* You want to test code in *real* browsers.
* You want to test code in multiple browsers (desktop, mobile,
  tablets, etc.).
* You want to execute your tests locally during development.
* You want to execute your tests on a continuous integration server.
* You want to execute your tests on every save.
* You love your terminal.
* You don't want your (testing) life to suck.
* You want to use [Istanbul] to automagically generate coverage
  reports.
* You want to use [RequireJS] for your source files.


## But I still want to use \\_insert testing library\\_

Karma is not a testing framework, nor an assertion library.
Karma just launches a HTTP server, and generates the test runner HTML file you probably already know from your favourite testing framework.
So for testing purposes you can use pretty much anything you like. There are already plugins for most of the common testing frameworks:

* [Jasmine]
* [Mocha]
* [QUnit]
* and [many others](https://www.npmjs.org/browse/keyword/karma-adapter)

If you can't find an adapter for your favourite framework, don't worry and write your own.
It's not that hard and we are here to help.


## Which Browsers can I use?

All the major browsers are supported, if you want to know more see the
[browsers] page.


## Troubleshooting
See [FAQ](https://karma-runner.github.io/0.12/intro/faq.html).


## I want to use it. Where do I sign?

You don't need to sign anything but here are some resources to help
you to get started...


### Obligatory Screencast.

Every serious project has a screencast, so here is ours.  Just click
[here] and let the show begin.


### Installation.

See [installation](https://karma-runner.github.io/0.12/intro/installation.html).


### Using it.

See [configuration](https://karma-runner.github.io/0.12/intro/configuration.html).


## This is so great. I want to help.

Please, see
[contributing](https://karma-runner.github.io/0.12/dev/contributing.html).


## Why did you create this?

Throughout the development of [AngularJS], we've been using [JSTD] for
testing. I really think that JSTD is a great idea. Unfortunately, we
had many problems with JSTD, so we decided to write our own test
runner based on the same idea. We wanted a simple tool just for
executing JavaScript tests that is both stable and fast. That's why we
use the awesome [Socket.io] library and [Node.js].


## My boss wants a license. So where is it?
[MIT License](./LICENSE)


[AngularJS]: https://angularjs.org/
[JSTD]: https://code.google.com/p/js-test-driver/
[Socket.io]: http://socket.io/
[Node.js]: http://nodejs.org/
[Jasmine]: https://github.com/karma-runner/karma-jasmine
[Mocha]: https://github.com/karma-runner/karma-mocha
[QUnit]: https://github.com/karma-runner/karma-qunit
[here]: https://www.youtube.com/watch?v=MVw8N3hTfCI
[Mailing List]: https://groups.google.com/forum/#!forum/karma-users
[Issue Tracker]: https://github.com/karma-runner/karma/issues
[@JsKarma]: https://twitter.com/JsKarma
[RequireJS]: http://requirejs.org/
[Istanbul]: https://github.com/gotwarlost/istanbul

[browsers]: https://karma-runner.github.io/0.12/config/browsers.html
[documentation]: https://karma-runner.github.io
", `id`:687, `subTitle`:"Library", `title`:"Karma", `updated`:1440946238333})
create (_688:`Feature` {`capability`:203, `created`:1440945695249, `id`:688, `tool`:687, `updated`:1440945695249})
create (_689:`Tool` {`created`:1440945985973, `description`:"TestingBot provides easy cross browser testing in the cloud. Keeping your websites bug-free is mission critical, we provide a service to easily test your websites in different browsers, either automatically or manually, 24 hours a day.

Instant access to mobile and desktop browsers
Easy Automated and Manual browser/mobile testing
Test in over 240 browser/OS combinations
Every test runs on a pristine virtual machine, optimized for speed and security.", `id`:689, `subTitle`:"Software as a Service2", `title`:"TestingBot", `updated`:1452096731267})
create (_690:`Feature` {`capability`:203, `created`:1440946004809, `id`:690, `tool`:689, `updated`:1440946004809})
create _633-[:`IMPLEMENTS` {`created`:1438733053685, `id`:612, `updated`:1438733053685}]->_662
create _634-[:`IMPLEMENTS` {`created`:1438871680273, `id`:623, `updated`:1438871680273}]->_665
create _635-[:`IMPLEMENTS`]->_680
create _635-[:`IMPLEMENTS` {`id`:3011}]->_645
create _636-[:`IMPLEMENTS` {`id`:3021}]->_646
create _637-[:`IMPLEMENTS` {`id`:3031}]->_647
create _638-[:`IMPLEMENTS` {`id`:3041}]->_648
create _639-[:`IMPLEMENTS` {`id`:3051}]->_649
create _645-[:`SUPPORTS` {`id`:3013}]->_636
create _645-[:`PROVIDES` {`id`:3012}]->_640
create _646-[:`SUPPORTS` {`id`:3024}]->_638
create _646-[:`SUPPORTS` {`id`:3023}]->_637
create _646-[:`PROVIDES` {`id`:3022}]->_643
create _647-[:`PROVIDES` {`id`:3032}]->_644
create _648-[:`PROVIDES` {`id`:3042}]->_644
create _649-[:`SUPPORTS` {`id`:3053}]->_637
create _649-[:`SUPPORTS` {`id`:3054}]->_636
create _649-[:`PROVIDES` {`id`:3052}]->_641
create _662-[:`PROVIDES` {`created`:1438733054011, `id`:613, `updated`:1438733054011}]->_640
create _665-[:`PROVIDES` {`created`:1438871680694, `id`:624, `updated`:1438871680694}]->_664
create _666-[:`META_RELATIONSHIP` {`name`:"IMPLEMENTS"}]->_667
create _667-[:`META_RELATIONSHIP` {`name`:"SUPPORTS"}]->_666
create _667-[:`META_RELATIONSHIP` {`name`:"PROVIDES"}]->_668
create _669-[:`META_RELATIONSHIP` {`name`:"META_RELATIONSHIP"}]->_669
create _673-[:`IMPLEMENTS` {`created`:1440245451463, `id`:631, `updated`:1440245451463}]->_677
create _674-[:`IMPLEMENTS` {`created`:1440245439282, `id`:629, `updated`:1440245439282}]->_676
create _676-[:`PROVIDES` {`created`:1440245439477, `id`:630, `updated`:1440245439477}]->_675
create _677-[:`PROVIDES` {`created`:1440245451594, `id`:632, `updated`:1440245451594}]->_675
create _680-[:`PROVIDES`]->_642
create _681-[:`IMPLEMENTS`]->_682
create _682-[:`PROVIDES`]->_642
create _683-[:`IMPLEMENTS`]->_684
create _684-[:`PROVIDES`]->_642
create _685-[:`IMPLEMENTS`]->_686
create _686-[:`PROVIDES`]->_642
create _687-[:`IMPLEMENTS`]->_688
create _688-[:`PROVIDES`]->_642
create _689-[:`IMPLEMENTS`]->_690
create _690-[:`PROVIDES`]->_642
;
commit
