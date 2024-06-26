import { pgTable, timestamp, uniqueIndex, varchar } from "drizzle-orm/pg-core";

export const userRoles = pgTable(
  "user_roles",
  {
    id: varchar("id", { length: 32 }).primaryKey(),
    name: varchar("name", { length: 32 }).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    modifiedAt: timestamp("modified_at").defaultNow().notNull(),
  },
  (userRoles) => {
    return {
      uniqueIdx: uniqueIndex("name").on(userRoles.name),
    };
  },
);
