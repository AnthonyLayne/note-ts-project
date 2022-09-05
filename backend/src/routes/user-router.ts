import { Request, Response, Router, NextFunction, ErrorRequestHandler } from "express";
import StatusCodes from "http-status-codes";

// const USER = require("./users-model");
import userService from "@services/userService";

// **** Variables **** //

// Misc
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export const USER_ROUTES = {
  GET_ALL: "/",
  GET_ONE: "/:user_id",
  POST: "/",
  DELETE: "/:user_id",
} as const;

// **** Routes **** //

/**
 * Get all users
 */
router.get(USER_ROUTES.GET_ALL, (req: Request, res: Response, next: NextFunction) => {
  userService
    .getAllUsers()
    .then((users: Array<object>) => {
      if (!users) return res.status(404);
      return res.status(200).json(users);
    })
    .catch(next);
});

router.get(
  USER_ROUTES.GET_ONE,
  (req: Request<{ user_id: number }>, res: Response, next: NextFunction) => {
    userService
      .getUserById(req.params.user_id)
      .then((user) => {
        if (!user) return res.status(404);
        return res.status(200).json(user);
      })
      .catch(next);
  }
);

router.post(USER_ROUTES.POST, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user_username, user_password } = req.body;
    const newUser = await userService.addUser(user_username, user_password);
    console.log("after addUser Await", newUser);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

router.delete(
  USER_ROUTES.DELETE,
  async (req: Request<{ user_id: number }>, res: Response, next: NextFunction) => {
    try {
      await userService.deleteUserById(req.params.user_id);
    } catch (err) {
      next(err);
    }
  }
);

// // router.use("*", (req, res) => {
// //   res.json({ api: "up" });
// // });

router.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => [
  res.status(500).json({
    customMessage: "something went wrong in the user router",
  }),
]);

// **** Export default **** //

export default router;
