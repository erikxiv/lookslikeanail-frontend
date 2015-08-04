import Tool from '../models/tool';

export default {
  create: function() {
    Tool.reopenClass({
      FIXTURES: [
        { id: 101, title: 'Java', subTitle: 'Programming Language', description: 'JavaDescription' },
        { id: 102, title: 'TortoiseSVN', subTitle: 'Application', description: 'TortoiseSVNDescription' },
        { id: 103, implements: [3011], title: 'Mix', subTitle: 'Build Tool', description: 'MixDescription' },
        { id: 104, implements: [3021], title: 'Elixir', subTitle: 'Programming Langugage', description: 'Elixir is a functional, concurrent, general-purpose programming language that runs on the Erlang virtual machine (BEAM). Elixir builds on top of Erlang to provide distributed, fault-tolerant, soft real-time, non-stop applications but also extends it to support metaprogramming with macros and polymorphism via protocols.' },
        { id: 105, implements: [3031], title: 'Postgres', subTitle: 'Database', description: 'PostgresDescription' },
        { id: 106, implements: [3041], title: 'MySQL', subTitle: 'Database', description: 'MySQLDescription' },
        { id: 107, implements: [3051], title: 'Heroku', subTitle: 'Platform as a Service', description: 'HerokuDescription' },
        { id: 108, implements: [3061], title: 'Neo4J', subTitle: 'Database', description: 'Graph Database' },
        { id: 109, implements: [3071], title: 'Heroku', subTitle: 'OrientDB', description: 'Graph Database' }
      ]
    });
  }
};