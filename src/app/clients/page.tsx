import type { Metadata } from "next";
import { CLIENTS } from "@/constants/clients";

export const metadata: Metadata = {
  title: "Our Clients",
  description: "Explore the hospitality, retail, and B2B brands that partner with Gourmetica to accelerate their growth."
};

export default function Clients() {
  return (
    <main className="clients-page">
      {/* Hero Header */}
      <section className="clients-hero">
        <div className="clients-hero-overlay"></div>
        <div className="container">
          <div className="clients-hero-content text-center">
            <h1>Our Clients</h1>
            <p>From independent venues to multi-location hospitality and B2B brands.</p>
          </div>
        </div>
      </section>

      {/* Grid Showcase */}
      <section className="clients-showcase section-padding">
        <div className="container">
          <div className="clients-grid">
            {CLIENTS.map((client, index) => (
              <a 
                key={index} 
                href={client.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="client-card"
              >
                <div className="client-logo-box">
                  <img src={`/images/clients/${client.logo}`} alt={`${client.name} Logo`} />
                </div>
                <div className="client-hover-label">
                  Visit Website <i className="fa fa-external-link" aria-hidden="true"></i>
                </div>
                <span className="client-name">{client.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
