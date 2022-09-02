require("dotenv").config();
const pg = require("pg");

if (process.env.DATABASE) {
  pg.defaults.ssl = { rejectUnauthorized: false };
}

const sharedConfig = {
  client: "pg",
  migrations: { directory: "./data/migrations" },
  seeds: { directory: "./data/seeds" },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: process.env.DB_URI,
    seeds: { directory: "./data/seeds" },
  },
  production: {
    ...sharedConfig,
    connection: process.env.DB_URI,
    pool: { min: 2, max: 10 },
  },
};
