import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function EditorHome() {
  return (
    <>
      <header className="w-full p-4 flex justify-between border-b border-b-black">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <p className="font-bold">Journey Editor</p>
          <UserButton afterSignOutUrl={"/editor"} />
        </SignedIn>
      </header>
      <main className="w-full h-full p-4">
        <SignedIn>
          <h1>Editor Home</h1>
        </SignedIn>
      </main>
    </>
  );
}
