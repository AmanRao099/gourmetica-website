export default function MysaCaseStudy() {
  return (
    <main className="mysa-clone">
      <section
        className="case-clone-hero"
        style={{ backgroundImage: "url('/images/banner/mysanewbackground.jpg')" }}
      >
        <h2>MYSA</h2>
      </section>

      <section className="case-clone-row" style={{ marginTop: "50px" }}>
        <div className="case-clone-row-label">
          <h3>Client Overview</h3>
        </div>
        <div className="case-clone-row-content">
          <p>
            Gourmetica proudly presents Mysa, a Mediterranean-inspired restaurant located in the heart of Hoddesdon.
            Mysa offers a delightful blend of breakfast, brunch, and a la carte options, providing a taste of the
            Mediterranean in every bite. With a focus on fresh, high-quality ingredients and a warm, welcoming
            atmosphere, Mysa aims to offer an exceptional dining experience to its guests. Specializing in digital
            marketing, social media management, and website design, our partnership with Mysa reflects our
            commitment to helping them grow their brand and engage their local audience.
          </p>
        </div>
      </section>

      <div className="case-clone-image-pair case-clone-image-pair--centered">
        <div>
          <img src="/images/results/mysa-ref/mysa1.jpg" alt="" style={{ width: "90%" }} />
        </div>
        <div>
          <img src="/images/results/mysa-ref/mysa2.jpg" alt="" style={{ width: "91%" }} />
        </div>
      </div>

      <section className="case-clone-row">
        <div className="case-clone-row-label">
          <h3>Social Media Management</h3>
        </div>
        <div className="case-clone-row-content">
          <p>
            We began our partnership with Mysa by conducting a comprehensive analysis of their target audience,
            brand identity, and local competitors. Using these insights, we developed a strategic social media plan
            to boost Mysa&apos;s online visibility, generate interaction, and highlight the unique
            Mediterranean-inspired dishes they offer. Regular posts featuring vibrant food photography and engaging
            content have helped Mysa cultivate a growing, loyal following.
          </p>
        </div>
      </section>

      <section className="case-clone-row" style={{ marginBottom: "50px" }}>
        <div className="case-clone-row-label">
          <h3>Review Management</h3>
        </div>
        <div className="case-clone-row-content">
          <p>
            Recognizing the importance of online reviews, we established a review management strategy for Mysa. By
            closely monitoring Google Reviews and TripAdvisor, we ensured that feedback was promptly addressed,
            whether positive or constructive. This proactive approach has bolstered Mysa&apos;s reputation as a
            go-to Mediterranean dining spot in Hoddesdon.
          </p>
        </div>
      </section>

      <div className="case-clone-image-block">
        <img src="/images/results/mysa-ref/mysa3.jpg" alt="" style={{ width: "80%" }} />
      </div>

      <section className="case-clone-row" style={{ marginTop: "50px", marginBottom: "50px" }}>
        <div className="case-clone-row-label">
          <h3>Exceptional Performance Stats</h3>
        </div>
        <div className="case-clone-row-content">
          <ul className="case-clone-results-list">
            <li>Achieved an impressive 10x ROI (Return On Investment) on a monthly average.</li>
            <li>Maintained a strong 8% Conversion Rate on a monthly average.</li>
            <li>Welcomed 50 new guests on a monthly average.</li>
          </ul>
        </div>
      </section>

      <div className="case-clone-image-block">
        <img src="/images/results/mysa-ref/mysa4.jpg" alt="" style={{ width: "80%" }} />
      </div>
    </main>
  );
}
