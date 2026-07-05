"use client";

import { useState } from "react";
import Link from "next/link";

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      question: "How can your marketing agency help my business grow?",
      answer: "Our agency specializes in developing tailored growth strategies that align with your business goals, target the right audience, and enhance your digital brand presence. Through our integrated expertise (branding, web development, SEO, ads, and social), we drive qualified leads, increase direct bookings, and maximize customer lifetime value."
    },
    {
      question: "How do you measure the success of marketing campaigns?",
      answer: "We utilize advanced analytics tools and tracking structures to monitor Key Performance Indicators (KPIs) such as website traffic, conversion rates (forms completed, calls placed, table reservations), cost per acquisition (CPA), social engagement, and direct Return on Investment (ROI). This data-driven model allows us to continually test, optimize, and scale campaigns."
    },
    {
      question: "Will I have a dedicated account manager throughout the project?",
      answer: "Yes, we prioritize strong partner communication. You will be assigned a dedicated account manager who acts as your primary point of contact. They coordinate with our branding, SEO, design, and advertising specialists, providing regular reports and scheduling feedback calls to discuss campaign progress."
    },
    {
      question: "What is the timeline for seeing measurable results?",
      answer: "The timeline varies based on service scope and goals. Performance marketing (like Google Ads and Meta campaigns) can drive visibility and leads within the first few days of launching. Organic strategies like SEO and branding typically show compounding long-term value over 3 to 6 months. We design campaigns to target quick wins while building sustainable long-term channels."
    },
    {
      question: "How can I get started with Gourmetica?",
      answer: "Getting started is straightforward! Simply fill out our contact form on the Get In Touch page or send us an email. Our team will schedule an initial discovery call to review your current digital footprint, discuss your business objectives, and prepare a custom growth proposal tailored to your needs."
    }
  ];

  return (
    <main className="faq-page">
      {/* Hero Header */}
      <section className="faq-hero">
        <div className="faq-hero-overlay"></div>
        <div className="container">
          <div className="faq-hero-content text-center">
            <h1>Frequently Asked Questions</h1>
            <p>Answers to common questions about onboarding, campaigns, and results.</p>
          </div>
        </div>
      </section>

      {/* Accordions */}
      <section className="faq-content-section section-padding">
        <div className="container">
          <div className="faq-wrapper">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
              >
                <button 
                  className="faq-question-btn" 
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span>{faq.question}</span>
                  <span className="faq-toggle-icon">
                    <i className={`fa ${activeIndex === index ? "fa-minus" : "fa-plus"}`} aria-hidden="true"></i>
                  </span>
                </button>
                <div 
                  className="faq-answer-panel"
                  style={{ maxHeight: activeIndex === index ? "300px" : "0" }}
                >
                  <div className="faq-answer-inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-more-questions text-center">
            <h3>Still have questions?</h3>
            <p>We are here to help. Reach out to our strategy team and get the answers you need.</p>
            <div style={{ marginTop: "25px" }}>
              <Link href="/getintouch" className="btn btn-primary">
                Book A Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .faq-page {
          width: 100%;
        }

        /* Hero */
        .faq-hero {
          height: 45vh;
          min-height: 350px;
          background-color: var(--color-black);
          background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.85)), url('/images/banner/ChatGPT Image 4 Tem 2026 16_54_25.png');
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: center;
          padding-top: var(--header-height);
        }

        .faq-hero-content h1 {
          color: white;
          font-size: 54px;
          margin-bottom: 15px;
          text-transform: uppercase;
        }

        .faq-hero-content p {
          color: var(--color-text-gray);
          font-size: 18px;
          max-width: 600px;
          margin: 0 auto;
        }

        /* FAQ Content */
        .faq-content-section {
          background-color: var(--color-gray-light);
        }

        .faq-wrapper {
          max-width: 800px;
          margin: 0 auto 80px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .faq-item {
          background-color: var(--color-white);
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
          transition: all 0.3s ease;
        }

        .faq-item.active {
          border-color: var(--color-primary);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
        }

        .faq-question-btn {
          width: 100%;
          padding: 24px 30px;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          cursor: pointer;
          font-family: var(--font-heading);
          font-size: 17px;
          font-weight: 800;
          color: var(--color-black);
          outline: none;
        }

        .faq-question-btn span {
          padding-right: 20px;
        }

        .faq-toggle-icon {
          color: var(--color-primary);
          font-size: 16px;
          flex-shrink: 0;
        }

        .faq-answer-panel {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease-out;
        }

        .faq-answer-inner {
          padding: 0 30px 30px;
          border-top: 1px solid rgba(0, 0, 0, 0.03);
        }

        .faq-answer-inner p {
          color: #555;
          font-size: 15.5px;
          line-height: 1.65;
          text-align: justify;
        }

        /* More Questions */
        .faq-more-questions {
          max-width: 600px;
          margin: 0 auto;
        }

        .faq-more-questions h3 {
          font-size: 28px;
          margin-bottom: 12px;
        }

        .faq-more-questions p {
          color: #666;
          font-size: 16px;
        }

        @media (max-width: 767px) {
          .faq-hero-content h1 {
            font-size: 34px;
          }
          
          .faq-question-btn {
            font-size: 15px;
            padding: 20px;
          }
          
          .faq-answer-inner {
            padding: 0 20px 20px;
          }
        }
      `}</style>
    </main>
  );
}
