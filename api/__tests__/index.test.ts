import "../src/config/db";
import { createServer } from "../src/server";
import request from "supertest";
import { Application } from "express";
import { GET_TEST_FROM_DEVICE_ERROR_ID } from "../src/mock/data";
import {
  CREATE_TEST_QUERY,
  GET_TEST_FROM_DEVICE_ID,
  CREATE_TEST_ERROR_QUERY,
} from "../src/mock/data";

let app: Application = {} as Application;
const getServer = async () => {
  app = await createServer();
};
getServer().catch(console.error);

jest.useRealTimers();
const endpoint = "/graphql";

describe("Mobi GraphQL - mutations", () => {
  test("should create a Test", async () => {
    const sampleTest = {
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
    const response = await request(app)
      .post(endpoint)
      .send({ query: CREATE_TEST_QUERY });

    const responseParsed = JSON.parse(response.text);
    const testCreated = responseParsed.data.createTest;
    expect(responseParsed).toHaveProperty("data");
    expect(responseParsed.data).toHaveProperty("createTest");
    expect(Object.keys(testCreated)).toHaveLength(5);
    expect(testCreated.deviceId).toEqual(sampleTest.deviceId);
    expect(responseParsed.data).toHaveProperty("createTest");
    expect(responseParsed.errors).toEqual(undefined);
  });

  test("should 'createTest' return null when the body is empty", async () => {
    const response = await request(app)
      .post(endpoint)
      .send({ query: CREATE_TEST_ERROR_QUERY });

    const responseParsed = JSON.parse(response.text);
    expect(responseParsed).toHaveProperty("data");
    const testCreated = responseParsed.data.createTest;
    const errors = responseParsed.errors;
    expect(testCreated).toBe(null);
    expect(errors).toBeDefined();
  });
});

describe("Mobi GraphQL - queries", () => {
  test("should get all tests from a deviceId", async () => {
    const response = await request(app)
      .post(endpoint)
      .send({ query: GET_TEST_FROM_DEVICE_ID });
    const responseParsed = JSON.parse(response.text);
    expect(responseParsed.errors).toEqual(undefined);
    expect(responseParsed).toHaveProperty("data");
    expect(responseParsed.data).toHaveProperty("getTestsById");
    const tests = responseParsed.data.getTestsById;
    expect(tests).toBeTruthy();
    expect(tests).toBeInstanceOf(Array);
  });

  test("should getAllTestsByDeviceId throw an error when data are not provided", async () => {
    const response = await request(app)
      .post(endpoint)
      .send({ query: GET_TEST_FROM_DEVICE_ERROR_ID });

    const responseParsed = JSON.parse(response.text);

    expect(responseParsed.data).toBeUndefined();
    expect(responseParsed.errors).toBeDefined();
  });
});
