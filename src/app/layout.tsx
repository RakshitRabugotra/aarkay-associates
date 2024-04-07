import type { Metadata } from "next";
import "./globals.css";

// Internal Dependencies
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// Constants
import { TITLE as title, DESCRIPTION as description } from "@/constants/constants";

export const metadata: Metadata = {
  title,
  description
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-stone-50">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
