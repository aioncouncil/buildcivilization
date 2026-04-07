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
  title: "Build Civilization | Open Access to the Good Life",
  description:
    "15,491 acres on Tennessee\u2019s Cumberland Plateau. 50 founding spots. Two ways in: Zone Operator or Civilization Builder. Apply now.",
  openGraph: {
    title: "Build Civilization",
    description:
      "We\u2019re building a city from scratch. 15,000 acres. 50 founders. Apply.",
    url: "https://buildcivilization.com",
    siteName: "Build Civilization",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build Civilization",
    description:
      "We\u2019re building a city from scratch. 15,000 acres. 50 founders. Apply.",
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
