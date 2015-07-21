// Remove all nodes and relationships
MATCH (n) OPTIONAL MATCH (n)-[r]-() DELETE r, n
// Make sure only one row in the result set remains, to only create one of each below
WITH DISTINCT timestamp() as t

//
// Tools
//
CREATE (java:Tool {
  title: 'Java',
  subTitle: 'Programming Language',
  description: 'JavaDescription'
}) SET java.id = id(java), java.created = timestamp(), java.updated = timestamp()

CREATE (tortoise:Tool {
  title: 'TortoiseSVN',
  subTitle: 'Application',
  description: 'TortoiseSVNDescription'
}) SET tortoise.id = id(tortoise), tortoise.created = timestamp(), tortoise.updated = timestamp()

CREATE (mix:Tool {
  title: 'Mix',
  subTitle: 'Build Tool',
  description: 'MixDescription'
}) SET mix.id = id(mix), mix.created = timestamp(), mix.updated = timestamp()

CREATE (elixir:Tool {
  title: 'Elixir',
  subTitle: 'Programming Langugage',
  description: 'Elixir is a functional, concurrent, general-purpose programming language that runs on the Erlang virtual machine (BEAM). Elixir builds on top of Erlang to provide distributed, fault-tolerant, soft real-time, non-stop applications but also extends it to support metaprogramming with macros and polymorphism via protocols.'
}) SET elixir.id = id(elixir), elixir.created = timestamp(), elixir.updated = timestamp()

CREATE (postgres:Tool {
  title: 'Postgres',
  subTitle: 'Database',
  description: 'PostgresDescription'
}) SET postgres.id = id(postgres), postgres.created = timestamp(), postgres.updated = timestamp()

CREATE (mysql:Tool {
  title: 'MySQL',
  subTitle: 'Database',
  description: 'MySQLDescription'
}) SET mysql.id = id(mysql), mysql.created = timestamp(), mysql.updated = timestamp()

CREATE (heroku:Tool {
  title: 'Heroku',
  subTitle: 'Platform as a Service',
  description: 'HerokuDescription'
}) SET heroku.id = id(heroku), heroku.created = timestamp(), heroku.updated = timestamp()

//
// Tasks
//
CREATE (building:Task {
  title: 'Building',
  subTitle: 'Task',
  description: 'BuildingDescription'
}) SET building.id = id(building), building.created = timestamp(), building.updated = timestamp()

CREATE (hosting:Task {
  title: 'Hosting',
  subTitle: 'Task',
  description: 'HostingDescription'
}) SET hosting.id = id(hosting), hosting.created = timestamp(), hosting.updated = timestamp()

CREATE (testing:Task {
  title: 'Testing',
  subTitle: 'Task',
  description: 'TestingDescription'
}) SET testing.id = id(testing), testing.created = timestamp(), testing.updated = timestamp()

CREATE (connecting:Task {
  title: 'Connecting',
  subTitle: 'Task',
  description: 'ConnectingDescription'
}) SET connecting.id = id(connecting), connecting.created = timestamp(), connecting.updated = timestamp()

CREATE (datastorage:Task {
  title: 'Datastorage',
  subTitle: 'Task',
  description: 'DatastorageDescription'
}) SET datastorage.id = id(datastorage), datastorage.created = timestamp(), datastorage.updated = timestamp()

//
// Features
//
CREATE (mixBuilding:Feature {
  title: 'mixBuilding'
}) SET mixBuilding.id = id(mixBuilding), mixBuilding.created = timestamp(), mixBuilding.updated = timestamp()
CREATE (mix)-[:IMPLEMENTS]->(mixBuilding),
(mixBuilding)-[:IS_CAPABLE_OF]->(building),
(mixBuilding)-[:SUPPORTS]->(elixir)

CREATE (ecto:Feature {
  title: 'ecto'
}) SET ecto.id = id(ecto), ecto.created = timestamp(), ecto.updated = timestamp()
CREATE (elixir)-[:IMPLEMENTS]->(ecto),
(ecto)-[:IS_CAPABLE_OF]->(connecting),
(ecto)-[:SUPPORTS]->(postgres),
(ecto)-[:SUPPORTS]->(mysql)

CREATE (postgresDatastorage:Feature {
  title: 'postgresDatastorage'
}) SET postgresDatastorage.id = id(postgresDatastorage), postgresDatastorage.created = timestamp(), postgresDatastorage.updated = timestamp()
CREATE (postgres)-[:IMPLEMENTS]->(postgresDatastorage),
(postgresDatastorage)-[:IS_CAPABLE_OF]->(datastorage)

CREATE (mysqlDatastorage:Feature {
  title: 'mysqlDatastorage'
}) SET mysqlDatastorage.id = id(mysqlDatastorage), mysqlDatastorage.created = timestamp(), mysqlDatastorage.updated = timestamp()
CREATE (mysql)-[:IMPLEMENTS]->(mysqlDatastorage),
(mysqlDatastorage)-[:IS_CAPABLE_OF]->(datastorage)

CREATE (herokuHosting:Feature {
  title: 'herokuHosting'
}) SET herokuHosting.id = id(herokuHosting), herokuHosting.created = timestamp(), herokuHosting.updated = timestamp()
CREATE (heroku)-[:IMPLEMENTS]->(herokuHosting),
(herokuHosting)-[:IS_CAPABLE_OF]->(hosting),
(herokuHosting)-[:SUPPORTS]->(postgres),
(herokuHosting)-[:SUPPORTS]->(elixir)
