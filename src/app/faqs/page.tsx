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
      answer: "Our agency specializes in developing tailored growth strategies that align with your business goals, target the right audience, and enhance your digital brand presence. Through our integrated expertise (branding, web development, SEO, ads, and social), we drive qualified leads, increase direct bookings, and maximize customer lifetime value."
    },
    {
      question: "How do you measure the success of marketing campaigns?",
      answer: "We utilize advanced analytics tools and tracking structures to monitor Key Performance Indicators (KPIs) such as website traffic, conversion rates (forms completed, calls placed, table reservations), cost per acquisition (CPA), social engagement, and direct Return on Investment (ROI). This data-driven model allows us to continually test, optimize, and scale campaigns."
    },
    {
      question: "Will I have a dedicated account manager throughout the project?",
      answer: "Yes, we prioritize strong partner communication. You will be assigned a dedicated account manager who acts as your primary point of contact. They coordinate with our branding, SEO, design, and advertising specialists, providing regular reports and scheduling feedback calls to discuss campaign progress."
    },
    {
      question: "What is the timeline for seeing measurable results?",
      answer: "The timeline varies based on service scope and goals. Performance marketing (like Google Ads and Meta campaigns) can drive visibility and leads within the first few days of launching. Organic strategies like SEO and branding typically show compounding long-term value over 3 to 6 months. We design campaigns to target quick wins while building sustainable long-term channels."
    },
    {
      question: "How can I get started with Gourmetica?",
      answer: "Getting started is straightforward! Simply fill out our contact form on the Get In Touch page or send us an email. Our team will schedule an initial discovery call to review your current digital footprint, discuss your business objectives, and prepare a custom growth proposal tailored to your needs."
    }
  ];

  return (
    <main className="bg-warm-white min-h-screen">
      {/* Hero Header */}
      <Section className="bg-neutral-950 dark text-white pt-32 pb-24 border-b border-white/5" spacing="none">
        <Container size="wide">
          <Reveal>
            <Stack gap="md">
              <Heading level={1} size="display-lg">
                Frequently Asked Questions
              </Heading>
              <Text size="body-lg" className="text-neutral-400 max-w-2xl">
                Answers to common questions about onboarding, campaigns, and results.
              </Text>
            </Stack>
          </Reveal>
        </Container>
      </Section>

      {/* Accordions */}
      <Section spacing="lg">
        <Container size="narrow">
          <Stagger>
            <Stack gap="md" className="mb-20">
              {faqData.map((faq, index) => (
                <Reveal key={index}>
                  <Box 
                    className={`bg-white border rounded-md overflow-hidden shadow-sm transition-all duration-300 ${
                      activeIndex === index 
                        ? "border-primary shadow-md" 
                        : "border-neutral-200/60 hover:border-neutral-300"
                    }`}
                  >
                    <button 
                      className="w-full flex items-center justify-between text-left px-6 py-5 font-heading font-bold text-neutral-800 hover:text-primary transition-colors focus:outline-none" 
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={activeIndex === index}
                    >
                      <span className="text-base md:text-lg pr-4">{faq.question}</span>
                      <Box className={`text-primary transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}>
                        <i className={`fa ${activeIndex === index ? "fa-minus" : "fa-plus"}`} aria-hidden="true"></i>
                      </Box>
                    </button>
                    
                    <Box 
                      className="transition-all duration-300 ease-in-out overflow-hidden"
                      style={{ 
                        maxHeight: activeIndex === index ? "500px" : "0",
                        opacity: activeIndex === index ? 1 : 0
                      }}
                    >
                      <Box className="px-6 pb-6 pt-2 border-t border-neutral-100/50">
                        <Text size="body-sm" className="text-neutral-600 leading-relaxed text-justify">
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
            <Stack gap="md" align="center" className="text-center max-w-2xl mx-auto pt-8 border-t border-neutral-200/50">
              <Heading level={2} size="heading-md">
                Still have questions?
              </Heading>
              <Text size="body-sm" className="text-neutral-500">
                We are here to help. Reach out to our strategy team and get the answers you need.
              </Text>
              <Box className="pt-2">
                <Button asChild className="bg-primary hover:bg-[#bd1a1d] text-white rounded-none px-[22px] pt-[15px] pb-[13px] font-bold uppercase tracking-[0.05em] text-[12px] h-auto">
                  <Link href="/getintouch">
                    Book A Strategy Call
                  </Link>
                </Button>
              </Box>
            </Stack>
          </Reveal>
        </Container>
      </Section>
    </main>
  );
}
