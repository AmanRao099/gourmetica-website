import type { Metadata } from "next";
import Link from "next/link";
import { Container, Box } from "@/core/primitives";
import { Reveal, Stagger } from "@/core/motion";
import { ARTICLES } from "@/constants/articles";

export const metadata: Metadata = {
  title: "News & Insights",
  description: "Stay ahead with the latest strategies in growth marketing, web design, local SEO, and digital positioning for hospitality and B2B brands."
};

export default function NewsIndex() {
  return (
    <main className="bg-[#fafaf9] min-h-screen pb-24" style={{ backgroundColor: "#fafaf9", paddingTop: "8rem", paddingBottom: "6rem" }}>
      <Container size="wide" style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* Page Title */}
        <Box className="w-full text-left mb-16" style={{ marginBottom: "4rem", marginTop: "2rem" }}>
          <Reveal>
            <h1 
              className="font-mont font-black uppercase text-black leading-none tracking-tighter text-[72px] sm:text-[100px] md:text-[140px] lg:text-[180px] xl:text-[220px]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              News
            </h1>
          </Reveal>
        </Box>

        {/* Flat grid of news cards */}
        <Stagger>
          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {ARTICLES.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.05}>
                <Link href={`/news/${post.slug}`} className="group flex flex-col no-underline">
                  {/* Card Image Wrapper with aspect ratio and zoom effect */}
                  <Box className="overflow-hidden aspect-[4/3] bg-neutral-100 rounded-none mb-4" style={{ position: "relative" }}>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" 
                      style={{ transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }}
                    />
                  </Box>

                  {/* Title */}
                  <h3 
                    className="font-mont font-extrabold text-[20px] md:text-[22px] text-neutral-900 leading-snug group-hover:underline decoration-1 underline-offset-4"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {post.title}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </Box>
        </Stagger>

      </Container>
    </main>
  );
}
