import mongoose from "mongoose";
import { MovieInterface } from "../interfaces/movie-interface";
const { Schema } = mongoose;

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
    },
    desc: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
    },
    bigPicture: {
      type: String,
    },
    videoURL: {
      type: String,
      min: 4,
    },
    isSeries: {
      type: Boolean,
      default: false,
    },
    ageLimit: {
      type: Number,
      min: 3,
      max: 18,
    },
    genre: {
      type: Array,
      default: [],
    },
    year: {
      type: Number,
    },
    duration: {
      type: Number,
    },
    category: {
      type: String,
    },
  },
  { timestamps: true }
);
movieSchema.index({ title: "text" });

export default mongoose.model<MovieInterface>("movie", movieSchema);
