import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Renolux Cameroon",
  description: "The official website of Renolux cameroon",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <title>Renolux</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
