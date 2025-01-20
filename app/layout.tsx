import type { Metadata } from "next";
import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs";
import Header from "@/app/components/home/Header";
import Footer from "@/app/components/home/Footer";

export const metadata: Metadata = {
  title: "Recipe & Me",
  description: "A Site for providing recipe of your favorite Dishes",
  icons: "/images/Logo.svg",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
      <ClerkProvider>
        <html lang="en">
        <body>
        <Header />
        {children}
        <Footer />
        </body>
        </html>
      </ClerkProvider>
  );
}
