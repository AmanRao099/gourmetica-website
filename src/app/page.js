"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  const services = [
    {
      title: "Strategy",
      desc: "Every successful business starts with the right strategy. We create tailored growth strategies that align with your goals, identify new opportunities and provide a clear roadmap for sustainable business growth."
    },
    {
      title: "Branding",
      desc: "Your brand is more than a logo—it's how people recognise, remember and trust your business. We create distinctive brand identities that combine strategy, visual design and messaging to help your business stand out. From logo design and brand positioning to complete visual identity systems, we build brands designed for long-term growth.",
      subItems: ["Logo Design", "Brand Identity Systems", "Print & Marketing Collateral", "Signage & Interior Concepts"]
    },
    {
      title: "Website Design and Development",
      desc: "Your website is the first impression of your business—and first impressions matter. We design and develop fast, responsive, and conversion-focused websites that combine exceptional UI/UX with modern design, optimized to increase direct sales.",
      subItems: ["Custom UI/UX Design", "Mobile Optimization", "Easy Content Management (CMS)", "Technical SEO Setup", "High-performance Load Speeds"]
    },
    {
      title: "Search Engine Optimization (SEO)",
      desc: "Dominating search engine results is the key to organic visibility. Leveraging our proficiency in local and national SEO, we help businesses rank for searches that matter, converting search intent into direct leads."
    },
    {
      title: "Social Media Management",
      desc: "Managing and leveraging popular social media platforms (Facebook, Instagram, TikTok) to tell your brand story, engage with your local community, and run campaigns that drive direct customer actions."
    },
    {
      title: "Photography",
      desc: "Our photography service goes beyond capturing stunning visuals; we expertly craft compelling narratives through our lens. We deliver high-quality, impactful branding imagery designed to elevate your brand presence and engage your target audience."
    },
    {
      title: "Advertising",
      desc: "From Google Search and Shopping to Meta (Facebook & Instagram) ads and remarketing campaigns, we put your brand in front of high-intent clients at the exact moment they are looking to book or purchase.",
      subItems: ["PPC Ads & Search Campaigns", "Social Retargeting Ads", "Display & Banner Ad Campaigns", "Conversion Optimization & Analytics"]
    },
    {
      title: "Email Marketing",
      desc: "Stay connected with the customers who already know your brand. We set up automated email flows, newsletters, and personalized birthday campaigns that cultivate loyalty, repeat visits, and increase sales."
    },
    {
      title: "Reputation Management",
      desc: "Your online reputation directly impacts your bookings. We help you monitor, manage, and grow your online reviews across major platforms, responding to feedback and implementing automated systems to capture positive client sentiment and drive repeat business.",
      subItems: ["Google & TripAdvisor Review Generation", "Review Monitoring & Response Systems", "Crisis & Sentiment Management", "Local Citation Audits"]
    },
    {
      title: "Google My Business Optimization",
      desc: "Being on Google isn't enough—being visible is what matters. We optimize your local profiles and maps listings, improving rankings and review collections to drive organic calls, map actions, and walk-ins."
    },
    {
      title: "Event Marketing",
      desc: "Planning and promoting seasonal events, limited-time campaigns, and special openings. We design creative promotions that drive instant action and maximize engagement."
    }
  ];

  const caseStudies = [
    {
      title: "No5 DINING & LOUNGE",
      excerpt: "NO5, a prominent fine dining restaurant in North London, sought to establish a strong brand presence and differentiate themselves in the fine dining sector.",
      image: "/images/results/GBD/_DSF8945 kopya.jpg", // Using a premium food/dining photo from results
      link: "/results/no5"
    },
    {
      title: "SWISS SCENT",
      excerpt: "Swiss Scent B2B platform needed a scalable digital system capable of managing fragrances, inventory, B2B account orders, and operations.",
      image: "/images/services/ChatGPT Image 4 Tem 2026 16_58_47.png",
      link: "/results/swiss-scent"
    },
    {
      title: "LEONIDAS CHOCOLATES",
      excerpt: "A premium Belgian chocolate retailer partnering with Gourmetica to scale e-commerce operations and search advertising campaigns.",
      image: "/images/results/LEONIDAS/kendi-kutunu-olustur-leonidas-cikolata-2.jpg",
      link: "/results/leonidas"
    },
    {
      title: "PHOENIX FINANCE",
      excerpt: "Phoenix Commercial Finance required website redesign and conversion strategy to drive commercial SME finance queries.",
      image: "/images/results/PHOENIX/30 JULY.png",
      link: "/results/phoenix"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [caseStudies.length]);

  return (
    <main className="home-page-wrapper">
      {/* 1. Hero Section with Video Banner */}
      <section className="hero-slider-section">
        <div className="slider-container">
          <div className="slide-item active">
            <div className="slide-media-wrapper">
              <video 
                src="/videos/home-bg.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="slide-video"
              />
            </div>
            <div className="slide-content-inner">
              <div className="hero-badge">Growth Marketing Agency</div>
              <h2>
                Growth Marketing<br />
                <span className="font-medium text-red">That Delivers</span><br />
                <strong>Results.</strong>
              </h2>
              <p>
                Tailor-Made Strategies. Measurable Growth.
              </p>
              <div className="hero-buttons">
                <Link href="/getintouch" className="btn btn-primary">Book A Call</Link>
                <Link href="/results" className="btn btn-outline-white" style={{ marginLeft: "15px" }}>Results</Link>
              </div>
              <div className="trusted-by">
                <i className="fa fa-star" aria-hidden="true" style={{ color: "var(--color-primary)", marginRight: "5px" }}></i>
                <span>Trusted by 70+ Businesses across the UK</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Client Logo Marquee Bar */}
      <section className="marquee-section">
        <div className="marquee-container">
          <div className="marquee-title">Trusted by Leading Brands</div>
          <div className="marquee-content">
            <div className="marquee-track">
              {/* Loop logos twice for continuous scroll */}
              {[
                "antepkitchen.co.uk.jpg", "beboz-zebra-printer-logo.png", "carnivoorkitchen.com.png",
                "gbddoner.com.png", "gustoricco.com.png", "ivytreeessex.co.uk.png",
                "jennys-brackleyonline.co.uk.png", "leilabrasserie.co.uk.png", "mysarestaurant.co.uk.png",
                "sofra.co.uk.jpg", "theshiregrill.co.uk.jpg", "thedirectpizzaco.co.uk.jpg"
              ].map((logo, idx) => (
                <div key={idx} className="marquee-logo">
                  <img src={`/images/clients/${logo}`} alt="Client Logo" />
                </div>
              ))}
              {[
                "antepkitchen.co.uk.jpg", "beboz-zebra-printer-logo.png", "carnivoorkitchen.com.png",
                "gbddoner.com.png", "gustoricco.com.png", "ivytreeessex.co.uk.png",
                "jennys-brackleyonline.co.uk.png", "leilabrasserie.co.uk.png", "mysarestaurant.co.uk.png",
                "sofra.co.uk.jpg", "theshiregrill.co.uk.jpg", "thedirectpizzaco.co.uk.jpg"
              ].map((logo, idx) => (
                <div key={`dup-${idx}`} className="marquee-logo">
                  <img src={`/images/clients/${logo}`} alt="Client Logo Duplicate" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Opening Remark Section */}
      <section className="opening-remark-section section-padding">
        <div className="container">
          <div className="opening-remark-grid">
            <div className="opening-remark-content">
              <h2>Tailor-Made Strategies. Measurable Growth.</h2>
              <p className="lead-text">
                At Gourmetica, we don't believe in generic marketing. Every strategy we develop is built around your objectives, your market, and your ambitions.
              </p>
              <p>
                Combining strategy, creativity, and technology, we help brands strengthen their digital presence, generate qualified leads, and achieve sustainable growth. Whether you are an established business or an ambitious brand ready to scale, we become an extension of your team—focused on delivering results that matter.
              </p>
              <p>
                Arrange a call with us and let's start a digital transformation journey in your business right now. You provide the business goals and statements, and we'll bring out the branding, business growth and expert level of sales generation for your business instantly.
              </p>
              <div style={{ marginTop: "30px" }}>
                <Link href="/getintouch" className="btn btn-primary">Book A Call</Link>
              </div>
            </div>
            <div className="opening-remark-image">
              <img 
                src="/images/banner/ChatGPT Image 4 Tem 2026 11_15_58.png" 
                alt="Hospitality Marketing Workspace" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Marketing Services Section */}
      <section className="our-expertise section-padding" id="services">
        <div className="container">
          <div className="marketing-services-header">
            <div className="marketing-services-logo">
              <img src="/images/logo/PNG.4.png" alt="Gourmetica Logo" />
            </div>
            <div className="marketing-services-title">
              <span className="arrow">→</span>
              <span className="title-text">MARKETING SERVICES</span>
            </div>
          </div>

          <div className="services-grid">
            {/* Left Column (Items 1-6) */}
            <div className="accordion-wrapper">
              {services.slice(0, 6).map((service, idx) => {
                const globalIndex = idx;
                return (
                  <div 
                    key={globalIndex} 
                    className={`accordion-item ${activeAccordion === globalIndex ? "active" : ""}`}
                  >
                    <div className="panel-heading" onClick={() => toggleAccordion(globalIndex)}>
                      <h4>
                        <span>{service.title}</span>
                      </h4>
                      <span className="icon-toggle">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                      </span>
                    </div>
                    <div className="panel-body" style={{ maxHeight: activeAccordion === globalIndex ? "800px" : "0" }}>
                      <div className="panel-body-inner">
                        <p>{service.desc}</p>
                        {service.subItems && (
                          <ul className="accordion-sub-list">
                            {service.subItems.map((item, itemIdx) => (
                              <li key={itemIdx}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                    <div className="item-number">
                      {globalIndex + 1}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column (Items 7-11) */}
            <div className="accordion-wrapper">
              {services.slice(6, 11).map((service, idx) => {
                const globalIndex = idx + 6;
                return (
                  <div 
                    key={globalIndex} 
                    className={`accordion-item ${activeAccordion === globalIndex ? "active" : ""}`}
                  >
                    <div className="panel-heading" onClick={() => toggleAccordion(globalIndex)}>
                      <h4>
                        <span>{service.title}</span>
                      </h4>
                      <span className="icon-toggle">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                      </span>
                    </div>
                    <div className="panel-body" style={{ maxHeight: activeAccordion === globalIndex ? "800px" : "0" }}>
                      <div className="panel-body-inner">
                        <p>{service.desc}</p>
                        {service.subItems && (
                          <ul className="accordion-sub-list">
                            {service.subItems.map((item, itemIdx) => (
                              <li key={itemIdx}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                    <div className="item-number">
                      {globalIndex + 1}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Case Study slider section */}
      <section className="casestudy-section section-padding">
        <div className="container">
          <div className="section-header-row">
            <h2>Featured Results</h2>
            <Link href="/results" className="view-all-link">
              View All Client Stories <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>

          <div className="slider-showcase-container">
            {caseStudies.map((study, idx) => (
              <div 
                key={idx} 
                className={`case-showcase-card ${idx === currentSlide ? "active" : ""}`}
              >
                <div className="card-image">
                  <img src={study.image} alt={study.title} />
                </div>
                <div className="card-content">
                  <span className="case-tag">Case Study</span>
                  <h3>{study.title}</h3>
                  <p>{study.excerpt}</p>
                  <Link href={study.link} className="read-case-study-btn">
                    Read Case Study <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Lead Generation CTA Section */}
      <section className="ebook-cta-section section-padding">
        <div className="container text-center">
          <h2>Ready to grow your business?</h2>
          <p>
            Let's discuss your goals and build a marketing strategy that delivers measurable results.
          </p>
          <div style={{ marginTop: "40px" }}>
            <Link href="/getintouch" className="btn btn-primary" style={{ padding: "20px 50px", fontSize: "15px" }}>
              Book A Call Now
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Local Scoped Component Styles */
        .home-page-wrapper {
          width: 100%;
        }

        .hero-badge {
          background-color: var(--color-primary);
          color: white;
          padding: 6px 15px;
          border-radius: 4px;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: inline-block;
          margin-bottom: 25px;
        }

        .text-red {
          color: var(--color-primary);
        }

        .font-medium {
          font-weight: 600;
        }

        .hero-buttons {
          margin-top: 30px;
          margin-bottom: 40px;
        }

        .trusted-by {
          font-family: var(--font-secondary);
          color: rgba(255, 255, 255, 0.6);
          font-size: 13px;
          display: flex;
          align-items: center;
        }

        /* Logo Marquee */
        .marquee-section {
          background-color: #050505;
          padding: 40px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        .marquee-container {
          max-width: 1346px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .marquee-title {
          font-family: var(--font-heading);
          color: rgba(255, 255, 255, 0.3);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          text-align: center;
          margin-bottom: 25px;
          font-weight: 800;
        }

        .marquee-content {
          width: 100%;
          overflow: hidden;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          gap: 60px;
          animation: scrollMarquee 40s linear infinite;
        }

        .marquee-logo {
          height: 35px;
          display: flex;
          align-items: center;
          opacity: 0.4;
          transition: opacity 0.3s ease;
        }

        .marquee-logo:hover {
          opacity: 0.9;
        }

        .marquee-logo img {
          height: 100%;
          width: auto;
          filter: grayscale(1) brightness(2);
        }

        @keyframes scrollMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Opening Remark */
        .opening-remark-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .opening-remark-content h2 {
          font-size: 42px;
          margin-bottom: 25px;
        }

        .lead-text {
          font-size: 20px;
          font-weight: 600;
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .opening-remark-content p {
          margin-bottom: 20px;
          color: #555;
        }

        .opening-remark-image img {
          width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
        }

        /* Services */
        .our-expertise {
          background-color: var(--color-black);
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 80px;
          row-gap: 30px;
          align-items: start;
        }

        .accordion-sub-list {
          list-style: none;
          margin-top: 15px;
          padding-left: 15px;
          border-left: 2px solid var(--color-primary);
        }

        .accordion-sub-list li {
          font-size: 13px;
          color: var(--color-text-gray);
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .accordion-sub-list li::before {
          content: "• ";
          color: var(--color-primary);
        }

        /* Case study slider */
        .section-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 50px;
        }

        .section-header-row h2 {
          font-size: 36px;
        }

        .view-all-link {
          font-family: var(--font-heading);
          font-weight: 900;
          color: var(--color-primary);
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .view-all-link i {
          margin-left: 5px;
          transition: transform 0.3s ease;
        }

        .view-all-link:hover i {
          transform: translateX(5px);
        }

        .slider-showcase-container {
          position: relative;
          min-height: 480px;
          width: 100%;
        }

        .case-showcase-card {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 50px;
          background-color: var(--color-gray-light);
          border-radius: 8px;
          overflow: hidden;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.8s ease-in-out;
          align-items: center;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.04);
        }

        .case-showcase-card.active {
          opacity: 1;
          pointer-events: all;
          position: relative;
        }

        .card-image {
          height: 100%;
          width: 100%;
          min-height: 450px;
          overflow: hidden;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 6s ease;
        }

        .case-showcase-card.active .card-image img {
          transform: scale(1.08);
        }

        .card-content {
          padding: 50px;
        }

        .case-tag {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--color-primary);
          display: inline-block;
          margin-bottom: 15px;
        }

        .card-content h3 {
          font-size: 32px;
          margin-bottom: 20px;
          line-height: 1.1;
        }

        .card-content p {
          font-size: 16px;
          color: #666;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .read-case-study-btn {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-black);
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .read-case-study-btn i {
          font-size: 10px;
          color: var(--color-primary);
          transition: transform 0.3s ease;
        }

        .read-case-study-btn:hover i {
          transform: translateX(4px);
        }

        /* Ebook CTA */
        .ebook-cta-section {
          background-color: var(--color-black);
          color: white;
          background-image: linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(228, 37, 40, 0.08) 100%);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .ebook-cta-section h2 {
          color: white;
          font-size: 48px;
          margin-bottom: 20px;
        }

        .ebook-cta-section p {
          color: var(--color-text-gray);
          font-size: 20px;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Responsive */
        @media (max-width: 991px) {
          .opening-remark-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .case-showcase-card {
            grid-template-columns: 1fr;
            gap: 0;
          }
          
          .card-image {
            min-height: 300px;
          }
        }

        @media (max-width: 767px) {
          .opening-remark-content h2 {
            font-size: 32px;
          }
          
          .card-content {
            padding: 30px;
          }
          
          .card-content h3 {
            font-size: 24px;
          }
          
          .ebook-cta-section h2 {
            font-size: 32px;
          }
          
          .ebook-cta-section p {
            font-size: 16px;
          }
        }
      `}</style>
    </main>
  );
}
