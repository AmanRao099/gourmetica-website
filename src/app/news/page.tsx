import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer, Box } from "@/core/primitives";
import { Reveal, Stagger } from "@/core/motion";
import { ARTICLES } from "@/constants/articles";

export const metadata: Metadata = {
  title: "News & Insights",
  description: "Stay ahead with the latest strategies in growth marketing, web design, local SEO, and digital positioning for hospitality and B2B brands."
};

export default function NewsIndex() {
  return (
    <main className="bg-[#fafaf9] min-h-screen" style={{ paddingTop: "8rem", paddingBottom: "6rem" }}>
      <PageContainer size="wide">
        {/* Oversized editorial page title */}
        <Box className="w-full text-left" style={{ marginBottom: "3.5rem", marginTop: "2rem" }}>
          <Reveal>
            <h1
              className="font-heading font-black uppercase text-black leading-none tracking-tighter text-[64px] sm:text-[100px] md:text-[150px] lg:text-[190px] xl:text-[230px]"
            >
              News
            </h1>
          </Reveal>
        </Box>

        {/* Flat grid of news cards */}
        <Stagger>
          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-y-14">
            {ARTICLES.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.05}>
                <Link href={`/news/${post.slug}`} className="group flex flex-col-reverse md:flex-col no-underline">
                  {/* Card image */}
                  <Box className="overflow-hidden aspect-[4/3] bg-neutral-100" style={{ position: "relative" }}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      style={{ transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }}
                    />
                  </Box>

                  {/* Title (above image on mobile, below on desktop — matches reference's stacking) */}
                  <h3 className="font-heading font-extrabold text-[19px] md:text-[22px] text-neutral-900 leading-snug mb-3 md:mb-0 md:mt-4 group-hover:underline decoration-1 underline-offset-4">
                    {post.title}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </Box>
        </Stagger>
      </PageContainer>
    </main>
  );
}
