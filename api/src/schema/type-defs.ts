import { gql } from "apollo-server-express";

export const typeDefs = gql`
  scalar Date

  type MobiTest {
    _id: String
    deviceId: String
    totalPoints: Float
    body: BodyTest
    createdAt: Date
  }

  type BodyTest {
    ankles: Float
    hips: Float
    overhead: Float
    postchain: Float
    shoulders: Float
  }

  input MobiInput {
    deviceId: String
    totalPoints: Float
    body: BodyInput
  }

  input BodyInput {
    ankles: Float
    hips: Float
    overhead: Float
    postchain: Float
    shoulders: Float
  }

  # Queries
  type Query {
    getTestsById(deviceId: String): [MobiTest!]
  }

  # Mutations
  type Mutation {
    createTest(test: MobiInput): MobiTest
  }
`;
