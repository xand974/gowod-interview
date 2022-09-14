import mongoose from "mongoose";
import { ListInterface } from "../interfaces/list-interface";

const { Schema } = mongoose;

const listSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: Array, default: [] },
    type: { type: String },
    genre: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<ListInterface>("list", listSchema);
