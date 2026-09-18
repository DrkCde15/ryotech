import { MetadataRoute } from "next";

export const dynamic = "force-dynamic";

export async function GET(): Promise<Response> {
  const baseUrl = "https://juliocsaressantana.vercel.app";

  const sitemap: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/sobre`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/projetos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/stack`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/experiencia`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contato`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  return new Response(JSON.stringify(sitemap), {
    headers: { "Content-Type": "application/xml" },
  });
}
