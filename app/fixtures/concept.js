import Concept from '../models/concept';

export default {
  create: function() {
    Concept.reopenClass({
      FIXTURES: [
        // Note: Copy from tool, manual update needed when tools list is updated
        // supportedBy is removed, otherwise duplicate inverse references cause duplication in tests
        { id: 101, feature: [], title: 'Java', subTitle: 'Programming Language', description: 'JavaDescription' },
        { id: 102, feature: [], title: 'TortoiseSVN', subTitle: 'Application', description: 'TortoiseSVNDescription' },
        { id: 103, feature: [301], title: 'Mix', subTitle: 'Build Tool', description: 'MixDescription' },
        { id: 104, feature: [302], title: 'Elixir', subTitle: 'Programming Langugage', description: 'Elixir is a functional, concurrent, general-purpose programming language that runs on the Erlang virtual machine (BEAM). Elixir builds on top of Erlang to provide distributed, fault-tolerant, soft real-time, non-stop applications but also extends it to support metaprogramming with macros and polymorphism via protocols.' },
        { id: 105, feature: [303], title: 'Postgres', subTitle: 'Database', description: 'PostgresDescription' },
        { id: 106, feature: [304], title: 'MySQL', subTitle: 'Database', description: 'MySQLDescription' },
        { id: 107, feature: [305, 306], title: 'Heroku', subTitle: 'Platform as a Service', description: 'HerokuDescription' },
        { id: 108, feature: [307], title: 'Neo4J', subTitle: 'Database', description: 'Graph Database' },
        { id: 109, feature: [308], title: 'OrientDB', subTitle: 'Database', description: 'Graph Database' }
      ]
    });
  }
};
