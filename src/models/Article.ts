import type { Article as IArticle } from "@/types";

export class ArticleModel implements IArticle {
  slug: string;
  title: string;
  summary: string;
  image: string;
  date: string;
  readTime: string;
  content?: string[];

  constructor(article: IArticle) {
    this.slug = article.slug;
    this.title = article.title;
    this.summary = article.summary;
    this.image = article.image;
    this.date = article.date;
    this.readTime = article.readTime;
    this.content = article.content;
  }
}
