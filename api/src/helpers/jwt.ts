const jwt = require("jsonwebtoken");
import { UserInterface } from "../interfaces/user-interface";

export const createAccessToken = (user: UserInterface) => {
  return jwt.sign(
    { id: user._id, isAdmin: user.isAdmin, isSubscribed: user.isSubscribed },
    process.env.ACCESS_TOKEN_KEY,
    { expiresIn: "1d" }
  );
};
