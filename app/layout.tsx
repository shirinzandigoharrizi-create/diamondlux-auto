import type { Metadata } from "next";
import "./globals.css";
import ElevenLabsWidget from "@/components/ElevenLabsWidget";

export const metadata: Metadata = {
  title: "DiamondLux Auto — Luxury Auto Detailing",
  description: "Premium auto detailing, ceramic coating, paint protection film, and yacht detailing services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,600;0,6..96,700;1,6..96,400;1,6..96,500&family=Jost:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#0A0A0A]">
        {children}
        <ElevenLabsWidget />
      </body>
    </html>
  );
}
