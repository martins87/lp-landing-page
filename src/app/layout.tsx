import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "../components/sections/Navbar/Navbar";
import Footer from "../components/sections/Footer";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
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
      <body className={`${inter.variable} font-inter`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
