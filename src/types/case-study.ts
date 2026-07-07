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

export interface CaseStudyDetail {
  title: string;
  banner: string;
  scope: string[];
  overview: string;
  challenge: string;
  solution: string;
  stats: Stat[];
  gallery: string[];
}
