import mongoose from "mongoose";

mongoose
  .connect(process.env.DB_URL ?? "mongodb://localhost:27017/GowodApp")
  .then(() => {
    console.log("db is connected");
  })
  .catch((err: string) => {
    console.log(err);
  });
