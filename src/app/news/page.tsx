import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES } from "@/constants/articles";

export const metadata: Metadata = {
  title: "News & Insights",
  description: "Stay ahead with the latest strategies in growth marketing, web design, local SEO, and digital positioning for hospitality and B2B brands."
};

export default function NewsIndex() {
  return (
    <main className="news-page">
      {/* Hero Header */}
      <section className="news-hero">
        <div className="news-hero-overlay"></div>
        <div className="container">
          <div className="news-hero-content text-center">
            <h1>News & Insights</h1>
            <p>Proven growth tactics, industry benchmarks, and branding secrets from our strategy team.</p>
          </div>
        </div>
      </section>

      {/* Grid List */}
      <section className="news-grid-section section-padding">
        <div className="container">
          <div className="news-grid">
            {ARTICLES.map((post, index) => (
              <article key={index} className="news-card">
                <div className="card-image-box">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="card-meta">
                  <span className="date">{post.date}</span>
                  <span className="separator">•</span>
                  <span className="read-time">{post.readTime}</span>
                </div>
                <h3>
                  <Link href={`/news/${post.slug}`}>{post.title}</Link>
                </h3>
                <p>{post.summary}</p>
                <Link href={`/news/${post.slug}`} className="read-more-link">
                  Read Article <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
