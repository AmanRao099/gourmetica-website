import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [
    { slug: "how-to-generate-more-leads-2026" },
    { slug: "10-website-mistakes-costing-customers" },
    { slug: "why-branding-matters-more-than-ever" }
  ];
}

export default async function NewsDetail({ params }) {
  const { slug } = await params;

  const articleData = {
    "how-to-generate-more-leads-2026": {
      title: "How to Generate More Leads for Your Business in 2026",
      date: "July 2, 2026",
      readTime: "4 min read",
      image: "/images/news/1-How to Generate More Leads for Your Business in 2026.png",
      content: [
        "Generating more leads isn't about spending more money—it's about creating a smarter marketing strategy.",
        "In today's competitive market, customers expect businesses to be visible, trustworthy, and easy to engage with. Whether you're a local business or a growing national brand, your marketing should work together to guide potential customers from discovery to conversion.",
        "A successful lead generation strategy begins with a professionally designed website. Your website should load quickly, be fully responsive on mobile devices, and encourage visitors to take action through clear calls-to-action and enquiry forms.",
        "Search Engine Optimisation (SEO) helps your business appear when potential customers search for your services, while Google Ads provide immediate visibility for high-intent searches. Combined with engaging social media content and email marketing, these channels create a consistent customer journey that builds trust over time.",
        "Data is equally important. Monitoring website traffic, conversion rates, and campaign performance allows businesses to make informed decisions and continuously improve results.",
        "At Gourmetica, we develop integrated marketing strategies that combine website development, SEO, paid advertising, branding, and content creation to help businesses generate more enquiries and sustainable growth.",
        "The businesses that continue to grow in 2026 won't necessarily be those with the largest budgets—they'll be the ones with the smartest marketing systems."
      ]
    },
    "10-website-mistakes-costing-customers": {
      title: "10 Website Mistakes That Are Costing You Customers",
      date: "June 28, 2026",
      readTime: "5 min read",
      image: "/images/news/10 Website Mistakes That Are Costing You Customers_.png",
      content: [
        "Your website is often the first interaction a customer has with your business. If it doesn't create confidence within seconds, potential customers may leave before contacting you.",
        "One of the biggest mistakes businesses make is having a slow website. Research consistently shows that even a one-second delay can reduce conversions significantly.",
        "Another common issue is poor mobile optimisation. With the majority of users browsing on smartphones, every page should provide a seamless mobile experience.",
        "Confusing navigation, outdated branding, and unclear messaging can also reduce customer trust. Visitors should immediately understand who you are, what you offer, and why they should choose your business.",
        "Strong calls-to-action are equally important. Buttons such as 'Get a Quote', 'Book a Consultation', or 'Contact Us' should be visible throughout the website and encourage visitors to take the next step.",
        "Finally, many businesses fail to monitor website performance. Without analytics, conversion tracking, and regular optimisation, it's impossible to understand what is working and what needs improvement.",
        "Your website shouldn't simply look attractive—it should become one of your strongest sales tools."
      ]
    },
    "why-branding-matters-more-than-ever": {
      title: "Why Branding Matters More Than Ever",
      date: "June 15, 2026",
      readTime: "4 min read",
      image: "/images/news/Why Branding Matters More Than Ever.png",
      content: [
        "Branding is far more than a logo or colour palette. It's the overall perception customers have of your business.",
        "A strong brand communicates professionalism, builds trust, and helps businesses stand out in competitive markets. Customers are naturally more likely to purchase from companies they recognise and remember.",
        "Consistency plays a vital role in successful branding. Your website, social media channels, advertising campaigns, and printed materials should all reflect the same visual identity and tone of voice.",
        "Good branding also creates emotional connections. People often choose brands that share their values and provide memorable experiences rather than simply offering the lowest price.",
        "As competition continues to increase across every industry, businesses that invest in professional branding create stronger customer loyalty and long-term growth opportunities.",
        "At Gourmetica, branding is integrated into every marketing strategy we create. From website design and social media to advertising and printed materials, we ensure every customer interaction strengthens your brand and supports your business objectives.",
        "A memorable brand doesn't simply attract customers—it creates lasting relationships that drive sustainable business growth."
      ]
    }
  };

  const article = articleData[slug];

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
                <h3>Want to accelerate your company's growth?</h3>
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
                  {Object.entries(articleData)
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
