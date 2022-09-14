import mongoose from "mongoose";

mongoose
  .connect(process.env.DB_URL ?? "")
  .then(() => {
    console.log("db is connected");
  })
  .catch((err: string) => {
    console.log(err);
  });
