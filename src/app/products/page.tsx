"use client";

import { useState } from "react";
import Link from "next/link";
import { Section, Container, Grid, Box, Stack, Flex } from "@/core/primitives";
import { Heading, Text } from "@/core/typography";
import { Button } from "@/core/components";
import { Reveal } from "@/core/motion";

export default function Products() {
  const [activeImage, setActiveImage] = useState(0);
  const images = [
    "/images/tably/ChatGPT Image 5 Tem 2026 11_26_37.png",
    "/images/tably/ChatGPT Image 5 Tem 2026 11_59_27.png",
    "/images/tably/ChatGPT Image 5 Tem 2026 12_03_08.png"
  ];
  
  const tabNames = [
    "Dashboard Overview",
    "Website Builder",
    "Menu Operations"
  ];

  return (
    <main className="bg-warm-white min-h-screen">
      {/* Hero Section */}
      <Section className="bg-neutral-950 dark text-white pt-32 pb-24 border-b border-white/5" spacing="none">
        <Container size="wide">
          <Reveal>
            <Stack gap="md" align="start">
              <span className="text-primary font-heading font-bold text-xs uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-pill">Platform</span>
              <Heading level={1} size="display-lg">
                Website Operations Platform
              </Heading>
              <Text size="body-lg" className="text-neutral-400 max-w-2xl">
                Manage content at scale across venues, brands, domains and more.
              </Text>
              <Box className="pt-4">
                <Button asChild className="bg-primary hover:bg-[#bd1a1d] text-white rounded-none px-[22px] pt-[15px] pb-[13px] font-bold uppercase tracking-[0.05em] text-[12px] h-auto">
                  <Link href="/getintouch">
                    Book a Discovery Call
                  </Link>
                </Button>
              </Box>
            </Stack>
          </Reveal>
        </Container>
      </Section>

      {/* Trust Section */}
      <Section spacing="sm" className="bg-stone border-b border-neutral-200/40">
        <Container size="wide">
          <Reveal>
            <Stack gap="lg" align="center" className="text-center">
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-400">Trusted by the UK&apos;s Leading Hospitality Brands</span>
              <Flex wrap="wrap" justify="center" align="center" gap="xl" className="mt-4">
                <Flex align="center" gap="xs" className="opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
                  <img src="/images/clients/ivytreeessex.co.uk.png" alt="Ivy Tree Logo" className="h-8 object-contain" />
                  <span className="font-heading font-bold text-sm text-neutral-800">Ivy Tree</span>
                </Flex>
                <Flex align="center" gap="xs" className="opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
                  <img src="/images/clients/antepkitchen.co.uk.jpg" alt="Otto Kitchen Logo" className="h-8 object-contain" />
                  <span className="font-heading font-bold text-sm text-neutral-800">Otto Kitchen</span>
                </Flex>
                <Flex align="center" gap="xs" className="opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
                  <img src="/images/clients/sofra.co.uk.jpg" alt="Rustiq Logo" className="h-8 object-contain" />
                  <span className="font-heading font-bold text-sm text-neutral-800">Rustiq</span>
                </Flex>
              </Flex>
            </Stack>
          </Reveal>
        </Container>
      </Section>

      {/* Platform Concept Section */}
      <Section spacing="lg">
        <Container size="wide">
          <Grid columns={1} gap="xl" className="lg:grid-cols-12 items-center">
            
            <Box className="lg:col-span-6">
              <Reveal>
                <Stack gap="md">
                  <Box className="border border-neutral-200/80 bg-white p-3 rounded-md shadow-lg overflow-hidden aspect-video relative flex items-center justify-center">
                    <img 
                      src={images[activeImage]} 
                      alt={tabNames[activeImage]} 
                      className="w-full h-full object-contain rounded-sm"
                    />
                  </Box>
                  <Flex gap="sm" className="mt-2" justify="center">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImage(idx)}
                        className={`px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 border ${
                          activeImage === idx
                            ? "bg-primary text-white border-primary"
                            : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"
                        }`}
                      >
                        {tabNames[idx]}
                      </button>
                    ))}
                  </Flex>
                </Stack>
              </Reveal>
            </Box>

            <Box className="lg:col-span-6">
              <Reveal delay={0.1}>
                <Stack gap="lg">
                  <Heading level={2} size="heading-lg">
                    Reimagining how restaurant, pub and cafe websites are managed.
                  </Heading>
                  <Box className="w-12 h-1 bg-primary" />
                  
                  <Text size="body-lg" className="font-semibold text-neutral-800 leading-relaxed">
                    TABLY is built to simplify how hospitality businesses manage their websites.
                  </Text>
                  <Text size="body" className="text-neutral-600 leading-relaxed mb-6">
                    We believe updating a website should be as easy as updating a social media post. That&apos;s why we&apos;ve created an intuitive platform that gives hospitality teams complete control over their websites, content, and digital operations—without relying on developers.
                  </Text>
                  
                  <Stack gap="md" className="border-t border-neutral-100 pt-6">
                    <Flex gap="md" align="start">
                      <Box className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading font-bold text-sm flex-shrink-0 mt-0.5">1</Box>
                      <Stack gap="none">
                        <Heading level={4} size="heading-sm" className="mb-1">Launch Your Website in Days</Heading>
                        <Text size="body-sm" className="text-neutral-600">Get your business online quickly with a professionally designed website—no lengthy development process.</Text>
                      </Stack>
                    </Flex>

                    <Flex gap="md" align="start">
                      <Box className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading font-bold text-sm flex-shrink-0 mt-0.5">2</Box>
                      <Stack gap="none">
                        <Heading level={4} size="heading-sm" className="mb-1">Update Your Content in Minutes</Heading>
                        <Text size="body-sm" className="text-neutral-600">Easily edit menus, images, events, and pages without any technical knowledge.</Text>
                      </Stack>
                    </Flex>

                    <Flex gap="md" align="start">
                      <Box className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading font-bold text-sm flex-shrink-0 mt-0.5">3</Box>
                      <Stack gap="none">
                        <Heading level={4} size="heading-sm" className="mb-1">Designed to Grow Your Business</Heading>
                        <Text size="body-sm" className="text-neutral-600">SEO-ready and built to convert visitors into enquiries, bookings and customers.</Text>
                      </Stack>
                    </Flex>
                  </Stack>
                </Stack>
              </Reveal>
            </Box>

          </Grid>
        </Container>
      </Section>

      {/* Smartest Way Section */}
      <Section spacing="xl" className="bg-neutral-950 dark text-white text-center">
        <Container size="wide">
          <Reveal>
            <Stack gap="lg" align="center" className="max-w-3xl mx-auto">
              <Heading level={2} size="heading-xl">
                The smartest way to manage hospitality websites.
              </Heading>
              <Text size="body-lg" className="text-neutral-400">
                Manage websites, menus, events, careers and digital content from one intuitive platform—built specifically for restaurants, pubs, hotels and hospitality groups.
              </Text>
              <Box className="pt-4">
                <Button asChild className="bg-primary hover:bg-[#bd1a1d] text-white rounded-none px-[22px] pt-[15px] pb-[13px] font-bold uppercase tracking-[0.05em] text-[12px] h-auto">
                  <Link href="/getintouch">
                    Request Platform Demo
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
