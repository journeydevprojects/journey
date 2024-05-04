import { db } from "@/lib/drizzle";
import { userRoles } from "@/lib/schema";

export default async function Home() {
  // TODO this is just here as an example of querying the db to prove it works, replace once we get other working examples
  const res = await db.select().from(userRoles);
  console.log(res);

  return (
    <main className="w-full h-full p-4">
      <h1>Public App Home</h1>
    </main>
  );
}
