import { gql } from "apollo-server-express";

export const typeDefs = gql`
  # Types
  type User {
    _id: String
    name: String!
    age: Int!
    majeur: Boolean!
  }

  # Queries
  type Query {
    getAllUsers: [User!]! # this return list of users
  }

  # Mutations
  type Mutation {
    createUser(name: String!, age: Int!): User!
  }
`;
