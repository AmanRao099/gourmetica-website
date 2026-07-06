import type { Metadata } from "next";
import Link from "next/link";
import { ALL_CASE_STUDIES } from "@/constants/results";

export const metadata: Metadata = {
  title: "Results | Case Studies",
  description: "Browse our performance-driven growth cases spanning fine dining restaurants, e-commerce, healthcare diagnostics, commercial finance, and franchise brands."
};

export default function WorkIndex() {
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
            {ALL_CASE_STUDIES.map((study, index) => (
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
