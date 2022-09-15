import mobiTestSchema from "../../src/models/mobi-test";
import { MobiTestModel } from "gowod_interview_types";

export const resolvers = {
  Query: {
    async getTestsById(_: any, { deviceId }: { deviceId: string }) {
      try {
        const testFound = await mobiTestSchema.find({ deviceId: deviceId });
        if (!testFound) return [];
        return testFound;
      } catch (error) {
        throw error;
      }
    },
    async getTests() {
      console.log("hier");

      return await mobiTestSchema.find({});
    },
  },
  Mutation: {
    async createTest(_: any, { test }: { test: MobiTestModel }) {
      try {
        const _test = new mobiTestSchema({ ...test });
        const newTest = await _test.save();
        return { ...newTest };
      } catch (error) {
        throw error;
      }
    },
  },
};
