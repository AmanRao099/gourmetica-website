import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Gourmetica | Growth Marketing Agency",
    template: "%s | Gourmetica"
  },
  description: "At Gourmetica, we understand the unique needs of the hospitality industry. We combine persuasive language with data-driven insights to help you create compelling content that resonates with your guests and drives more revenue.",
  keywords: [
    "Branding", "Strategy", "Website Design", "Website Development", "SEO", 
    "Social Media Management", "Photography", "Advertising", "Email Marketing", 
    "Reputation Management", "Google Optimization", "Event Marketing", 
    "Growth Marketing", "Marketing Agency", "Lead Generation", "Restaurant Client", 
    "Google Review Ranking", "Review Management"
  ],
  icons: {
    icon: [
      { url: "/images/logo/PNG.4.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/images/logo/PNG.4.png", sizes: "180x180", type: "image/png" }
    ]
  }
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* FontAwesome Link */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" 
        />
        
        {/* Google tag (gtag.js) */}
        <script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=G-XRCVNK07NE"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XRCVNK07NE');
            `
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
