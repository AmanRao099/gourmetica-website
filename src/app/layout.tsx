import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import { HeaderBlock, FooterBlock } from "@/blocks";

const montFont = localFont({
  src: [
    {
      path: "../../public/fonts/Eina03-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Eina03-SemiBold.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Eina03-Bold.woff2",
      weight: "800",
      style: "normal",
    }
  ],
  variable: "--font-mont",
});

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
      { url: "/images/logo/logoscroll.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/images/logo/logoscroll.png", sizes: "180x180", type: "image/png" }
    ]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Lets content extend into the notch/home-indicator areas; globals.css
  // compensates with env(safe-area-inset-*) so nothing sits under them.
  viewportFit: "cover",
  themeColor: "#0a0a0a",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Warm up third-party origins before their render-blocking CSS/fonts are requested */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* FontAwesome Link */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      {/* suppressHydrationWarning: browser extensions (e.g. Grammarly) inject
          attributes onto <body> before React hydrates, producing a false
          hydration-mismatch warning. Only this element's attributes are
          exempted — child markup is still fully checked. */}
      <body className={montFont.className} suppressHydrationWarning>
        {/* Google tag (gtag.js) */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-XRCVNK07NE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XRCVNK07NE');
          `}
        </Script>
        
        <HeaderBlock />
        {children}
        <FooterBlock />
      </body>
    </html>
  );
}
