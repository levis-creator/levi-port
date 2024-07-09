import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/context/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Levis Nyingi| The software engineer",
    template: "%s | Levis Nyingi",
  },
  description:
    "Explore Levi Nyingi's profile and achievements in software development. Discover insights, tutorials, and innovative solutions crafted by Levi Nyingi, empowering developers worldwide.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth min-h-screen">
      <body className={inter.className}>
        <Navbar />
        <Provider>{children}</Provider>
        <Footer />
      </body>
    </html>
  );
}
