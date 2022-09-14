import { ObjectId, Document } from "mongoose";

export interface ListInterface extends Document {
  _id: ObjectId;
  title: string;
  content: string[];
  type: string;
  genre: string;
}
