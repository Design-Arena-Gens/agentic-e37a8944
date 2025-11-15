import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "15-Min Dumbbell Power Plan",
  description:
    "Minimal daily 15-minute dumbbell workout for muscle growth, strength, and balanced aesthetics with just 5kg weights."
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
