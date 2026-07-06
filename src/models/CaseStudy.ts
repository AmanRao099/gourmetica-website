import type { CaseStudy as ICaseStudy } from "@/types";

export class CaseStudyModel implements ICaseStudy {
  title: string;
  excerpt: string;
  image: string;
  link: string;

  constructor(study: ICaseStudy) {
    this.title = study.title;
    this.excerpt = study.excerpt;
    this.image = study.image;
    this.link = study.link;
  }
}
