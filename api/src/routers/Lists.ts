import { Router, Request, Response } from "express";
import List from "../models/list";
import { checkToken, checkAdmin } from "../middlewares/verify";
const router = Router();

//ADD
router.post(
  "/add",
  [checkToken, checkAdmin],
  async (req: Request, res: Response) => {
    try {
      const list = new List(req.body);
      const newList = await list.save();
      return res.status(200).json(newList);
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  }
);
//UPDATE
router.put(
  "/:id",
  [checkToken, checkAdmin],
  async (req: Request, res: Response) => {
    try {
      const updatedList = await List.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      return res.status(200).json(updatedList);
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  }
);

//DELETE
router.delete(
  "/:id",
  [checkToken, checkAdmin],
  async (req: Request, res: Response) => {
    try {
      await List.findByIdAndDelete(req.params.id);
      return res.status(200).json("List has been deleted successfully");
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  }
);

//GET RANDOM LIST
router.get("/random", checkToken, async (req: Request, res: Response) => {
  const suggestion = req.query.suggestion;
  let list;
  try {
    if (suggestion) {
      list = await List.aggregate([{ $sample: { size: 1 } }]);
    } else {
      list = await List.aggregate([{ $sample: { size: 8 } }]);
    }
    return res.status(200).json(list);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

//GET LISTS
router.get(
  "/all",
  [checkToken, checkAdmin],
  async (req: Request, res: Response) => {
    try {
      const lists = await List.find({});
      return res.status(200).json(lists);
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  }
);

export default router;
