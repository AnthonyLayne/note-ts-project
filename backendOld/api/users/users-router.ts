import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

export {};
const router = require("express").Router();
const USER = require("./users-model");

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  USER.getAllUsers(req.params.users)
    .then((users: Array<object>) => {
      if (!users) return res.status(404);
      return res.status(200).json(users);
    })
    .catch(next);
});

router.get("/:user_id", (req: Request, res: Response, next: NextFunction) => {
  USER.getUserById(req.params.user_id)
    .then((user: object) => {
      if (!user) return res.status(404);
      return res.status(200).json(user);
    })
    .catch(next);
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newUser = await USER.addUser({
      user_username: req.body.user_username,
      user_password: req.body.user_password,
    });

    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

router.delete("/:user_id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await USER.deleteUserById(req.params.user_id);
    //res.json(req.user);
  } catch (err) {
    next(err);
  }
});

// router.use("*", (req, res) => {
//   res.json({ api: "up" });
// });

router.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => [
  res.status(500).json({
    customMessage: "something went wrong in the user router",
  }),
]);

module.exports = router;
