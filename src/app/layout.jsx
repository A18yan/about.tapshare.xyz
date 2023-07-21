import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "./nav/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TapShare",
  description:
    "TapShare is a simple, secure, and reliable file sharing platform that allows users to quickly and easily send large files over the internet. Whether you need to send files to friends and family, or share important documents with colleagues and clients, TapShare provides a convenient and secure solution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
