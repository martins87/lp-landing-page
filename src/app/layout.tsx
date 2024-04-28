import type { Metadata } from "next";
import { Open_Sans, Ubuntu } from "next/font/google";

import Navbar from "./components/Navbar";

import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-opensans",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-ubuntu",
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
      <body className={`${ubuntu.variable} ${openSans.variable} font-ubuntu`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
