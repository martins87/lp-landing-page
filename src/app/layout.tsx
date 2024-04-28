import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title:
    "LibertyPay - Save when you send money internationally to friends or family",
  description:
    "The fastest and cheapest way to send money to friends or loved ones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
