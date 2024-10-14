import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";

import { Sniglet } from "next/font/google";
import { CSSProperties } from "react";
import Header from "./components/general/header/Header";
import Footer from "./components/general/footer/Footer";

const ss = localFont({
  src: "./fonts/supersonic.ttf",
  variable: "--fontH",
});

export const metadata: Metadata = {
  title: "Mawissuh Four",
  description: "Mawissuh Four",
};

const sniglet = Sniglet({
  weight: ["400", "800"],
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"body"}
        style={
          {
            "--fontP": sniglet.style.fontFamily,
            "--fontH": ss.style.fontFamily,
          } as CSSProperties
        }
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
