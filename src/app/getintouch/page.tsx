"use client";

import type { FormEvent } from "react";

export default function GetInTouch() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Discovery call form submitted");
  };

  return (
    <main className="contact-page">
      {/* Hero Header */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="container">
          <div className="contact-hero-content text-center">
            <h1>Book A Discovery Call</h1>
            <p>Ready to scale your business? Let&apos;s build a marketing strategy that delivers.</p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="contact-content-section section-padding">
        <div className="container">
          <div className="contact-grid">
            {/* Left Column: Contact info */}
            <div className="contact-info-col">
              <h2>Contact Details</h2>
              <div className="accent-bar"></div>
              <p className="contact-intro">
                Have questions about our growth services, pricing, or past client stories? We&apos;d love to hear from you. Fill out our booking form or reach out directly via phone or email.
              </p>

              <div className="contact-detail-items">
                <div className="detail-item">
                  <div className="detail-icon">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </div>
                  <div className="detail-text">
                    <h4>Phone</h4>
                    <a href="tel:+447826597767">+44 7826 597767</a>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div className="detail-text">
                    <h4>Email</h4>
                    <a href="mailto:info@gourmetica.co.uk" style={{ textTransform: "lowercase" }}>
                      info@gourmetica.co.uk
                    </a>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </div>
                  <div className="detail-text">
                    <h4>Office</h4>
                    <span>Aldwych House, 71-91 Aldwych, London, WC2B 4HN</span>
                  </div>
                </div>
              </div>

              <div className="contact-social-wrapper">
                <h4>Follow Our Journey</h4>
                <div className="social-links-row">
                  <a href="https://www.facebook.com/gourmeticauk/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/gourmeticauk" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a href="https://www.instagram.com/gourmetica.agency/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Booking Form */}
            <div className="contact-form-col">
              <div className="form-card">
                <h3>Schedule A Consultation</h3>
                <p>Provide your details below and a strategist will connect within 24 hours.</p>

                <form className="booking-form" onSubmit={handleSubmit}>
                  <div className="form-row-two">
                    <div className="form-group">
                      <label htmlFor="first_name">First Name *</label>
                      <input type="text" id="first_name" required placeholder="John" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="last_name">Last Name *</label>
                      <input type="text" id="last_name" required placeholder="Doe" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" required placeholder="john.doe@company.com" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input type="tel" id="phone" required placeholder="+44 7123 456789" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="website">Website / Company name</label>
                    <input type="text" id="website" placeholder="www.mybusiness.com" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">How can we help your business? *</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      required 
                      placeholder="Tell us about your business goals, current bottlenecks, and what services you are interested in..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary form-submit-btn">
                    Book A Call
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
