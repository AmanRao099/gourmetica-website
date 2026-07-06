import Link from "next/link";

export const metadata = {
  title: "Results | Case Studies",
  description: "Browse our performance-driven growth cases spanning fine dining restaurants, e-commerce, healthcare diagnostics, commercial finance, and franchise brands."
};

export default function WorkIndex() {
  const caseStudies = [
    {
      slug: "no5",
      title: "No5 DINING & LOUNGE",
      category: "Hospitality",
      image: "/images/banner/No5NewBg.jpg",
      excerpt: "NO5, a prominent fine dining restaurant in North London, sought to establish a strong brand presence and differentiate themselves from competitors."
    },
    {
      slug: "ottokitchen",
      title: "Otto Kitchen",
      category: "Hospitality",
      image: "/images/banner/OttoNewBackground.jpg",
      excerpt: "Otto Kitchen, a renowned fine dining restaurant located in the heart of Leamington Spa, approached Gourmetica with the goal of elevating their digital brand."
    },
    {
      slug: "42holborn",
      title: "42 HOLBORN",
      category: "Hospitality",
      image: "/images/banner/42newBackground.jpg",
      excerpt: "Gourmetica proudly presents 42 Holborn, a vibrant culinary destination situated in the heart of London at 42 Kingsway."
    },
    {
      slug: "lizz",
      title: "LIZZ RESTAURANT",
      category: "Hospitality",
      image: "/images/banner/LizzNewBg.jpg",
      excerpt: "Gourmetica introduces Lizz, a fine dining Mediterranean restaurant located in the charming town of Gosport, setting high standards of guest attraction."
    },
    {
      slug: "mysa",
      title: "MYSA",
      category: "Hospitality",
      image: "/images/banner/mysanewbackground.jpg",
      excerpt: "Gourmetica proudly presents Mysa, a Mediterranean-inspired dining destination situated in the heart of Hoddesdon."
    },
    {
      slug: "payiz",
      title: "Payiz Restaurant",
      category: "Hospitality",
      image: "/images/banner/PiyazMain-min-min.jpg",
      excerpt: "Payiz Restaurant, a luxurious Mediterranean venue in London, embarked on a growth marketing journey to redefine upscale dining visibility."
    },
    {
      slug: "rustiq",
      title: "Rustiq Restaurant",
      category: "Hospitality",
      image: "/images/banner/RustiqMain-min-min.jpg",
      excerpt: "Collaborating with Rustiq to build comprehensive digital marketing campaigns including social retargeting, TikTok, and local search SEO."
    },
    {
      slug: "liman",
      title: "Liman Restaurant",
      category: "Hospitality",
      image: "/images/banner/bglimannew.jpg",
      excerpt: "Gourmetica restaurant marketing agency proudly presents Liman Restaurant, a captivating Mediterranean dining experience in Islington, London."
    },
    {
      slug: "swiss-scent",
      title: "SWISS SCENT",
      category: "E-Commerce",
      image: "/images/banner/swissbackground.jpg",
      excerpt: "Re-platforming and marketing Swiss Scent premium fragrance B2B solutions, building a centralized inventory, orders, and CMS framework."
    },
    {
      slug: "leonidas",
      title: "LEONIDAS",
      category: "E-Commerce",
      image: "/images/results/LEONIDAS/kendi-kutunu-olustur-leonidas-cikolata-2.jpg",
      excerpt: "Premium Belgian chocolate e-commerce retailer partnering with Gourmetica to boost search, shopping, and social retargeting ad campaigns."
    },
    {
      slug: "biitest",
      title: "BiiTest Diagnostics",
      category: "Healthcare",
      image: "/images/results/BIITEST/3 (1).png",
      excerpt: "Healthcare digital growth strategy for innovative diagnostic testing products, scaling traffic, and setting e-commerce marketing systems."
    },
    {
      slug: "phoenix",
      title: "PHOENIX FINANCE",
      category: "Finance",
      image: "/images/results/PHOENIX/30 JULY.png",
      excerpt: "Phoenix Commercial Finance brokerage required a modern corporate website redesign and lead generation campaigns to acquire commercial lending queries."
    },
    {
      slug: "great-british-doner",
      title: "Great British Doner",
      category: "Multi-Location & Franchise",
      image: "/images/results/GBD/ChatGPT Image 22 May 2026 15_22_25 (2).png",
      excerpt: "Supporting franchise expansion and local location acquisition for Great British Doner through custom web development and social campaigns."
    }
  ];

  return (
    <main className="work-page">
      {/* Hero Header */}
      <section className="work-hero">
        <div className="work-hero-overlay"></div>
        <div className="container">
          <div className="work-hero-content text-center">
            <h1>Results</h1>
            <p>
              Getting started is easy! Simply reach out to us through our contact form or give us a call, and our team will schedule a consultation to discuss your marketing needs and provide you with a tailored solution to propel your business forward.
            </p>
          </div>
        </div>
      </section>

      {/* Grid List */}
      <section className="work-grid-section section-padding">
        <div className="container">
          <div className="work-grid">
            {caseStudies.map((study, index) => (
              <div key={index} className="work-card">
                <div className="work-card-image">
                  <img src={study.image} alt={study.title} />
                  <div className="work-card-overlay">
                    <span className="card-category">{study.category}</span>
                    <h3>{study.title}</h3>
                    <p>{study.excerpt}</p>
                    <Link href={`/results/${study.slug}`} className="card-btn">
                      Read Case Study <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
