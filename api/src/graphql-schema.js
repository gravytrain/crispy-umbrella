import * as neo4jgraphql from "neo4j-graphql-js";
import * as data from "./schema.graphql";

const neo4j = neo4jgraphql;
export const typeDefs = data;
