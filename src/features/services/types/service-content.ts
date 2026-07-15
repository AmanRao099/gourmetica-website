export interface ServiceSEO {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

/** Per-service metadata used for route generation and <head> tags. Body content lives in the bespoke page components under `../pages`. */
export interface ServiceSEOEntry {
  slug: string;
  seo: ServiceSEO;
}
