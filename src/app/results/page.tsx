import type { Metadata } from "next";
import Link from "next/link";
import { ALL_CASE_STUDIES } from "@/constants/results";
import { PageContainer } from "@/core/primitives";

export const metadata: Metadata = {
  title: "Results | Case Studies",
  description: "Browse our performance-driven growth cases spanning fine dining restaurants, e-commerce, healthcare diagnostics, commercial finance, and franchise brands."
};

export default function WorkIndex() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="w-full bg-white pt-[110px] pb-[60px] md:pt-[140px] md:pb-[80px]">
        <PageContainer size="standard" className="text-center">
          <h1 className="font-heading font-bold text-[#1d1d1d] text-[44px] md:text-[64px] lg:text-[80px] leading-[1.05] mb-6">
            Our Work
          </h1>
          <p className="mx-auto max-w-[750px] text-[16px] md:text-[18px] leading-[1.7] text-neutral-600">
            Getting started is easy! Simply reach out to us through our contact form or give us a call, and our team will schedule a consultation to discuss your marketing needs and provide you with a tailored solution to propel your business forward.
          </p>
        </PageContainer>
      </section>

      {/* Desktop / tablet — edge-to-edge photo grid */}
      <div className="hidden md:grid md:grid-cols-3">
        {ALL_CASE_STUDIES.map((study) => (
          <Link
            key={study.slug}
            href={`/results/${study.slug}`}
            className="relative block overflow-hidden group aspect-[4/3]"
          >
            <img
              src={study.image}
              alt={study.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <span className="absolute left-6 bottom-6 right-6 font-heading font-bold uppercase text-white text-[20px] lg:text-[22px] leading-tight">
              {study.title}
            </span>
          </Link>
        ))}
      </div>

      {/* Mobile — stacked list with excerpt and read more link */}
      <PageContainer size="standard" className="md:hidden pb-[60px] flex flex-col">
        {ALL_CASE_STUDIES.map((study) => (
          <div key={study.slug} className="py-8 border-t border-neutral-200 first:border-t-0 first:pt-0">
            <div className="relative w-full aspect-[4/3] mb-5 overflow-hidden">
              <img src={study.image} alt={study.title} className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <h2 className="font-heading font-bold uppercase text-black text-[19px] mb-2">{study.title}</h2>
            <p className="text-[14px] leading-[1.6] text-neutral-600 mb-3 line-clamp-2">{study.excerpt}</p>
            <Link
              href={`/results/${study.slug}`}
              className="inline-flex items-center gap-2 text-primary font-heading font-bold uppercase text-[12px] tracking-widest"
            >
              Read More <i className="fa fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        ))}
      </PageContainer>
    </main>
  );
}
