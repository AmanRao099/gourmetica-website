"use client";

import { useState } from "react";
import { PageContainer } from "@/core/primitives";
import { SplitBackgroundBlock } from "@/blocks";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How can your marketing agency help my business grow?",
    answer: "Our agency specializes in developing tailored strategies that align with your business goals, target the right audience, and enhance your brand visibility. Through our expertise and effective implementation, we can drive increased customer engagement, leads, and conversions to help your business thrive."
  },
  {
    question: "How do you measure the success of marketing campaigns?",
    answer: "We utilize advanced analytics tools to track key performance indicators (KPIs) such as website traffic, conversion rates, engagement metrics, and return on investment (ROI). This data-driven approach enables us to continually optimize and improve our strategies for maximum results."
  },
  {
    question: "Will I have a dedicated account manager throughout the project?",
    answer: "Yes, we believe in providing personalized attention and excellent customer service. You will be assigned a dedicated account manager who will serve as your main point of contact, ensuring clear communication, addressing your queries, and overseeing the progress of your marketing campaigns."
  },
  {
    question: "How can I get started to benefit from your services?",
    answer: "The timeline for achieving results varies depending on various factors, such as the complexity of the campaign, industry dynamics, and your specific goals. We strive for both short-term wins and long-term growth, and we'll provide you with a realistic timeframe based on our assessment and past experience."
  },
  {
    question: "How can I get started with your marketing agency?",
    answer: "Getting started is easy! Simply reach out to us through our contact form or give us a call, and our team will schedule a consultation to discuss your marketing needs and provide you with a tailored solution to propel your business forward."
  }
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen">
      <section className="w-full bg-white pt-[110px] pb-[60px] md:pt-[140px] md:pb-[70px]">
        <PageContainer size="standard" className="text-center">
          <h1 className="font-heading font-bold text-black text-[28px] md:text-[33px] lg:text-[37px]">
            Frequently Asked Questions
          </h1>
        </PageContainer>
      </section>

      <SplitBackgroundBlock>
        <PageContainer size="standard" className="pb-[100px] md:pb-[140px]">
          <div className="flex flex-col">
            {faqData.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <div key={index} className={index > 0 ? "border-t border-white" : ""}>
                  <button
                    className="w-full flex items-center justify-between text-left font-heading font-normal transition-colors duration-200 bg-[#5f5d5d] hover:bg-[#6b6969] text-white text-[16px] md:text-[17px] px-6 py-5 focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4 leading-snug">{faq.question}</span>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ maxHeight: isOpen ? "500px" : "0" }}
                  >
                    <div className="py-6">
                      <p className="text-[15px] md:text-[16px] leading-[1.7] text-black text-justify">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </PageContainer>
      </SplitBackgroundBlock>
    </main>
  );
}
