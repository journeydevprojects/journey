import type { Metadata } from "next";
import {  Lora } from "next/font/google";
import "./globals.css";

const loraFont = Lora({subsets: ['latin']});

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
    <html lang="en">
      <body className={loraFont.className}>{children}</body>
    </html>
  );
}
