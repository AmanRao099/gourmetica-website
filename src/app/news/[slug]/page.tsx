import Link from "next/link";
import { notFound } from "next/navigation";

import { ARTICLE_DETAILS } from "@/constants/articles";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return [
    { slug: "how-to-generate-more-leads-2026" },
    { slug: "10-website-mistakes-costing-customers" },
    { slug: "why-branding-matters-more-than-ever" }
  ];
}

export default function NewsDetail({ params }: PageProps) {
  const { slug } = params;
  const article = ARTICLE_DETAILS[slug];

  if (!article) {
    notFound();
  }

  return (
    <main className="article-detail-page">
      {/* Hero Header */}
      <section className="article-hero">
        <div className="article-hero-overlay"></div>
        <div className="container">
          <div className="article-hero-content text-center">
            <Link href="/news" className="back-link">
              <i className="fa fa-chevron-left" aria-hidden="true"></i> Back to Insights
            </Link>
            <h1>{article.title}</h1>
            <div className="article-meta">
              <span>{article.date}</span>
              <span className="separator">•</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="article-body-section section-padding">
        <div className="container">
          <div className="article-layout">
            <div className="article-main-content">
              <div className="article-featured-img">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="article-paragraphs">
                {article.content.map((p, idx) => (
                  <p key={idx} className={idx === 0 ? "lead-paragraph" : ""}>
                    {p}
                  </p>
                ))}
              </div>
              
              <div className="article-footer-cta">
                <h3>Want to accelerate your company&apos;s growth?</h3>
                <p>
                  Reach out to Gourmetica today. Our strategy team can review your digital assets and construct a tailored growth framework for your business.
                </p>
                <div style={{ marginTop: "25px" }}>
                  <Link href="/getintouch" className="btn btn-primary">
                    Schedule A Discovery Call
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar info */}
            <div className="article-sidebar">
              <div className="sidebar-card text-center">
                <div className="sidebar-logo">
                  <img src="/images/logo/PNG.4.png" alt="Gourmetica Icon" style={{ width: "80px", height: "auto" }} />
                </div>
                <h4>Gourmetica Strategy</h4>
                <p>We build tailor-made growth and marketing solutions for hospitality, retail, and service businesses.</p>
                <Link href="/getintouch" className="sidebar-link">Get Started Today</Link>
              </div>

              <div className="sidebar-card">
                <h4>Recent Insights</h4>
                <ul className="sidebar-list">
                  {Object.entries(ARTICLE_DETAILS)
                    .filter(([s]) => s !== slug)
                    .map(([s, data]) => (
                      <li key={s}>
                        <Link href={`/news/${s}`}>{data.title}</Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
