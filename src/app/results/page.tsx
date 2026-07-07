import type { Metadata } from "next";
import Link from "next/link";
import { ALL_CASE_STUDIES } from "@/constants/results";
import { Section, Container, Grid, Box, Stack } from "@/core/primitives";
import { Heading, Text } from "@/core/typography";
import { Reveal, Stagger } from "@/core/motion";

export const metadata: Metadata = {
  title: "Results | Case Studies",
  description: "Browse our performance-driven growth cases spanning fine dining restaurants, e-commerce, healthcare diagnostics, commercial finance, and franchise brands."
};

export default function WorkIndex() {
  return (
    <main className="bg-warm-white min-h-screen">
      {/* Hero Header */}
      <Section className="bg-neutral-950 dark text-white pt-32 pb-24 border-b border-white/5" spacing="none">
        <Container size="wide">
          <Reveal>
            <Stack gap="md">
              <Heading level={1} size="display-lg">
                Results
              </Heading>
              <Text size="body-lg" className="text-neutral-400 max-w-3xl leading-relaxed">
                Getting started is easy! Simply reach out to us through our contact form or give us a call, and our team will schedule a consultation to discuss your marketing needs and provide you with a tailored solution to propel your business forward.
              </Text>
            </Stack>
          </Reveal>
        </Container>
      </Section>

      {/* Grid List */}
      <Section spacing="lg">
        <Container size="wide">
          <Stagger>
            <Grid columns={1} gap="xl" className="md:grid-cols-2 lg:grid-cols-3">
              {ALL_CASE_STUDIES.map((study, index) => (
                <Reveal key={index}>
                  <Link 
                    href={`/results/${study.slug}`}
                    className="relative block overflow-hidden group aspect-[4/3] rounded-md border border-neutral-200/50 bg-neutral-900 shadow-sm"
                  >
                    {/* Background Image */}
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-90 transition-all duration-500 scale-100 group-hover:scale-105"
                    />
                    
                    {/* Gradient Overlay & Content Container */}
                    <Box className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/40 to-transparent p-6 flex flex-col justify-end text-white">
                      <span className="text-primary font-heading font-bold text-[10px] uppercase tracking-widest mb-1.5">
                        {study.category}
                      </span>
                      <Heading level={3} size="heading-sm" className="font-heading font-bold text-lg leading-tight mb-2 text-white">
                        {study.title}
                      </Heading>
                      
                      {/* Expandable Hover Section */}
                      <Box className="max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                        <Text size="body-sm" className="text-neutral-300 mb-4 line-clamp-2 leading-relaxed">
                          {study.excerpt}
                        </Text>
                        <span className="text-xs uppercase font-heading font-bold tracking-widest text-primary flex items-center gap-1.5">
                          Read Case Study <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </span>
                      </Box>
                    </Box>
                  </Link>
                </Reveal>
              ))}
            </Grid>
          </Stagger>
        </Container>
      </Section>
    </main>
  );
}
