import Tool from '../models/tool';

export default {
  create: function() {
    Tool.reopenClass({
      FIXTURES: [
        { id: 101, feature: [], supportedBy: [], title: 'Java', subTitle: 'Programming Language', description: 'JavaDescription' },
        { id: 102, feature: [], supportedBy: [], title: 'TortoiseSVN', subTitle: 'Application', description: 'TortoiseSVNDescription' },
        { id: 103, feature: [301], supportedBy: [], title: 'Mix', subTitle: 'Build Tool', description: 'MixDescription' },
        { id: 104, feature: [302], supportedBy: [301, 305, 306], title: 'Elixir', subTitle: 'Programming Langugage', description: 'Elixir is a functional, concurrent, general-purpose programming language that runs on the Erlang virtual machine (BEAM). Elixir builds on top of Erlang to provide distributed, fault-tolerant, soft real-time, non-stop applications but also extends it to support metaprogramming with macros and polymorphism via protocols.' },
        { id: 105, feature: [303], supportedBy: [302, 305], title: 'Postgres', subTitle: 'Database', description: 'PostgresDescription' },
        { id: 106, feature: [304], supportedBy: [302], title: 'MySQL', subTitle: 'Database', description: 'MySQLDescription' },
        { id: 107, feature: [305, 306], supportedBy: [], title: 'Heroku', subTitle: 'Platform as a Service', description: 'HerokuDescription' },
        { id: 108, feature: [307], supportedBy: [], title: 'Neo4J', subTitle: 'Database', description: 'Graph Database' },
        { id: 109, feature: [308], supportedBy: [], title: 'OrientDB', subTitle: 'Database', description: 'Graph Database' }
      ]
    });
  }
};
