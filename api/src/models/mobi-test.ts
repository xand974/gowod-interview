import mongoose from "mongoose";
import { MobiTestInterface } from "src/interfaces/mobi-test.interface";

const { Schema } = mongoose;

const mobiTestSchema = new Schema<MobiTestInterface>(
  {
    deviceId: {
      type: String,
      required: true,
    },
    totalPoints: {
      type: Number,
      required: true,
    },
    body: {
      ankles: {
        type: Number,
        required: true,
      },
      hips: {
        type: Number,
        required: true,
      },
      overhead: {
        type: Number,
        required: true,
      },
      postchain: {
        type: Number,
        required: true,
      },
      shoulders: {
        type: Number,
        required: true,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model<MobiTestInterface>("mobiTest", mobiTestSchema);
