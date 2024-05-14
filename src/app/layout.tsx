import type { Metadata } from "next";
// import { Open_Sans, Nunito_Sans } from "next/font/google";
// import localFont from "@next/font/local";

import Navbar from "./components/sections/Navbar/Navbar";
import Footer from "./components/sections/Footer";

import "./globals.css";

// const openSans = Open_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-opensans",
// });

// const nunitoSans = Nunito_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-nunito-sans",
// });

// const ubuntuSans = localFont({ src: "./assets/fonts/UbuntuSans-Regular.ttf" });
// const nunito = localFont({
//   src: "./assets/fonts/NunitoSans_7pt-Regular.ttf",
// });

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
    // <html className={`${ubuntuSans.className}`} lang="en">
    // <html className={`${nunito.className}`} lang="en">
    <html lang="en">
      {/* <html className={`${nunitoSans.variable} ${openSans.variable}`} lang="en"> */}
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
