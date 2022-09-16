import "../src/config/db";
import { createServer } from "../src/server";
import request, { Test } from "supertest";
import { Application } from "express";

let app: Application = {} as Application;
const getServer = async () => {
  app = await createServer();
};
getServer().catch(console.error);

jest.useRealTimers();

describe("Mobi GraphQL", () => {
  test("Create a Test", async () => {
    const testToSend = {
      totalPoints: 11,
      deviceId: "111",
      body: {
        hips: 12,
        ankles: 21,
        overhead: 32,
        postchain: 44,
        shoulders: 11,
      },
    };
    const query = `mutation Mutation {
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
    const response = await request(app).post("/graphql").send({ query: query });

    const responseParsed = JSON.parse(response.text);
    const testCreated = responseParsed.data.createTest;
    expect(responseParsed).toHaveProperty("data");
    expect(responseParsed.data).toHaveProperty("createTest");
    expect(Object.keys(testCreated)).toHaveLength(5);
    expect(testCreated.deviceId).toEqual(testToSend.deviceId);
    expect(responseParsed.data).toHaveProperty("createTest");
    expect(responseParsed.errors).toEqual(undefined);
  });
});
