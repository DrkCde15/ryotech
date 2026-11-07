import type { MetadataRoute } from "next";
import { companyConfig } from "@/lib/config";
import { services } from "@/data/services";
import { cases } from "@/data/cases";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = companyConfig.url;
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/servicos`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/cases`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/tecnologias`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/sobre`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/processo`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contato`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/privacidade`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/termos`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/servicos/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const caseRoutes: MetadataRoute.Sitemap = cases.map((item) => ({
    url: `${baseUrl}/cases/${item.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseRoutes];
}
