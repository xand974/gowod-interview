import { ObjectId, Document } from "mongoose";
export interface MovieInterface extends Document {
  _id: ObjectId;
  title: string;
  desc: string;
  thumbnail: string;
  videoURL: string;
  isSeries: boolean;
  ageLimit: number;
  genre: string[];
  year: string;
}
