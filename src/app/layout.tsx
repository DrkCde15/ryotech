import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { companyConfig, metadataConfig } from "@/lib/config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(metadataConfig.url),
  title: {
    default: metadataConfig.title.default,
    template: metadataConfig.title.template,
  },
  description: metadataConfig.description,
  applicationName: companyConfig.name,
  keywords: metadataConfig.keywords,
  authors: [{ name: companyConfig.name, url: companyConfig.url }],
  creator: companyConfig.name,
  publisher: companyConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: companyConfig.url,
    siteName: companyConfig.name,
    title: metadataConfig.title.default,
    description: metadataConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: metadataConfig.title.default,
    description: metadataConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: companyConfig.name,
  legalName: companyConfig.legalName,
  url: companyConfig.url,
  email: companyConfig.email,
  description: companyConfig.description,
  foundingDate: companyConfig.founded,
  sameAs: [companyConfig.instagram],
  areaServed: "BR",
  knowsAbout: [
    "Inteligência Artificial",
    "Automação de Processos",
    "Análise de Dados",
    "Desenvolvimento de Sites",
    "Aplicativos",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body className="flex min-h-full flex-col bg-[#050505] text-[#fafafa]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black"
        >
          Pular para o conteúdo
        </a>
        <Navbar />
        <div id="conteudo" className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
