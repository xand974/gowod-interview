import { ObjectId, Document } from "mongoose";

export interface MobiTestInterface extends Document {
  _id: ObjectId;
  deviceId: string;
  totalPoints: number;
  body: {
    ankles: number;
    hips: number;
    overhead: number;
    postchain: number;
    shoulders: number;
  };
  testCount: number;
}
