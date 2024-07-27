import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ImagePro",
  description: "Enhance and refine images effortlessly",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="flex flex-col">{children}</body>
      </html>
    </ClerkProvider>
  );
}
