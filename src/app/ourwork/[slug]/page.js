import Link from "next/link";
import { notFound } from "next/navigation";

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

export default async function WorkDetail({ params }) {
  const { slug } = await params;

  const data = {
    no5: {
      title: "No5 DINING & LOUNGE",
      banner: "/images/banner/No5NewBg.jpg",
      scope: ["SEO Friendly Content Writing", "Review Management", "Brand Reputation Management", "Menu-Food Bible", "Glossary Design"],
      overview: "NO5, a prominent fine dining restaurant in North London, sought to establish a strong brand presence and differentiate themselves from competitors in the fiercely competitive fine dining sector. With the goal of attracting discerning customers, increasing bookings, and outshining their rivals, they partnered with our marketing agency to develop a comprehensive digital marketing strategy.",
      challenge: "The restaurant faced stiff competition in the bustling London restaurant scene, making it crucial to stand out and showcase their unique offerings. They needed a marketing solution that would not only enhance their online visibility but also position them as an authority in the industry, enticing potential customers to choose their restaurant for unparalleled dining experiences.",
      solution: "Our marketing agency conducted extensive market research to understand the client's business goals, target audience, and competitive landscape. We devised a comprehensive strategy that focused on several key elements to uplift and differentiate the restaurant from its competitors.",
      stats: [
        { label: "Return On Investment", val: "36 x ROI" },
        { label: "Conversion Rate", val: "3.7%" },
        { label: "Bookings Increase", val: "+210%" }
      ],
      gallery: ["/images/banner/No5Main-min-min.jpg"]
    },
    ottokitchen: {
      title: "Otto Kitchen",
      banner: "/images/banner/OttoNewBackground.jpg",
      scope: ["Digital Brand Strategy", "Social Media Management", "Local Maps Optimization", "Local Search SEO", "Photography"],
      overview: "Otto Kitchen, a renowned fine dining restaurant located in the heart of Leamington Spa, approached our marketing agency with the goal of elevating their brand presence and driving customer engagement. They sought to position themselves as the go-to culinary destination for authentic Turkish cuisine in Warwickshire.",
      challenge: "Despite serving exquisite culinary dishes, Otto Kitchen needed a stronger digital strategy to communicate their value proposition to Warwickshire residents. They needed consistent social media engagement, high-quality professional photography to showcase their offerings, and visibility on local map searches.",
      solution: "Gourmetica deployed a comprehensive strategy incorporating local SEO campaigns, strategic menu photography, and community-driven social media management. We restructured their Google Business Profile to dominate local searches, driving a surge in phone enquiries and direct website bookings.",
      stats: [
        { label: "Direct Bookings", val: "+180%" },
        { label: "Local Map Views", val: "3.2x" },
        { label: "Instagram Growth", val: "4.5k followers" }
      ],
      gallery: []
    },
    "swiss-scent": {
      title: "SWISS SCENT",
      banner: "/images/banner/swissbackground.jpg",
      scope: ["B2B E-Commerce Development", "Product Management Dashboard", "Inventory Tracking Setup", "B2B Custom Pricing Setup", "Reporting Tools"],
      overview: "Swiss Scent is a UK-based fragrance company specialising in premium scent solutions for businesses. The company supplies commercial fragrance products through a dedicated B2B platform, helping organisations enhance customer experiences with tailored scenting solutions. As the business continued to grow, Swiss Scent required more than a standard e-commerce website. They needed a scalable digital platform capable of managing products, inventory, customer orders, and B2B pricing catalogs.",
      challenge: "Swiss Scent struggled with separate product catalogues and order channels, which caused inventory discrepancies. They required a unified platform that combined a smooth B2B purchasing user experience for corporate clients with powerful operations and reporting tools for their backend team.",
      solution: "Gourmetica designed and developed a bespoke B2B e-commerce platform. We implemented real-time inventory tracking, flexible multi-tier pricing for bulk corporate purchases, assignable user roles, and a custom product management dashboard designed for speed and flexibility.",
      stats: [
        { label: "Order Lead Times", val: "-40% faster" },
        { label: "B2B Conversions", val: "+28%" },
        { label: "Centralized Catalog", val: "100% synced" }
      ],
      gallery: []
    },
    leonidas: {
      title: "LEONIDAS CHOCOLATES",
      banner: "/images/results/LEONIDAS/kendi-kutunu-olustur-leonidas-cikolata-2.jpg",
      scope: ["E-Commerce Growth Strategy", "Google Ads & PMax Setup", "Meta Advertising Campaigns", "Social Media Management", "Conversion Optimization"],
      overview: "Leonidas is a premium Belgian chocolate retailer offering handcrafted chocolates, gift collections, and seasonal products through its e-commerce website, serving customers across the UK. As online demand continued to grow, the business partnered with Gourmetica to strengthen its digital presence, increase online sales, and maximize the performance of its e-commerce marketing strategy.",
      challenge: "Although the business had a strong product offering and an established brand, it required a more strategic digital marketing approach to drive sustainable online growth. The objective was to increase qualified traffic, improve conversion performance, maximize advertising efficiency, and build stronger brand awareness across multiple digital channels.",
      solution: "Gourmetica developed and implemented a comprehensive e-commerce growth strategy combining paid advertising, social media marketing, and continuous performance optimization. By integrating Google Ads (Search, Shopping, and Performance Max), Meta advertising, and organic social media, we focused on increasing online revenue.",
      stats: [
        { label: "Increase in Online Revenue", val: "+240%" },
        { label: "Return On Ad Spend (ROAS)", val: "4.8x" },
        { label: "Customer Acquisition Cost", val: "-35%" }
      ],
      gallery: [
        "/images/results/LEONIDAS/IMG_8786.jpg",
        "/images/results/LEONIDAS/kendi-kutunu-olustur-leonidas-cikolata-12.jpg"
      ]
    },
    biitest: {
      title: "BiiTest DIAGNOSTICS",
      banner: "/images/results/BIITEST/3 (1).png",
      scope: ["Healthcare Growth Strategy", "E-Commerce Strategy", "Social Media Content", "Google Ads Management", "Meta Advertising", "Reporting"],
      overview: "BiiTest is a UK-based healthcare brand specialising in the development of innovative diagnostic testing solutions. With a focus on quality, reliability, and accessibility, the company develops advanced testing products designed to support modern healthcare needs. BiiTest partnered with Gourmetica to build a scalable digital marketing approach that increased brand visibility and supported e-commerce growth.",
      challenge: "BiiTest required a comprehensive digital marketing strategy capable of supporting its long-term growth objectives while strengthening its online presence across multiple digital channels. The goal was to improve brand awareness, increase qualified traffic, and establish a scalable marketing framework.",
      solution: "Gourmetica developed a fully integrated digital growth strategy combining paid advertising, social media, and e-commerce marketing into one performance-driven approach. Through continuous optimization, audience targeting, and data-driven decisions, we focused on increasing visibility and engagement.",
      stats: [
        { label: "Diagnostic Sales Growth", val: "3.5x increase" },
        { label: "CPA Reduction", val: "-42%" },
        { label: "Search Visibility", val: "+310%" }
      ],
      gallery: [
        "/images/results/BIITEST/1.jpg",
        "/images/results/BIITEST/6.jpg"
      ]
    },
    phoenix: {
      title: "PHOENIX COMMERCIAL FINANCE",
      banner: "/images/results/PHOENIX/30 JULY.png",
      scope: ["Corporate Redesign & Dev", "Digital Lead Gen Strategy", "Google Search Ads Management", "Meta Advertising Setup", "Social Media Strategy", "Reporting"],
      overview: "Phoenix Commercial Finance is a UK-based commercial finance brokerage providing tailored funding solutions to businesses across a wide range of industries. With a relationship-driven approach and access to a broad network of lenders, the company helps SMEs secure the funding they need to grow and achieve their long-term ambitions.",
      challenge: "Phoenix faced challenges in effectively marketing their brokerage services online and generating high-quality commercial finance leads. They needed a modern, conversion-focused digital platform that projected authority, alongside paid acquisition campaigns designed to target business owners seeking funding.",
      solution: "Gourmetica designed and developed a bespoke, conversion-focused corporate website. Alongside the new website, we launched targeted Google Ads and Meta campaigns to capture commercial finance enquiries, optimizing copy and landing pages to maximize conversion efficiency.",
      stats: [
        { label: "Commercial Enquiries", val: "+290%" },
        { label: "Cost Per Lead (CPL)", val: "-50% drop" },
        { label: "SME Reach", val: "15k+ business owners" }
      ],
      gallery: [
        "/images/results/PHOENIX/20 AUG.png",
        "/images/results/PHOENIX/6 AUG.png"
      ]
    },
    "great-british-doner": {
      title: "GREAT BRITISH DONER",
      banner: "/images/results/GBD/ChatGPT Image 22 May 2026 15_22_25 (2).png",
      scope: ["Responsive Website Design", "Multi-Location Navigation Map", "Social Media Management", "Google Ads Setup", "Meta Ads Management", "Content Creation"],
      overview: "Great British Doner is a fast-growing multi-location restaurant brand redefining modern street food across the UK. As the business continued to expand, the brand required a scalable digital presence capable of supporting customer acquisition, franchise lead generation, and consistent brand communication across multiple locations.",
      challenge: "The brand needed a centralized website that allowed users to easily find their nearest location, view menus, and order online, while maintaining a single, consistent brand message. They also needed localized advertising campaigns to drive traffic to newly opened franchise locations.",
      solution: "We designed and developed a modern website optimized to showcase the food and simplify finding locations. We implemented localized Google Ads and Meta campaigns for each venue alongside a national social media campaign that generated franchise leads.",
      stats: [
        { label: "Franchise Leads", val: "+140%" },
        { label: "Total Web Bookings", val: "4.1x increase" },
        { label: "Foot Traffic Growth", val: "+45% per venue" }
      ],
      gallery: [
        "/images/results/GBD/ChatGPT Image 24 May 2026 23_05_39 (1).png",
        "/images/results/GBD/_DSF8945 kopya.jpg"
      ]
    },
    "42holborn": {
      title: "42 HOLBORN",
      banner: "/images/banner/42newBackground.jpg",
      scope: ["Brand Refresh", "Website Design & Development", "Local Search Optimization", "Photography"],
      overview: "42 Holborn is a vibrant culinary destination situated in the heart of London at 42 Kingsway, delivering Mediterranean dining experiences.",
      challenge: "The restaurant needed to capture foot traffic from Holborn corporate workers and drive pre-theater and evening dinner bookings in a highly saturated region.",
      solution: "Gourmetica developed a fast, conversion-optimized website displaying their menu card and custom reservation widgets, coupled with localized Google maps campaigns.",
      stats: [
        { label: "Direct Table Bookings", val: "+160%" },
        { label: "Mobile Conversions", val: "+42%" },
        { label: "Google Maps Actions", val: "2.8x" }
      ],
      gallery: []
    },
    lizz: {
      title: "LIZZ RESTAURANT",
      banner: "/images/banner/LizzNewBg.jpg",
      scope: ["Identity Creation", "Responsive Web Development", "Social Retargeting", "GBP Optimization"],
      overview: "Lizz is a premium fine dining Mediterranean restaurant located in the charming town of Gosport, offering handcrafted culinary menus.",
      challenge: "The client needed a digital launch strategy to create buzz, introduce the brand, and acquire bookings from Gosport and Portsmouth residents.",
      solution: "We built a modern reservation-centric website, launched local launch campaigns on Meta, and optimized local business map keywords to secure top local pack rankings.",
      stats: [
        { label: "Opening Week Bookings", val: "100% capacity" },
        { label: "Website Conversion", val: "4.2%" },
        { label: "Google Maps Calls", val: "+340" }
      ],
      gallery: []
    },
    mysa: {
      title: "MYSA RESTAURANT",
      banner: "/images/banner/mysanewbackground.jpg",
      scope: ["Visual Design System", "Bespoke Web Design & CMS", "Local SEO Campaign", "Campaign Management"],
      overview: "Mysa is a Mediterranean-inspired dining destination situated in Hoddesdon, delivering premium experiences and handcrafted cocktails.",
      challenge: "Mysa needed to distinguish themselves from local casual eateries and elevate their positioning as a high-end luxury cocktail and dinner lounge.",
      solution: "Gourmetica created a premium, sleek dark-themed website matching their interior design, combined with local search ads and regular social brand shoots.",
      stats: [
        { label: "Average Table Value", val: "+24% higher" },
        { label: "SEO Visibility", val: "3x search views" },
        { label: "Monthly Web Bookings", val: "1,200+" }
      ],
      gallery: []
    },
    payiz: {
      title: "Payiz Restaurant",
      banner: "/images/banner/PiyazMain-min-min.jpg",
      scope: ["Brand Reputation Audit", "Menu-Food Bible Creation", "SEO Strategy", "Social Ads campaigns"],
      overview: "Payiz Restaurant, a luxurious Mediterranean venue in London, sought to capture upscale clientele and optimize online reputation metrics.",
      challenge: "The venue suffered from poor organic local visibility and inconsistent review metrics, which affected conversion rates from maps to tables.",
      solution: "Gourmetica set up reputation audits, optimized Google maps listings, launched high-ROI search campaigns, and created social content showcasing their signature dishes.",
      stats: [
        { label: "Review Rating", val: "4.7 stars (from 4.1)" },
        { label: "Ad-Generated Revenue", val: "+190%" },
        { label: "Organic Search Leads", val: "+80%" }
      ],
      gallery: []
    },
    rustiq: {
      title: "Rustiq Restaurant",
      banner: "/images/banner/RustiqMain-min-min.jpg",
      scope: ["TikTok & Social Campaigning", "Local SEO Optimization", "Performance Marketing", "Content Creation"],
      overview: "Rustiq collaborated with Gourmetica to build dynamic social campaigns that captured Warwickshire and Midlands dining groups.",
      challenge: "Rustiq needed to generate visual content that went viral on Instagram Reels and TikTok, transforming online views into physical tables.",
      solution: "We directed custom social videos, launched retargeting social campaigns for users who visited their website, and optimized search ads.",
      stats: [
        { label: "Video Views", val: "450k+ organic views" },
        { label: "Weekend Table Fill", val: "100% capacity" },
        { label: "Meta Ad ROAS", val: "5.2x" }
      ],
      gallery: []
    },
    liman: {
      title: "Liman Restaurant",
      banner: "/images/banner/bglimannew.jpg",
      scope: ["Local SEO Strategy", "Google maps SEO", "Web Content Writing", "Social media templates"],
      overview: "Liman Restaurant is a cozy Mediterranean eatery located in Islington, London, known for its warm hospitality and authentic dishes.",
      challenge: "Fierce local competition in Islington meant Liman needed to dominate keywords like 'Turkish restaurant Islington' to drive booking volumes.",
      solution: "We implemented technical local SEO, optimized their Google Business Profile, and updated website content to optimize search keyword density.",
      stats: [
        { label: "Google Pack Ranking", val: "#1 for local search" },
        { label: "Website Enquiries", val: "+115%" },
        { label: "Map Views Growth", val: "+210% increase" }
      ],
      gallery: []
    }
  };

  const study = data[slug];

  if (!study) {
    notFound();
  }

  return (
    <main className="work-detail-page">
      {/* Hero */}
      <section className="work-hero-detail" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.9)), url('${study.banner}')` }}>
        <div className="container">
          <div className="hero-content text-center">
            <Link href="/ourwork" className="back-link">
              <i className="fa fa-chevron-left" aria-hidden="true"></i> Back to Work
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
