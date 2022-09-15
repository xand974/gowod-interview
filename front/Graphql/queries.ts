import { gql } from "@apollo/client";

export const GET_MOBI_TESTS = gql`
  query Query($deviceId: String) {
    getTestsById(deviceId: $deviceId) {
      _id
      deviceId
      totalPoints
      body {
        ankles
        hips
        overhead
        postchain
        shoulders
      }
    }
  }
`;

export const GET_ALL_TESTS = gql`
  query GetTests {
    getTests {
      _id
      deviceId
      totalPoints
      body {
        ankles
        hips
      }
    }
  }
`;
