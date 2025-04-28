import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import styles from "../../page.module.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get Client by id",
  description: "getting client by id in the url",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
