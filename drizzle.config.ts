import "dotenv/config";
import type { Config } from "drizzle-kit";
import "dotenv/config";

export default {
  schema: "./src/lib/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    host: process.env.DB_HOST!,
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
  },
} satisfies Config;
