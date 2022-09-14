import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

export const checkToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const t = req.headers.authorization;
  if (!t) res.status(401).json("you are not authentificated");

  const token = t?.split(" ")[1];
  jwt.verify(
    token || "",
    process.env.ACCESS_TOKEN_KEY || "",
    (err, payload) => {
      if (!err) {
        req.user = payload;
        next();
      } else {
        return res.status(403).json("token is not valid");
      }
    }
  );
};

export const checkAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (req.user.isAdmin === true) {
    next();
  } else {
    res.status(401).json("you are not allowed to do this");
  }
};
