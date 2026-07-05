import Link from "next/link";

export const metadata = {
  title: "About Us",
  description: "Learn more about Gourmetica's philosophy, expertise, and dedication to helping UK hospitality and B2B brands scale sustainably."
};

export default function AboutUs() {
  return (
    <main className="about-page">
      {/* Hero Banner Header */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="container">
          <div className="about-hero-content text-center">
            <h1>About Us</h1>
            <p>Our philosophy, our expertise, and our commitment to your growth.</p>
          </div>
        </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="philosophy-section section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="about-left">
              <h2>Building Foundations For Long-Term Success</h2>
              <div className="accent-bar"></div>
            </div>
            <div className="about-right">
              <p className="lead-text">
                At Gourmetica, we understand the unique needs of the hospitality and service industries. Our team has over 10 years of experience in this sector, meaning we deeply understand how to create marketing campaigns and copy that effectively engage your audience.
              </p>
              <p>
                We combine persuasive messaging with data-driven insights to help you create compelling content that resonates with your guests and drives more revenue for your business. With our help, you can stand out in the competitive UK market and increase your ROI.
              </p>
              <p>
                By prioritizing repeat business, we help you build a solid foundation of loyal customers who become an integral part of your success story. Through strategic marketing initiatives, we aim to inspire customer loyalty, driving increased visit frequency, higher average spend, and a positive word-of-mouth ripple effect that extends your reach far beyond traditional marketing channels.
              </p>
              <p>
                We have the privilege of collaborating with numerous establishments in the dynamic and lucrative hospitality and B2B sectors. We implement optimized marketing strategies to captivate your target audience, elevate product value, and scale your operations sustainably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section section-padding">
        <div className="container">
          <div className="values-header text-center">
            <h2>Why Partners Choose Gourmetica</h2>
            <p>Our core operating values guide how we work and deliver results for our clients.</p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fa fa-line-chart" aria-hidden="true"></i>
              </div>
              <h3>Strategic Outlook & Solution Oriented</h3>
              <p>
                Our approach to marketing is holistic. As everything is interconnected, it must be understood from the ground up, recognizing all moving parts and how they connect. We track the entire customer experience—from the first click of an ad to the moment they dine at the restaurant or purchase a product—identifying missed opportunities and resolving operational blockages.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fa fa-bolt" aria-hidden="true"></i>
              </div>
              <h3>Expertise & Speed</h3>
              <p>
                We have successfully developed many businesses from the ground up, identifying weaknesses and implementing fast-track solutions. Because of our experience, we foresee issues before they arise, preventing them from escalating. We apply a wealth of proven, benchmarked strategies to drive quick wins alongside long-term scaling.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fa fa-users" aria-hidden="true"></i>
              </div>
              <h3>We Are Personally Invested</h3>
              <p>
                We take pride in the high standards we set, attracting clients primarily through word of mouth. Any business we take on is one we feel personally responsible for. We treat your business like our own, integrating as an extension of your internal team and going above and beyond to ensure your ambitions are met.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="about-cta section-padding text-center">
        <div className="container">
          <h2>Let's Start Your Transformation Journey</h2>
          <p>
            You provide the business goals and statements, and we'll bring the branding, web development, and sales generation systems.
          </p>
          <div style={{ marginTop: "35px" }}>
            <Link href="/getintouch" className="btn btn-primary">
              Arrange A Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
