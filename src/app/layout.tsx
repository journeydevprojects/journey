import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const loraFont = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Journey",
  description: "The app for telling stories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={loraFont.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
