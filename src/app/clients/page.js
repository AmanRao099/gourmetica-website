export const metadata = {
  title: "Our Clients",
  description: "Explore the hospitality, retail, and B2B brands that partner with Gourmetica to accelerate their growth."
};

export default function Clients() {
  const clients = [
    { name: "Ivy Tree", logo: "ivytreeessex.co.uk.png", url: "https://www.ivytreeessex.co.uk/" },
    { name: "Great British Doner", logo: "gbddoner.com.png", url: "https://www.greatbritishdoner.com/" },
    { name: "BiiTest Diagnostics", logo: "beboz-zebra-printer-logo.png", url: "https://biitest.com/" },
    { name: "Leila Brasserie", logo: "leilabrasserie.co.uk.png", url: "https://leilabrasserie.co.uk/" },
    { name: "Carnivoor Kitchen", logo: "carnivoorkitchen.com.png", url: "https://www.carnivoorkitchen.com/" },
    { name: "The Direct Pizza Co", logo: "thedirectpizzaco.co.uk.jpg", url: "https://thedirectpizzaco.co.uk/" },
    { name: "Sofra London", logo: "sofra.co.uk.jpg", url: "https://www.sofra.co.uk/" },
    { name: "Jennys Café", logo: "jennys-brackleyonline.co.uk.png", url: "https://jennys-brackleyonline.co.uk/" },
    { name: "Antep Kitchen", logo: "antepkitchen.co.uk.jpg", url: "https://www.antepkitchen.co.uk" },
    { name: "Gusto Ricco", logo: "gustoricco.com.png", url: "https://www.gustoricco.com" },
    { name: "Masa Restaurant", logo: "masarestaurant.com.tr-en.png", url: "https://www.masarestaurant.com.tr" },
    { name: "Pide Co", logo: "pide-co.com.png", url: "https://www.pide-co.com/" },
    { name: "Solo Kitchen", logo: "thesolo.co.uk.png", url: "https://www.thesolo.co.uk" },
    { name: "The Shire Grill", logo: "theshiregrill.co.uk.jpg", url: "https://www.theshiregrill.co.uk" },
    { name: "Phoenix Solutions", logo: "phoenix-solutions-logo1.png", url: "https://phoenixcommercialfinance.com" },
    { name: "Mysa Hoddesdon", logo: "mysarestaurant.co.uk.png", url: "https://www.mysarestaurant.co.uk" },
    { name: "Zone Essex", logo: ".zone-essex.png", url: "https://www.zoneessex.co.uk" },
    { name: "Anatolian Turkish Kitchen", logo: "anatolian--.png", url: "https://www.anatoliankitchen.co.uk" },
    { name: "Renaflame", logo: "renaflame-logos-(2).png", url: "https://renaflame.co.uk" },
    { name: "Cutty Sark", logo: "screen-shot-2026-07-04-at-12.18.17.png", url: "https://cuttysarkpub.co.uk" }
  ];

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
            {clients.map((client, index) => (
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
