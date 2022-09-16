import { gql } from "@apollo/client";

export const CREATE_TEST = gql`
  mutation Mutation($test: MobiInput) {
    createTest(test: $test) {
      deviceId
      totalPoints
      createdAt
      _id
      body {
        ankles
        hips
        shoulders
        postchain
        overhead
      }
    }
  }
`;
