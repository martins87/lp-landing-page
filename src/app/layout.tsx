import type { Metadata } from "next";
import { Open_Sans, Nunito_Sans } from "next/font/google";

import Navbar from "./components/sections/Navbar/Navbar";

import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-opensans",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-nunito-sans",
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
      <body
        className={`${nunitoSans.variable} ${openSans.variable} font-nunito`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
