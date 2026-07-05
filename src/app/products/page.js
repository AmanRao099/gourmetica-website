import Link from "next/link";

export const metadata = {
  title: "TABLY | Website Operations Platform",
  description: "Simplify how hospitality groups, restaurants, and pubs manage websites, menus, and events from one intuitive platform."
};

export default function Products() {
  return (
    <main className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="products-hero-overlay"></div>
        <div className="container">
          <div className="products-hero-content text-center">
            <span className="product-tag">Platform</span>
            <h1>Website Operations Platform</h1>
            <p className="lead-text">
              Manage content at scale across venues, brands, domains and more.
            </p>
            <div style={{ marginTop: "35px" }}>
              <Link href="/getintouch" className="btn btn-primary">
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="product-trust-section">
        <div className="container">
          <h3 className="trust-title text-center">Trusted by the UK's Leading Hospitality Brands</h3>
          <div className="trust-logos">
            <div className="trust-logo">
              <img src="/images/clients/ivytreeessex.co.uk.png" alt="Ivy Tree Logo" />
              <span>Ivy Tree</span>
            </div>
            <div className="trust-logo">
              <img src="/images/clients/antepkitchen.co.uk.jpg" alt="Otto Kitchen Logo" />
              <span>Otto Kitchen</span>
            </div>
            <div className="trust-logo">
              <img src="/images/clients/sofra.co.uk.jpg" alt="Rustiq Logo" />
              <span>Rustiq</span>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Concept Section */}
      <section className="platform-concept section-padding">
        <div className="container">
          <div className="concept-grid">
            <div className="concept-video-col">
              <div className="video-card-wrapper">
                <video 
                  src="/videos/tably-demo.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="product-demo-video"
                />
              </div>
            </div>
            <div className="concept-text-col">
              <h2>Reimagining how restaurant, pub and cafe websites are managed.</h2>
              <div className="accent-bar"></div>
              <p className="lead">
                TABLY is built to simplify how hospitality businesses manage their websites.
              </p>
              <p>
                We believe updating a website should be as easy as updating a social media post. That's why we've created an intuitive platform that gives hospitality teams complete control over their websites, content, and digital operations—without relying on developers.
              </p>
              
              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-num">1</div>
                  <div className="feature-desc">
                    <h4>Launch Your Website in Days</h4>
                    <p>Get your business online quickly with a professionally designed website—no lengthy development process.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-num">2</div>
                  <div className="feature-desc">
                    <h4>Update Your Content in Minutes</h4>
                    <p>Easily edit menus, images, events, and pages without any technical knowledge.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-num">3</div>
                  <div className="feature-desc">
                    <h4>Designed to Grow Your Business</h4>
                    <p>SEO-ready and built to convert visitors into enquiries, bookings and customers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smartest Way Section */}
      <section className="smartest-way section-padding">
        <div className="container text-center">
          <h2>The smartest way to manage hospitality websites.</h2>
          <p className="subtext">
            Manage websites, menus, events, careers and digital content from one intuitive platform—built specifically for restaurants, pubs, hotels and hospitality groups.
          </p>
          <div style={{ marginTop: "40px" }}>
            <Link href="/getintouch" className="btn btn-primary">
              Request Platform Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
