// Remove all nodes and relationships
MATCH (n) OPTIONAL MATCH (n)-[r]-() DELETE r, n
// Make sure only one row in the result set remains, to only create one of each below
WITH DISTINCT timestamp() as t

//
// Tools
//
CREATE (java:Tool:Concept {
  id: 101,
  title: 'Java',
  subTitle: 'Programming Language',
  description: 'JavaDescription'
}) SET java.created = timestamp(), java.updated = timestamp()

CREATE (tortoise:Tool:Concept {
  id: 102,
  title: 'TortoiseSVN',
  subTitle: 'Application',
  description: 'TortoiseSVNDescription'
}) SET tortoise.created = timestamp(), tortoise.updated = timestamp()

CREATE (mix:Tool:Concept {
  id: 103,
  title: 'Mix',
  subTitle: 'Build Tool',
  description: 'MixDescription'
}) SET mix.created = timestamp(), mix.updated = timestamp()

CREATE (elixir:Tool:Concept {
  id: 104,
  title: 'Elixir',
  subTitle: 'Programming Langugage',
  description: 'Elixir is a functional, concurrent, general-purpose programming language that runs on the Erlang virtual machine (BEAM). Elixir builds on top of Erlang to provide distributed, fault-tolerant, soft real-time, non-stop applications but also extends it to support metaprogramming with macros and polymorphism via protocols.'
}) SET elixir.created = timestamp(), elixir.updated = timestamp()

CREATE (postgres:Tool:Concept {
  id: 105,
  title: 'Postgres',
  subTitle: 'Database',
  description: 'PostgresDescription'
}) SET postgres.created = timestamp(), postgres.updated = timestamp()

CREATE (mysql:Tool:Concept {
  id: 106,
  title: 'MySQL',
  subTitle: 'Database',
  description: 'MySQLDescription'
}) SET mysql.created = timestamp(), mysql.updated = timestamp()

CREATE (heroku:Tool:Concept {
  id: 107,
  title: 'Heroku',
  subTitle: 'Platform as a Service',
  description: 'HerokuDescription'
}) SET heroku.created = timestamp(), heroku.updated = timestamp()

CREATE (neo4j:Tool:Concept {
  id: 108,
  title: 'Neo4J',
  subTitle: 'Database',
  description: 'Graph Database'
}) SET neo4j.created = timestamp(), neo4j.updated = timestamp()

CREATE (orientdb:Tool:Concept {
  id: 109,
  title: 'OrientDB',
  subTitle: 'Database',
  description: 'Graph Database'
}) SET orientdb.created = timestamp(), orientdb.updated = timestamp()

//
// Capabilities
//
CREATE (building:Capability {
  id: 201,
  title: 'Building',
  subTitle: 'Capability',
  description: 'BuildingDescription'
}) SET building.created = timestamp(), building.updated = timestamp()

CREATE (hosting:Capability {
  id: 202,
  title: 'Hosting',
  subTitle: 'Capability',
  description: 'HostingDescription'
}) SET hosting.created = timestamp(), hosting.updated = timestamp()

CREATE (testing:Capability {
  id: 203,
  title: 'Testing',
  subTitle: 'Capability',
  description: 'TestingDescription'
}) SET testing.created = timestamp(), testing.updated = timestamp()

CREATE (connecting:Capability {
  id: 204,
  title: 'Connecting',
  subTitle: 'Capability',
  description: 'ConnectingDescription'
}) SET connecting.created = timestamp(), connecting.updated = timestamp()

CREATE (datastorage:Capability {
  id: 205,
  title: 'Datastorage',
  subTitle: 'Capability',
  description: 'DatastorageDescription'
}) SET datastorage.created = timestamp(), datastorage.updated = timestamp()

//
// Features
//
CREATE (mixBuilding:Feature {
  id: 301,
  title: 'mixBuilding'
}) SET mixBuilding.created = timestamp(), mixBuilding.updated = timestamp()
CREATE (mix)-[:IMPLEMENTS {id: 3011}]->(mixBuilding),
(mixBuilding)-[:PROVIDES {id: 3012}]->(building),
(mixBuilding)-[:SUPPORTS {id: 3013}]->(elixir)

CREATE (ecto:Feature {
  id: 302,
  title: 'ecto'
}) SET ecto.created = timestamp(), ecto.updated = timestamp()
CREATE (elixir)-[:IMPLEMENTS {id: 3021}]->(ecto),
(ecto)-[:PROVIDES {id: 3022}]->(connecting),
(ecto)-[:SUPPORTS {id: 3023}]->(postgres),
(ecto)-[:SUPPORTS {id: 3024}]->(mysql)

CREATE (postgresDatastorage:Feature {
  id: 303,
  title: 'postgresDatastorage'
}) SET postgresDatastorage.created = timestamp(), postgresDatastorage.updated = timestamp()
CREATE (postgres)-[:IMPLEMENTS {id: 3031}]->(postgresDatastorage),
(postgresDatastorage)-[:PROVIDES {id: 3032}]->(datastorage)

CREATE (mysqlDatastorage:Feature {
  id: 304,
  title: 'mysqlDatastorage'
}) SET mysqlDatastorage.created = timestamp(), mysqlDatastorage.updated = timestamp()
CREATE (mysql)-[:IMPLEMENTS {id: 3041}]->(mysqlDatastorage),
(mysqlDatastorage)-[:PROVIDES {id: 3042}]->(datastorage)

CREATE (herokuHosting:Feature {
  id: 305,
  title: 'herokuHosting'
}) SET herokuHosting.created = timestamp(), herokuHosting.updated = timestamp()
CREATE (heroku)-[:IMPLEMENTS {id: 3051}]->(herokuHosting),
(herokuHosting)-[:PROVIDES {id: 3052}]->(hosting),
(herokuHosting)-[:SUPPORTS {id: 3053}]->(postgres),
(herokuHosting)-[:SUPPORTS {id: 3054}]->(elixir)

CREATE (herokuBuilding:Feature {
  id: 306,
  title: 'herokuBuilding'
}) SET herokuBuilding.created = timestamp(), herokuBuilding.updated=timestamp()
CREATE (heroku)-[:IMPLEMENTS {id: 3061}]->(herokuBuilding),
(herokuBuilding)-[:PROVIDES {id: 3062}]->(building),
(herokuBuilding)-[:SUPPORTS {id: 3063}]->(elixir)

CREATE (neo4jDatastorage:Feature {
  id: 307,
  title: 'neo4jDatastorage'
}) SET neo4jDatastorage.created = timestamp(), neo4jDatastorage.updated = timestamp()
CREATE (neo4j)-[:IMPLEMENTS {id: 3071}]->(neo4jDatastorage),
(neo4jDatastorage)-[:PROVIDES {id: 3072}]->(datastorage)

CREATE (orientdbDatastorage:Feature {
  id: 308,
  title: 'orientdbDatastorage'
}) SET orientdbDatastorage.created = timestamp(), orientdbDatastorage.updated = timestamp()
CREATE (orientdb)-[:IMPLEMENTS {id: 3081}]->(orientdbDatastorage),
(orientdbDatastorage)-[:PROVIDES {id: 3082}]->(datastorage)