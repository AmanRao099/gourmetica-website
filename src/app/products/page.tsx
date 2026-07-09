"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Section, Container, Grid, Box, Stack, Flex } from "@/core/primitives";
import { Heading, Text } from "@/core/typography";
import { Button } from "@/core/components";
import { Video } from "@/core/components/Video";
import { Reveal } from "@/core/motion";
import { cn } from "@/core/utils";

const ROTATING_WORDS = ["restaurant", "pub", "cafe", "hotel"];

const FEATURE_CARDS = [
  {
    image: "/images/banner/OttoKichenMain-min-min.jpg",
    title: "Supporting hospitality.",
    description: "TABLY was crafted with a single mission: to simplify digital management for hospitality teams. From intuitive content updates to robust integrations, every feature is built to let you focus on what matters most—your guests.",
  },
  {
    image: "/images/banner/RustiqMain-min-min.jpg",
    title: "We move quickly.",
    description: "In the fast-paced hospitality industry, agility is key. Our team works tirelessly to ship continuous updates across the platform, keeping every website aligned with the latest standard.",
  },
  {
    image: "/images/banner/PiyazMain-min-min.jpg",
    title: "Quality and reliable.",
    description: "Our platform is trusted by hospitality businesses across the UK for reliability and performance. From sleek designs to robust functionality, TABLY keeps your website as dependable as your service.",
  },
];

const ROLE_TABS = [
  {
    label: "Marketing Teams",
    eyebrow: "For Marketing Teams",
    heading: "Get campaigns live quicker and easier.",
    highlight: "quicker and easier",
    description: "Use TABLY's platform to share campaigns across your brands and individual venues in just a few clicks. Distributing content to the right places has never been simpler.",
    cta: "Explore For Marketing Teams",
    image: "/images/banner/sevices2.jpg",
  },
  {
    label: "Digital Teams",
    eyebrow: "For Digital Teams",
    heading: "Ship changes without waiting on developers.",
    highlight: "without waiting on developers",
    description: "Give your digital team full control over site structure, SEO and content—all from one dashboard—so nothing is ever blocked on a dev queue.",
    cta: "Explore For Digital Teams",
    image: "/images/banner/mysanewbackground.jpg",
  },
  {
    label: "Venue Managers",
    eyebrow: "For Venue Managers",
    heading: "Keep every location up to date, instantly.",
    highlight: "up to date, instantly",
    description: "Update menus, hours and events for your specific venue in minutes, while staying aligned with brand-wide guidelines set centrally.",
    cta: "Explore For Venue Managers",
    image: "/images/banner/LizzNewBg.jpg",
  },
  {
    label: "Independent Operators",
    eyebrow: "For Independent Operators",
    heading: "Everything you need, without the overhead.",
    highlight: "without the overhead",
    description: "Launch and run a professional website on your own terms—no agency retainer and no developer required.",
    cta: "Explore For Independent Operators",
    image: "/images/banner/bglimannew.jpg",
  },
];

const TESTIMONIALS = [
  {
    quote: "Placeholder quote — the TABLY platform has significantly enhanced how we manage our digital operations.",
    name: "Placeholder Name",
    title: "Placeholder Title, Placeholder Group",
  },
  {
    quote: "Placeholder quote — we've painlessly launched a series of venue websites giving our customers the information they need, whilst communicating our brand values.",
    name: "Placeholder Name",
    title: "Placeholder Title, Placeholder Company",
  },
  {
    quote: "Placeholder quote — both the website and our content workflow have had rave reviews from the team, and that comes down to the platform you've built.",
    name: "Placeholder Name",
    title: "Placeholder Title, Placeholder Group",
  },
  {
    quote: "Placeholder quote — the platform features we rely on let us manage content at scale and convert more visitors into guests.",
    name: "Placeholder Name",
    title: "Placeholder Title, Placeholder Company",
  },
];

function Blob({ className }: { className: string }) {
  return (
    <div
      className={cn("absolute pointer-events-none opacity-[0.15] blur-2xl", className)}
      style={{ borderRadius: "42% 58% 65% 35% / 45% 40% 60% 55%" }}
      aria-hidden
    />
  );
}

export default function Products() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const handlePlay = () => {
    videoRef.current?.play();
    setIsPlaying(true);
  };

  const activeRole = ROLE_TABS[activeTab] ?? ROLE_TABS[0]!;

  return (
    <main className="bg-warm-white min-h-screen">
      {/* Hero Section */}
      <Section className="relative bg-neutral-950 dark text-white pt-32 pb-24 border-b border-white/5 overflow-hidden" spacing="none">
        <Blob className="w-[420px] h-[420px] bg-primary -top-24 -left-24" />
        <Blob className="w-[380px] h-[380px] bg-neutral-500 -top-16 -right-16" />
        <Blob className="w-[340px] h-[340px] bg-primary bottom-0 -left-10 translate-y-1/2" />
        <Blob className="w-[380px] h-[380px] bg-neutral-500 bottom-0 -right-16 translate-y-1/3" />

        <Container size="wide" className="relative">
          <Reveal>
            <Stack gap="lg" align="center" className="text-center max-w-3xl mx-auto">
              <Link
                href="/getintouch"
                className="inline-flex items-center gap-2 font-heading font-semibold text-xs uppercase tracking-wider text-primary bg-white/5 border border-white/10 px-4 py-2 rounded-pill hover:bg-white/10 transition-colors duration-200"
              >
                For Independent Venues: Website Generator
                <span aria-hidden>&rarr;</span>
              </Link>

              <Heading level={1} size="display-lg" className="leading-tight">
                Website Operations Platform
              </Heading>

              <Text size="body-lg" className="text-neutral-400 max-w-2xl">
                Manage content at scale across{" "}
                <span className="text-primary font-semibold inline-block min-w-[92px] text-left">
                  {ROTATING_WORDS[wordIndex]}
                </span>{" "}
                venues, brands, domains and more.
              </Text>

              <Box className="pt-2">
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
                  <img src="/images/clients/logo-2-B5td2iVI.png" alt="Otto Kitchen Logo" className="h-8 object-contain" />
                  <span className="font-heading font-bold text-sm text-neutral-800">Otto Kitchen</span>
                </Flex>
                <Flex align="center" gap="xs" className="opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
                  <img src="/images/clients/partner-37-C8HQ8M-R.png" alt="Rustiq Logo" className="h-8 object-contain" />
                  <span className="font-heading font-bold text-sm text-neutral-800">Rustiq</span>
                </Flex>
              </Flex>
            </Stack>
          </Reveal>
        </Container>
      </Section>

      {/* Video Section */}
      <Section spacing="lg" className="bg-neutral-950 dark">
        <Container size="wide">
          <Reveal>
            <Box
              className="relative rounded-lg overflow-hidden cursor-pointer group"
              onClick={!isPlaying ? handlePlay : undefined}
            >
              <Video
                ref={videoRef}
                aspectRatio="video"
                radius="lg"
                muted
                loop
                playsInline
                poster="/images/tably/ChatGPT Image 5 Tem 2026 11_26_37.png"
                className="w-full"
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
              >
                <source src="/HOME PAGE/VIDEO BANNER/0704.mp4" type="video/mp4" />
              </Video>
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 group-hover:bg-black/30">
                  <div className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-105">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5v14l11-7L8 5z" fill="#0a0a0a" />
                    </svg>
                  </div>
                </div>
              )}
            </Box>
          </Reveal>
        </Container>
      </Section>

      {/* Mission / Platform Concept Section */}
      <Section spacing="lg">
        <Container size="wide">
          <Grid columns={1} gap="xl" className="lg:grid-cols-12 items-start">
            <Box className="lg:col-span-5">
              <Reveal>
                <Heading level={2} size="heading-xl" className="leading-tight">
                  Reimagining how <span className="text-primary">hospitality</span> websites are managed.
                </Heading>
              </Reveal>
            </Box>

            <Box className="lg:col-span-7">
              <Reveal delay={0.1}>
                <Stack gap="lg">
                  <Text size="body-lg" className="font-semibold text-neutral-800 leading-relaxed">
                    TABLY is built to simplify how hospitality businesses manage their websites.
                  </Text>
                  <Text size="body" className="text-neutral-600 leading-relaxed mb-2">
                    We believe updating a website should be as easy as updating a social media post. That&apos;s why we&apos;ve created an intuitive platform that gives hospitality teams complete control over their websites, content, and digital operations—without relying on developers.
                  </Text>
                  <Link href="/aboutus" className="inline-flex items-center gap-2 font-heading font-bold text-sm text-neutral-900 hover:text-primary transition-colors duration-200 w-fit">
                    More About Us <span aria-hidden>&rarr;</span>
                  </Link>

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
                        <Text size="body-sm" className="text-neutral-600">SEO-ready and built to convert visitors into customers.</Text>
                      </Stack>
                    </Flex>
                  </Stack>
                </Stack>
              </Reveal>
            </Box>
          </Grid>
        </Container>
      </Section>

      {/* Feature Cards Section (placeholder copy/images) */}
      <Section spacing="lg" className="pt-0">
        <Container size="wide">
          <Grid columns={1} gap="lg" className="md:grid-cols-3">
            {FEATURE_CARDS.map((card, idx) => (
              <Reveal key={card.title} delay={idx * 0.08}>
                <Stack gap="sm">
                  <Box className="aspect-[4/5] rounded-md overflow-hidden bg-neutral-100">
                    <img src={card.image} alt="" className="w-full h-full object-cover" />
                  </Box>
                  <Heading level={3} size="heading-sm" className="mt-2">{card.title}</Heading>
                  <Text size="body-sm" className="text-neutral-600 leading-relaxed">{card.description}</Text>
                </Stack>
              </Reveal>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Empowering Roles Section (placeholder copy) */}
      <Section spacing="xl" className="bg-neutral-950 dark text-white">
        <Container size="wide">
          <Reveal>
            <Stack gap="xl" align="center">
              <Heading level={2} size="heading-xl" className="text-center">
                Empowering roles across <span className="text-primary">Hospitality</span>.
              </Heading>

              <Flex wrap="wrap" justify="center" gap="lg" className="border-b border-white/10 w-full pb-0">
                {ROLE_TABS.map((tab, idx) => (
                  <button
                    key={tab.label}
                    onClick={() => setActiveTab(idx)}
                    className={cn(
                      "font-heading font-semibold text-sm pb-4 border-b-2 transition-colors duration-200",
                      activeTab === idx
                        ? "text-white border-primary"
                        : "text-neutral-500 border-transparent hover:text-neutral-300"
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </Flex>

              <Grid columns={1} gap="xl" className="lg:grid-cols-2 items-center w-full pt-4">
                <Box>
                  <Stack gap="md" align="start">
                    <span className="text-primary font-heading font-bold text-xs uppercase tracking-wider">{activeRole.eyebrow}</span>
                    <Heading level={3} size="heading-lg" className="leading-tight">
                      {activeRole.heading}
                    </Heading>
                    <Text size="body" className="text-neutral-400 leading-relaxed">
                      {activeRole.description}
                    </Text>
                    <Button asChild className="bg-white/5 hover:bg-white/10 border border-white/15 text-white rounded-pill px-[22px] py-[13px] font-bold text-[12px] h-auto mt-2">
                      <Link href="/getintouch">{activeRole.cta}</Link>
                    </Button>
                  </Stack>
                </Box>
                <Box className="rounded-lg overflow-hidden aspect-video">
                  <img src={activeRole.image} alt={activeRole.label} className="w-full h-full object-cover" />
                </Box>
              </Grid>
            </Stack>
          </Reveal>
        </Container>
      </Section>

      {/* Testimonials Section (placeholder quotes) */}
      <Section spacing="xl" className="bg-neutral-950 dark text-white border-t border-white/5">
        <Container size="wide">
          <Reveal>
            <Stack gap="md" align="center" className="text-center mb-4">
              <Heading level={2} size="heading-xl">
                Feedback from industry <span className="text-primary">leaders</span>.
              </Heading>
              <Text size="body" className="text-neutral-400">
                Words from our amazing users who are achieving more with TABLY.
              </Text>
            </Stack>
          </Reveal>

          <Grid columns={1} gap="md" className="md:grid-cols-2 lg:grid-cols-4 mt-8">
            {TESTIMONIALS.map((t, idx) => (
              <Reveal key={idx} delay={idx * 0.06}>
                <Stack gap="lg" className="bg-white/[0.03] border border-white/10 rounded-md p-6 h-full justify-between">
                  <Text size="body-sm" className="italic text-neutral-300 leading-relaxed">&ldquo;{t.quote}&rdquo;</Text>
                  <Flex align="center" gap="sm">
                    <Box className="w-9 h-9 rounded-full bg-primary/20 text-primary flex items-center justify-center font-heading font-bold text-xs flex-shrink-0">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </Box>
                    <Stack gap="none">
                      <Text size="body-sm" className="font-bold text-white">{t.name}</Text>
                      <Text size="body-sm" className="text-neutral-500 text-xs">{t.title}</Text>
                    </Stack>
                  </Flex>
                </Stack>
              </Reveal>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Closing CTA Section */}
      <Section spacing="xl" className="bg-neutral-950 dark text-white text-center">
        <Container size="wide">
          <Reveal>
            <Stack gap="lg" align="center" className="max-w-3xl mx-auto">
              <Heading level={2} size="heading-xl">
                Book a <span className="text-primary">discovery call</span> for a no-sales chat.
              </Heading>
              <Text size="body-lg" className="text-neutral-400">
                Our discovery call gives us the opportunity to understand your current business goals and pain points before selling you anything.
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

      {/* Footer attribution note — sits between the page and the global site footer */}
      <Box className="bg-neutral-950 dark text-center py-6 border-t border-white/5">
        <Text size="body-sm" className="text-neutral-500 font-heading uppercase tracking-wider">
          Built by Gourmetica.
        </Text>
      </Box>
    </main>
  );
}
