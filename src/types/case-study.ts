export interface Stat {
  label: string;
  val: string;
}

export interface CaseStudy {
  title: string;
  excerpt: string;
  image: string;
  link: string;
}

export interface ServiceDelivered {
  title: string;
  description?: string;
}

export interface CaseStudyDetail {
  title: string;
  banner: string;
  scope: string[];
  overview: string;
  challenge: string;
  solution: string;
  stats: Stat[];
  gallery: string[];
  /** Richer "Services Delivered" list (title + description). Falls back to `scope` when absent. */
  servicesDelivered?: ServiceDelivered[];
  /** External client website, shown as a link on the detail page when present. */
  websiteUrl?: string;
}
