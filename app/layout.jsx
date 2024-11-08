import  { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { SessionProvider } from "./ui/context/auth";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "TeramaFlix ParternShip",
  description: "TeramaFlix ParternShip",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
       <SessionProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </SessionProvider>
    </html>
  );
}
