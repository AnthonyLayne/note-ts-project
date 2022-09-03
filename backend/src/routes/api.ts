import { Router } from "express";

import userRouter from "./user-router";

// Export the base-router
const baseRouter = Router();

// ---- Setup Routers -----------------------------------------------------------------------------
baseRouter.use("/users", userRouter);
// ------------------------------------------------------------------------------------------------

export default baseRouter;
