export const CREATE_TEST_QUERY = `mutation Mutation {
    createTest(
      test: {
        totalPoints: 11
        deviceId: "111"
        body: { hips: 12, ankles: 21, overhead: 32, postchain: 44, shoulders: 11 }
      }) {
      _id
      createdAt
      deviceId
      body {
        shoulders
        postchain
        overhead
        hips
        ankles
      }
      totalPoints
    }
  }`;

export const GET_TEST_FROM_DEVICE_ID = `
    query GetTestsById {
        getTestsById(deviceId: "1111") {
        _id
        deviceId
        totalPoints
        body {
            shoulders
            postchain
            overhead
            hips
            ankles
        }
        createdAt
        }
    }`;

export const GET_TEST_FROM_DEVICE_ERROR_ID = `
    query GetTestsById {
        getTestsById() {
        _id
        deviceId
        totalPoints
        body {
            shoulders
            postchain
            overhead
            hips
            ankles
        }
        createdAt
        }
    }`;

export const CREATE_TEST_ERROR_QUERY = `mutation Mutation {
        createTest(
          test: {
            totalPoints: 11
            body: { hips: 12, ankles: 21, overhead: 32, postchain: 44, shoulders: 11 }
          }) {
          _id
          createdAt
          deviceId
          body {
            shoulders
            postchain
            overhead
            hips
            ankles
          }
          totalPoints
        }
      }`;
