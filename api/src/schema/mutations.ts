import { users } from "../mock/data";
import { UserModel } from "gowod_interview_types";

export const resolvers = {
  Query: {
    getAllUsers() {
      return [...users];
    },
  },
  Mutation: {
    createUser(parent: any, args: any) {
      const newUser = { ...args } as UserModel;
      users.push(newUser);
      return { ...newUser };
    },
  },
};
