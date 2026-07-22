import type { MetadataRoute } from "next";

// Required by `output: 'export'` — metadata routes must be emitted as files.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://gourmetica.co.uk/sitemap.xml",
  };
}
