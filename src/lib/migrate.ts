import { loadEnvConfig } from "@next/env";

import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { db } from "@/lib/drizzle";

const dev = process.env.NODE_ENV !== "production";
loadEnvConfig("./", dev);

void migrate(db, { migrationsFolder: "./drizzle" });
