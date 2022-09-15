import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type MobiTest {
    _id: String
    deviceId: String
    totalPoints: Int
    body: BodyTest
  }

  type BodyTest {
    ankles: Int
    hips: Int
    overhead: Int
    postchain: Int
    shoulders: Int
  }

  input MobiInput {
    _id: String
    deviceId: String
    totalPoints: Int
    body: BodyInput
  }

  input BodyInput {
    ankles: Int
    hips: Int
    overhead: Int
    postchain: Int
    shoulders: Int
  }

  # Queries
  type Query {
    getTestsById(deviceId: String): [MobiTest!]
    getTests: [MobiTest!]!
  }

  # Mutations
  type Mutation {
    createTest(test: MobiInput): MobiTest!
  }
`;
