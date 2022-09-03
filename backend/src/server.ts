import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import logger from "jet-logger";

import express, { Request, Response, NextFunction } from "express";
import StatusCodes from "http-status-codes";
import "express-async-errors";

import apiRouter from "@routes/api";
import envVars from "@shared/env-vars";

// TODO: See if you want to include cors or if it's already included via morgan/helmet/idk

// **** Variables **** //

const app = express();

// **** Set basic express settings ****# //

// Common middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Show routes called in console during development
if (envVars.nodeEnv === "development") {
  app.use(morgan("dev"));
}

// Security (helmet recommended in express docs)
if (envVars.nodeEnv === "production") {
  app.use(helmet());
}

// **** Add API Routes ****# //

// Add api router
// TODO: Come back and fix this type:
app.use("/api", apiRouter); // eslint-disable-line @typescript-eslint/no-unsafe-argument

// Error handling
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  logger.err(err, true);
  return res.status(StatusCodes.BAD_REQUEST).json({
    error: err.message,
  });
});

// **** Export default **** //

export default app;
