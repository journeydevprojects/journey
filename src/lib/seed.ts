import { userRoles } from "./schema";
import { db } from "@/lib/drizzle";
import { loadEnvConfig } from "@next/env";

const dev = process.env.NODE_ENV !== "production";
loadEnvConfig("./", dev);

const main = async () => {
  const userRoleData: (typeof userRoles.$inferInsert)[] = [
    {
      id: "author_group_admin",
      name: "Admin",
    },
    {
      id: "author_group_editor",
      name: "Editor",
    },
    {
      id: "author_group_viewer",
      name: "Viewer",
    },
  ];

  console.log("Seed started...");

  await db.insert(userRoles).values(userRoleData).onConflictDoNothing();

  console.log("Seed completed :)");
};

void main();
