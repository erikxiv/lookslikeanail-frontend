// Remove all nodes and relationships
MATCH (n) OPTIONAL MATCH (n)-[r]-() DELETE r, n
// Make sure only one row in the result set remains, to only create one of each below
WITH DISTINCT timestamp() as t

//
// Tools
//
CREATE (java:Tool {
  id: 101,
  title: 'Java',
  subTitle: 'Programming Language',
  description: 'JavaDescription'
}) SET java.created = timestamp(), java.updated = timestamp()

CREATE (tortoise:Tool {
  id: 102,
  title: 'TortoiseSVN',
  subTitle: 'Application',
  description: 'TortoiseSVNDescription'
}) SET tortoise.created = timestamp(), tortoise.updated = timestamp()

CREATE (mix:Tool {
  id: 103,
  title: 'Mix',
  subTitle: 'Build Tool',
  description: 'MixDescription'
}) SET mix.created = timestamp(), mix.updated = timestamp()

CREATE (elixir:Tool {
  id: 104,
  title: 'Elixir',
  subTitle: 'Programming Langugage',
  description: 'Elixir is a functional, concurrent, general-purpose programming language that runs on the Erlang virtual machine (BEAM). Elixir builds on top of Erlang to provide distributed, fault-tolerant, soft real-time, non-stop applications but also extends it to support metaprogramming with macros and polymorphism via protocols.'
}) SET elixir.created = timestamp(), elixir.updated = timestamp()

CREATE (postgres:Tool {
  id: 105,
  title: 'Postgres',
  subTitle: 'Database',
  description: 'PostgresDescription'
}) SET postgres.created = timestamp(), postgres.updated = timestamp()

CREATE (mysql:Tool {
  id: 106,
  title: 'MySQL',
  subTitle: 'Database',
  description: 'MySQLDescription'
}) SET mysql.created = timestamp(), mysql.updated = timestamp()

CREATE (heroku:Tool {
  id: 107,
  title: 'Heroku',
  subTitle: 'Platform as a Service',
  description: 'HerokuDescription'
}) SET heroku.created = timestamp(), heroku.updated = timestamp()

//
// Tasks
//
CREATE (building:Task {
  id: 201,
  title: 'Building',
  subTitle: 'Task',
  description: 'BuildingDescription'
}) SET building.created = timestamp(), building.updated = timestamp()

CREATE (hosting:Task {
  id: 202,
  title: 'Hosting',
  subTitle: 'Task',
  description: 'HostingDescription'
}) SET hosting.created = timestamp(), hosting.updated = timestamp()

CREATE (testing:Task {
  id: 203,
  title: 'Testing',
  subTitle: 'Task',
  description: 'TestingDescription'
}) SET testing.created = timestamp(), testing.updated = timestamp()

CREATE (connecting:Task {
  id: 204,
  title: 'Connecting',
  subTitle: 'Task',
  description: 'ConnectingDescription'
}) SET connecting.created = timestamp(), connecting.updated = timestamp()

CREATE (datastorage:Task {
  id: 205,
  title: 'Datastorage',
  subTitle: 'Task',
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
(mixBuilding)-[:IS_CAPABLE_OF {id: 3012}]->(building),
(mixBuilding)-[:SUPPORTS {id: 3013}]->(elixir)

CREATE (ecto:Feature {
  id: 302,
  title: 'ecto'
}) SET ecto.created = timestamp(), ecto.updated = timestamp()
CREATE (elixir)-[:IMPLEMENTS {id: 3021}]->(ecto),
(ecto)-[:IS_CAPABLE_OF {id: 3022}]->(connecting),
(ecto)-[:SUPPORTS {id: 3023}]->(postgres),
(ecto)-[:SUPPORTS {id: 3024}]->(mysql)

CREATE (postgresDatastorage:Feature {
  id: 303,
  title: 'postgresDatastorage'
}) SET postgresDatastorage.created = timestamp(), postgresDatastorage.updated = timestamp()
CREATE (postgres)-[:IMPLEMENTS {id: 3031}]->(postgresDatastorage),
(postgresDatastorage)-[:IS_CAPABLE_OF {id: 3032}]->(datastorage)

CREATE (mysqlDatastorage:Feature {
  id: 304,
  title: 'mysqlDatastorage'
}) SET mysqlDatastorage.created = timestamp(), mysqlDatastorage.updated = timestamp()
CREATE (mysql)-[:IMPLEMENTS {id: 3041}]->(mysqlDatastorage),
(mysqlDatastorage)-[:IS_CAPABLE_OF {id: 3042}]->(datastorage)

CREATE (herokuHosting:Feature {
  id: 305,
  title: 'herokuHosting'
}) SET herokuHosting.created = timestamp(), herokuHosting.updated = timestamp()
CREATE (heroku)-[:IMPLEMENTS {id: 3051}]->(herokuHosting),
(herokuHosting)-[:IS_CAPABLE_OF {id: 3052}]->(hosting),
(herokuHosting)-[:SUPPORTS {id: 3053}]->(postgres),
(herokuHosting)-[:SUPPORTS {id: 3054}]->(elixir)

CREATE (herokuBuilding:Feature {
  id: 306,
  title: 'herokuBuilding'
}) SET herokuBuilding.created = timestamp(), herokuBuilding.updated=timestamp()
CREATE (heroku)-[:IMPLEMENTS {id: 3055}]->(herokuBuilding),
(herokuBuilding)-[:IS_CAPABLE_OF {id: 3056}]->(building),
(herokuBuilding)-[:SUPPORTS {id: 3057}]->(elixir)

