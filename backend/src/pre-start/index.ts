/**
 * Runs BEFORE the express server is started.
 * Useful for environment variables, command-line arguments, and cron-jobs.
 */

import path from "path";
import dotenv from "dotenv";
import commandLineArgs from "command-line-args";

// Command line options
const options = commandLineArgs([
  {
    name: "env",
    alias: "e",
    defaultValue: "development",
    type: String,
  },
]);

// Set the env file
const result2 = dotenv.config({
  path: path.join(__dirname, `env/${String(options.env)}.env`),
});

if (result2.error) {
  throw result2.error;
}
