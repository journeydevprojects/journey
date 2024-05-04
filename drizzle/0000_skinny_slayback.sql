CREATE TABLE IF NOT EXISTS "user_roles" (
	"id" varchar(32) PRIMARY KEY NOT NULL,
	"name" varchar(32) NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"modifiedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "name" ON "user_roles" ("name");