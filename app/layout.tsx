import type { Metadata } from "next";
import { Schibsted_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sukhrob Tokhirov — Senior Software Engineer",
  description:
    "Senior engineer with 4+ years building distributed systems and microservices in Java & Spring — geospatial driver-matching, real-time pricing, and billions of records on Oracle and ClickHouse.",
  openGraph: {
    title: "Sukhrob Tokhirov — Senior Software Engineer",
    description:
      "Senior engineer with 4+ years building distributed systems and microservices in Java & Spring.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
