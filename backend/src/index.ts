import "./pre-start"; // Must be the first import
import logger from "jet-logger";

import envVars from "@shared/env-vars";
import server from "./server";

// 1. Verify deployment is working by deploying and going to /api/users
// 2. Check `server.ts` for adding/removing code (ie. adding cors, removing morgan, etc. - idk)
// 3. Setup Typescript with Knex using https://knexjs.org/guide/#typescript
// 4. Clear other TODOs
// 5. Build out the server :D

// Constants
const serverStartMsg = "Express server started on port: ";

// Start server
server.listen(envVars.port, () => {
  logger.info(serverStartMsg + (envVars.port as number).toString());
});
