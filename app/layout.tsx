import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "./Provider";
import Navbar from "../components/Navbar";
import { Nunito } from "next/font/google";

// Load custom and Google fonts
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

export const metadata: Metadata = {
  title: "RoadRestro",
  description: "Generated by create next app",
};

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Provider> {/* Wrap the entire app with Provider */}
          <Navbar />
          <main>{children}</main> {/* Ensure proper structure */}
        </Provider>
      </body>
    </html>
  );
}