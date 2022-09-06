import "./pre-start"; // Must be the first import
import logger from "jet-logger";

import envVars from "@shared/env-vars";
import server from "./server";

// 2. Check `server.ts` for adding/removing code (ie. adding cors, removing morgan, etc. - idk)
//Helmet is a collection of several smaller middleware functions that set security-related HTTP response headers.
//CORS allows you to configure the web API's security. It has to do with allowing other domains to make requests against your web API.
//morgan is a Node. js and Express middleware to log HTTP requests and errors, and simplifies the process.
// 3. Setup Typescript with Knex using https://knexjs.org/guide/#typescript
// 4. Clear other TODOs
// 5. Build out the server :D

// Constants
const serverStartMsg = "Express server started on port: ";

// Start server
server.listen(envVars.port, () => {
  logger.info(serverStartMsg + (envVars.port as number).toString());
});
