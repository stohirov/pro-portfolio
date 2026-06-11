import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Archivo, IBM_Plex_Mono } from "next/font/google";
import Spotlight from "@/components/Spotlight";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
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

export const viewport: Viewport = {
  themeColor: "#0a0d11",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <Spotlight />
        {children}
      </body>
    </html>
  );
}
