"use client";

import { useState } from "react";
import Link from "next/link";
import { Section, Container, Stack, Box } from "@/core/primitives";
import { Heading, Text } from "@/core/typography";
import { Button } from "@/core/components";
import { Reveal, Stagger } from "@/core/motion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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

  return (
    <main className="bg-[#fafaf9] min-h-screen pb-24" style={{ backgroundColor: "#fafaf9", paddingTop: "8rem", paddingBottom: "6rem" }}>
      <Container size="wide">
        <Box 
          className="mx-auto bg-white border border-neutral-200/50 rounded-sm shadow-sm p-6 md:p-12 lg:p-16"
          style={{ 
            maxWidth: "1140px", 
            backgroundColor: "#ffffff", 
            marginTop: "20px" 
          }}
        >
          {/* Title Header */}
          <Box className="text-center mb-12" style={{ marginBottom: "3rem" }}>
            <Heading level={1} className="font-mont font-black text-[32px] md:text-[37px] text-neutral-900 tracking-tight max-w-none">
              Frequently Asked Questions
            </Heading>
          </Box>

          {/* Accordions */}
          <Stagger>
            <Stack gap="none" className="mb-20 border border-[#5f5d5d] bg-white overflow-hidden rounded-sm shadow-sm" style={{ marginBottom: "5rem" }}>
              {faqData.map((faq, index) => (
                <Reveal key={index} className="w-full">
                  <Box className="w-full border-t border-white first:border-t-0" style={{ borderTop: index > 0 ? "1px solid white" : "none" }}>
                    <button 
                      className={`w-full flex items-center justify-between text-left font-mont font-bold transition-all duration-300 focus:outline-none text-[16px] md:text-[17px] ${
                        activeIndex === index 
                          ? "bg-[#ccc] text-neutral-900" 
                          : "bg-[#5f5d5d] text-white hover:bg-[#ccc] hover:text-neutral-900"
                      }`} 
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={activeIndex === index}
                      style={{ padding: "20px 24px" }}
                    >
                      <span className="pr-4 leading-snug">{faq.question}</span>
                    </button>
                    
                    <Box 
                      className="transition-all duration-300 ease-in-out overflow-hidden bg-white"
                      style={{ 
                        maxHeight: activeIndex === index ? "500px" : "0",
                        opacity: activeIndex === index ? 1 : 0
                      }}
                    >
                      <Box className="border-b border-neutral-100/50" style={{ padding: "24px", borderBottom: "1px solid rgba(229, 229, 229, 0.5)" }}>
                        <Text size="body" className="text-neutral-800 leading-relaxed text-justify max-w-none">
                          {faq.answer}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Reveal>
              ))}
            </Stack>
          </Stagger>

          {/* More Questions */}
          <Reveal>
            <Stack gap="md" align="center" className="text-center max-w-2xl mx-auto pt-8 border-t border-neutral-200/50" style={{ paddingTop: "2rem", borderTop: "1px solid rgba(229, 229, 229, 0.5)" }}>
              <Heading level={2} size="heading-md">
                Still have questions?
              </Heading>
              <Text size="body-sm" className="text-neutral-500" style={{ marginBottom: "1rem" }}>
                We are here to help. Reach out to our strategy team and get the answers you need.
              </Text>
              <Box className="pt-2" style={{ paddingTop: "0.5rem" }}>
                <Button asChild className="bg-primary hover:bg-[#bd1a1d] text-white rounded-none font-bold uppercase tracking-[0.05em] text-[12px] h-auto" style={{ padding: "15px 22px 13px" }}>
                  <Link href="/getintouch">
                    Book A Strategy Call
                  </Link>
                </Button>
              </Box>
            </Stack>
          </Reveal>
        </Box>
      </Container>
    </main>
  );
}
