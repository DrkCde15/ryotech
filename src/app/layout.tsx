import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { metadataConfig } from "@/lib/config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: metadataConfig.title.default,
    template: metadataConfig.title.template,
  },
  description: metadataConfig.description,
  authors: metadataConfig.authors,
  keywords: metadataConfig.keywords,
  metadataBase: new URL(metadataConfig.url),
  openGraph: {
    title: metadataConfig.title.default,
    description: metadataConfig.description,
    type: "website",
    siteName: "Júlio César Santana",
  },
  twitter: {
    card: "summary_large_image",
    title: metadataConfig.title.default,
    description: metadataConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-[#fafafa]">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
