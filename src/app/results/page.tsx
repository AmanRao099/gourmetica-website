import type { Metadata } from "next";
import { ALL_CASE_STUDIES } from "@/constants/results";
import { PageContainer } from "@/core/primitives";
import { WorkGrid } from "./WorkGrid";

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

      <WorkGrid cases={ALL_CASE_STUDIES} />
    </main>
  );
}
