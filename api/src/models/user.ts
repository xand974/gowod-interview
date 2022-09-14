import mongoose from "mongoose";
import { UserInterface } from "../interfaces/user-interface";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
    },
    password: {
      type: String,
      min: 4,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isSubscribed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model<UserInterface>("user", userSchema);
