import Link from "next/link";

export const metadata = {
  title: "News & Insights",
  description: "Stay ahead with the latest strategies in growth marketing, web design, local SEO, and digital positioning for hospitality and B2B brands."
};

export default function NewsIndex() {
  const articles = [
    {
      slug: "how-to-generate-more-leads-2026",
      title: "How to Generate More Leads for Your Business in 2026",
      summary: "Every business wants more enquiries, but generating quality leads requires more than just running advertisements. A successful growth strategy combines a high-converting website, SEO, Google Ads, social media, and compelling content.",
      image: "/images/news/1-How to Generate More Leads for Your Business in 2026.png",
      date: "July 2, 2026",
      readTime: "4 min read"
    },
    {
      slug: "10-website-mistakes-costing-customers",
      title: "10 Website Mistakes That Are Costing You Customers",
      summary: "Your website is often the first impression of your business. Slow loading times, poor mobile responsiveness, confusing navigation, and weak calls-to-action can significantly reduce conversions. Learn the most common mistakes and how to fix them.",
      image: "/images/news/10 Website Mistakes That Are Costing You Customers_.png",
      date: "June 28, 2026",
      readTime: "5 min read"
    },
    {
      slug: "why-branding-matters-more-than-ever",
      title: "Why Branding Matters More Than Ever",
      summary: "Strong branding goes beyond a memorable logo. It creates trust, communicates your values, and helps customers choose your business over competitors. Discover how consistent branding across your website and socials builds loyalty.",
      image: "/images/news/Why Branding Matters More Than Ever.png",
      date: "June 15, 2026",
      readTime: "4 min read"
    }
  ];

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
            {articles.map((post, index) => (
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
