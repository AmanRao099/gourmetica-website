import type { MetadataRoute } from "next";
import { ALL_CASE_STUDIES } from "@/constants/results";
import { ARTICLES } from "@/constants/articles";
import { getServiceSlugs } from "@/features/services/repositories/service.repository";

// Required by `output: 'export'` — metadata routes must be emitted as files.
export const dynamic = "force-static";

const BASE_URL = "https://gourmetica.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/results`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/tably`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/aboutus`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/clients`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/news`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/faqs`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/whygourmetica`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/getintouch`, changeFrequency: "yearly", priority: 0.8 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = getServiceSlugs().map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = ALL_CASE_STUDIES.map((study) => ({
    url: `${BASE_URL}/results/${study.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const articleRoutes: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${BASE_URL}/news/${article.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes, ...articleRoutes];
}
