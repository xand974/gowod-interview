import mobiTestSchema from "../../src/models/mobi-test";
import { MobiTestModel } from "gowod_interview_types";

export const resolvers = {
  Query: {
    async getTestsById(_: any, { deviceId }: { deviceId: string }) {
      try {
        if (!deviceId)
          return {
            code: 400,
            success: false,
            message: "no deviceId provided",
          };
        const testFound = await mobiTestSchema
          .find({ deviceId: deviceId })
          .sort({ createdAt: 1 });
        if (!testFound) return [];
        return testFound;
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    async createTest(_: any, { test }: { test: Partial<MobiTestModel> }) {
      try {
        if (!test) return null;
        const _test = new mobiTestSchema({ ...test });
        const newTest = await _test.save();
        return newTest;
      } catch (error) {
        throw error;
      }
    },
  },
};
