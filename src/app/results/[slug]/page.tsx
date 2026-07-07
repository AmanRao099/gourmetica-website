import Link from "next/link";
import { notFound } from "next/navigation";

import { CASE_STUDY_DETAILS } from "@/constants/results";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return [
    { slug: "no5" },
    { slug: "ottokitchen" },
    { slug: "42holborn" },
    { slug: "lizz" },
    { slug: "mysa" },
    { slug: "payiz" },
    { slug: "rustiq" },
    { slug: "liman" },
    { slug: "swiss-scent" },
    { slug: "leonidas" },
    { slug: "biitest" },
    { slug: "phoenix" },
    { slug: "great-british-doner" }
  ];
}

export default function WorkDetail({ params }: PageProps) {
  const { slug } = params;
  const study = CASE_STUDY_DETAILS[slug];

  if (!study) {
    notFound();
  }

  return (
    <main className="work-detail-page">
      {/* Hero */}
      <section className="work-hero-detail" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.9)), url('${study.banner}')` }}>
        <div className="container">
          <div className="hero-content text-center">
            <Link href="/results" className="back-link">
              <i className="fa fa-chevron-left" aria-hidden="true"></i> Back to Results
            </Link>
            <h1>{study.title}</h1>
          </div>
        </div>
      </section>

      {/* Scope Bar */}
      <section className="scope-section">
        <div className="container">
          <div className="scope-box">
            <span className="scope-title">Scope:</span>
            <ul className="scope-list">
              {study.scope.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Core Details Grid */}
      <section className="details-section section-padding">
        <div className="container">
          <div className="details-grid">
            <div className="details-left">
              <div className="detail-block">
                <h3>Client Overview</h3>
                <div className="accent-line"></div>
                <p>{study.overview}</p>
              </div>

              <div className="detail-block">
                <h3>Challenges</h3>
                <div className="accent-line"></div>
                <p>{study.challenge}</p>
              </div>

              <div className="detail-block">
                <h3>Solution</h3>
                <div className="accent-line"></div>
                <p>{study.solution}</p>
              </div>
            </div>

            <div className="details-right">
              {/* Stats Card */}
              <div className="stats-card">
                <h3>Results Delivered</h3>
                <div className="accent-line"></div>
                <div className="stats-row">
                  {study.stats.map((stat, idx) => (
                    <div key={idx} className="stat-box">
                      <div className="stat-value">{stat.val}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar CTA */}
              <div className="sidebar-action-card text-center">
                <h4>Replicate these results?</h4>
                <p>Learn how Gourmetica can build custom growth frameworks to scale your brand and generate direct leads.</p>
                <div style={{ marginTop: "20px" }}>
                  <Link href="/getintouch" className="btn btn-primary" style={{ width: "100%", padding: "12px" }}>
                    Book A Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {study.gallery && study.gallery.length > 0 && (
        <section className="gallery-section section-padding">
          <div className="container">
            <h2 className="section-title text-center">Campaign Screenshots & Creative Assets</h2>
            <div className="gallery-grid">
              {study.gallery.map((img, idx) => (
                <div key={idx} className="gallery-item">
                  <img src={img} alt={`Campaign Screenshot ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
