import { ObjectId, Document } from "mongoose";
export interface UserInterface extends Document {
  _id: ObjectId;
  isAdmin: boolean;
  isSubscribed: boolean;
  email: string;
  fullName: string;
  password: string;
}
