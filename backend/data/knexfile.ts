import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

if (process.env.DATABASE) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  pg.defaults.ssl = { rejectUnauthorized: false };
}

const sharedConfig = {
  client: "pg",
  migrations: { directory: "./data/migrations" },
  seeds: { directory: "./data/seeds" },
};

const config = {
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

export default config;
