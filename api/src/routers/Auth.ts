import { Request, Response } from "express";
import User from "../models/user";
import { Router } from "express";
import bcrypt from "bcrypt";
import { createAccessToken } from "../helpers/jwt";

const router = Router();

router.post("/register", async (req: Request, res: Response) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);
    const user = new User({
      ...req.body,
      password: hashPass,
      isAdmin: false,
      isSubscribed: false,
    });

    await user.save();
    return res.status(200).json({ message: "user created" });
  } catch (error) {
    return res.status(500).json("err : " + error);
  }
});

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const userFound = await User.findOne({ username });
    if (!userFound) return res.status(400).json({ message: "cannot login" });

    const isMatched = await bcrypt.compare(password, userFound.password);
    if (!isMatched)
      return res.status(401).json("mot de passe ou identifiant incorrecte");

    const accessToken = createAccessToken(userFound);
    return res.status(200).json({ accessToken });
  } catch (err) {
    return res.status(500).json({ err: err });
  }
});
export default router;
