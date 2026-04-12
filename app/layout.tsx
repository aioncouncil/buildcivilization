import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Living City | A city engineered to make your best self inevitable",
  description:
    "A real city on 15,491 acres of Tennessee's Cumberland Plateau, built so the things that matter most stop being uphill fights. Phase 1 breaks ground this year.",
  openGraph: {
    title: "The Living City",
    description:
      "A living city engineered to make your best self inevitable. 15,491 acres in Tennessee. Phase 1 breaks ground this year.",
    url: "https://buildcivilization.com",
    siteName: "The Living City",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Living City",
    description:
      "A living city engineered to make your best self inevitable. 15,491 acres in Tennessee.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
