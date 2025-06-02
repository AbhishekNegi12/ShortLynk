import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ShortLynk - Your trusted URL Shortner ",
  description: "ShortLynk helps you to shorten yout Urls easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-pink-50`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
