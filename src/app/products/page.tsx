"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Section, Container, Grid, Box, Stack, Flex } from "@/core/primitives";
import { Heading, Text } from "@/core/typography";
import { Button } from "@/core/components";
import { Video } from "@/core/components/Video";
import { Reveal, Stagger, StaggerItem, HoverScale } from "@/core/motion";
import { cn } from "@/core/utils";
import { Typewriter } from "./Typewriter";

const ROTATING_WORDS = ["hospitality", "restaurant", "pub", "cafe", "hotel"];

const MISSION_ITEMS = [
  {
    image: "/product/card1.png",
    title: "Supporting hospitality.",
    description: "TABLY was crafted with a single mission: to simplify digital management for hospitality teams. From intuitive content updates to robust integrations, every feature is built to let you focus on what matters most—your guests.",
  },
  {
    image: "/product/card2.png",
    title: "We move quickly.",
    description: "In the fast-paced hospitality industry, agility is key. Our team works tirelessly to ship continuous updates across the platform, keeping every website aligned with the latest standard.",
  },
  {
    image: "/product/card3.png",
    title: "Quality and reliable.",
    description: "Our platform is trusted by hospitality businesses across the UK for reliability and performance. From sleek designs to robust functionality, TABLY keeps your website as dependable as your service.",
  },
];

const PRODUCT_SHOWCASE = [
  {
    label: "TABLY Enterprise",
    heading: "Website management ",
    highlight: "at scale",
    headingEnd: " for hospitality groups.",
    description: "The all-in-one platform helping hospitality groups create and manage content across brand websites, collections and individual venues—at scale.",
    cta: "Explore Enterprise",
    images: ["/product/mobile1.png"],
  },
  {
    label: "TABLY Generator",
    heading: "The ",
    highlight: "fastest",
    headingEnd: " way to get an independent venue website online.",
    description: "Give independent operators a quick, guided way to launch a professional venue website—optimised out of the box for bookings and enquiries.",
    cta: "Explore Website Generator",
    images: ["/product/mobile1.png", "/product/mobile2.png"],
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
  {
    quote: "Placeholder quote — the platform is completely scalable and adding new venues has been effortless as we've grown.",
    name: "Placeholder Name",
    title: "Placeholder Title, Placeholder Group",
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

function Avatar({ name }: { name: string }) {
  return (
    <Box className="w-9 h-9 rounded-full bg-primary/20 text-primary flex items-center justify-center font-heading font-bold text-xs flex-shrink-0">
      {name.split(" ").map((n) => n[0]).join("")}
    </Box>
  );
}

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <Stack gap="lg" className="bg-white/[0.03] border border-white/10 rounded-md p-6 h-full justify-between w-[320px] flex-shrink-0">
      <Text size="body-sm" className="italic text-neutral-300 leading-relaxed">&ldquo;{t.quote}&rdquo;</Text>
      <Flex align="center" gap="sm">
        <Avatar name={t.name} />
        <Stack gap="none">
          <Text size="body-sm" className="font-bold text-white">{t.name}</Text>
          <Text size="body-sm" className="text-neutral-500 text-xs">{t.title}</Text>
        </Stack>
      </Flex>
    </Stack>
  );
}

export default function Products() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handlePlay = () => {
    videoRef.current?.play();
    setIsPlaying(true);
  };

  const activeRole = ROLE_TABS[activeTab] ?? ROLE_TABS[0]!;

  return (
    <main className="bg-warm-white min-h-screen">
      {/* Hero Section — headline, trust logos, and video preview all within one header block */}
      <Section className="relative bg-neutral-950 dark text-white pt-32 pb-16 border-b border-white/5 overflow-hidden" spacing="none">
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
                The platform for managing
                <br />
                <Typewriter words={ROTATING_WORDS} className="text-primary" /> websites.
              </Heading>

              <Text size="body-lg" className="text-neutral-400 max-w-2xl">
                TABLY empowers hospitality with simple, powerful website management products, designed to enhance your digital presence and streamline your operations.
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

          {/* Trust logos */}
          <Reveal delay={0.1}>
            <Stack gap="lg" align="center" className="text-center mt-14">
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-500">Trusted by the UK&apos;s Leading Hospitality Brands</span>
              <Flex wrap="wrap" justify="center" align="center" gap="xl">
                <Flex align="center" gap="xs" className="opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
                  <img src="/images/clients/ivytreeessex.co.uk.png" alt="Ivy Tree Logo" className="h-8 object-contain" />
                  <span className="font-heading font-bold text-sm text-white">Ivy Tree</span>
                </Flex>
                <Flex align="center" gap="xs" className="opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
                  <img src="/images/clients/logo-2-B5td2iVI.png" alt="Otto Kitchen Logo" className="h-8 object-contain" />
                  <span className="font-heading font-bold text-sm text-white">Otto Kitchen</span>
                </Flex>
                <Flex align="center" gap="xs" className="opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
                  <img src="/images/clients/partner-37-C8HQ8M-R.png" alt="Rustiq Logo" className="h-8 object-contain" />
                  <span className="font-heading font-bold text-sm text-white">Rustiq</span>
                </Flex>
              </Flex>
            </Stack>
          </Reveal>

          {/* Hero video preview */}
          <Reveal delay={0.2}>
            <Box
              className="relative rounded-lg overflow-hidden cursor-pointer group mt-14 max-w-5xl mx-auto"
              onClick={!isPlaying ? handlePlay : undefined}
            >
              <Video
                ref={videoRef}
                aspectRatio="video"
                radius="lg"
                muted
                loop
                playsInline
                poster="/product/card1.png"
                className="w-full"
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
              >
                <source src="/product/video.mp4" type="video/mp4" />
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

      {/* Mission + Feature List — merged into one section, matching reference layout */}
      <Section spacing="sm">
        <Container size="wide">
          <Grid columns={1} gap="xl" className="lg:grid-cols-12 items-start">
            <Box className="lg:col-span-5">
              <Reveal>
                <Heading level={2} size="heading-xl" className="leading-tight">
                  On a mission to create leading digital products for <span className="text-primary">hospitality</span>.
                </Heading>
              </Reveal>
            </Box>

            <Box className="lg:col-span-7">
              <Reveal delay={0.1}>
                <Stack gap="md">
                  <Text size="body" className="text-neutral-600 leading-relaxed">
                    TABLY is revolutionising the way hospitality businesses manage their online presence. We want to empower business teams and independent operators with easy to use, flexible and connectable website management tools, enabling them to focus on expanding their reach and delivering exceptional guest experiences.
                  </Text>
                  <Link href="/aboutus" className="inline-flex items-center gap-2 font-heading font-bold text-sm text-neutral-900 hover:text-primary transition-colors duration-200 w-fit">
                    More About Us <span aria-hidden>&rarr;</span>
                  </Link>
                </Stack>
              </Reveal>
            </Box>
          </Grid>

          <Stagger className="mt-16">
            <Grid columns={1} gap="lg" className="md:grid-cols-3">
              {MISSION_ITEMS.map((item) => (
                <StaggerItem key={item.title}>
                  <Stack gap="sm">
                    <Box className="aspect-[4/5] rounded-md overflow-hidden bg-neutral-100">
                      <img src={item.image} alt="" className="w-full h-full object-cover" />
                    </Box>
                    <Heading level={3} size="heading-sm" className="mt-2">{item.title}</Heading>
                    <Text size="body-sm" className="text-neutral-600 leading-relaxed">{item.description}</Text>
                  </Stack>
                </StaggerItem>
              ))}
            </Grid>
          </Stagger>
        </Container>
      </Section>

      {/* Product Showcase — mirroring 24social's Enterprise / My Place split */}
      <Section spacing="sm" className="relative bg-neutral-950 dark text-white overflow-hidden">
        <Blob className="w-[420px] h-[420px] bg-primary top-1/4 -left-32" />
        <Blob className="w-[380px] h-[380px] bg-neutral-500 bottom-0 -right-24" />

        <Container size="wide" className="relative">
          <Stack gap="xl">
            {PRODUCT_SHOWCASE.map((product, idx) => (
              <Reveal key={product.label} delay={idx * 0.1}>
                <Grid columns={1} gap="xl" className="lg:grid-cols-2 items-center">
                  <Stack gap="md" align="start">
                    <Flex align="center" gap="xs">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-primary" aria-hidden>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
                        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                      <span className="text-primary font-heading font-bold text-xs uppercase tracking-wider">{product.label}</span>
                    </Flex>
                    <Heading level={3} size="heading-lg" className="leading-tight">
                      {product.heading}<span className="text-primary">{product.highlight}</span>{product.headingEnd}
                    </Heading>
                    <Text size="body" className="text-neutral-400 leading-relaxed">
                      {product.description}
                    </Text>
                    <Link href="/getintouch" className="inline-flex items-center gap-2 font-heading font-bold text-sm text-white hover:text-primary transition-colors duration-200 mt-1">
                      {product.cta} <span aria-hidden>&rarr;</span>
                    </Link>
                  </Stack>

                  {product.images.length > 1 ? (
                    <div className="relative flex justify-center py-10">
                      <div className="absolute left-6 top-2 w-44 h-44 rounded-full bg-purple-400/20 blur-3xl pointer-events-none" aria-hidden />
                      <div className="absolute left-16 -top-6 w-32 h-32 rounded-full bg-purple-300/15 blur-2xl pointer-events-none" aria-hidden />
                      <HoverScale amount={1.02} className="relative w-full max-w-[440px] aspect-[4/3.4]">
                        <img
                          src={product.images[1]}
                          alt=""
                          className="absolute top-0 right-0 w-[62%] h-auto rotate-[6deg] drop-shadow-2xl"
                        />
                        <img
                          src={product.images[0]}
                          alt={product.label}
                          className="absolute bottom-0 left-0 w-[68%] h-auto -rotate-[3deg] drop-shadow-2xl"
                        />
                      </HoverScale>
                    </div>
                  ) : (
                    <HoverScale amount={1.02} className="flex justify-center">
                      <img
                        src={product.images[0]}
                        alt={product.label}
                        className="w-full max-w-[420px] h-auto object-contain"
                      />
                    </HoverScale>
                  )}
                </Grid>
              </Reveal>
            ))}
          </Stack>
        </Container>
      </Section>

      {/* Empowering Roles Section */}
      <Section spacing="sm" className="bg-neutral-950 dark text-white border-t border-white/5">
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

              <Box className="w-full pt-4 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.3 } }}
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                  >
                    <Grid columns={1} gap="xl" className="lg:grid-cols-2 items-center">
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
                  </motion.div>
                </AnimatePresence>
              </Box>
            </Stack>
          </Reveal>
        </Container>
      </Section>

      {/* Testimonials — infinite marquee, matching the reference's looping card track */}
      <Section spacing="sm" className="bg-neutral-950 dark text-white border-t border-white/5 overflow-hidden">
        <Container size="wide">
          <Reveal>
            <Stack gap="md" align="center" className="text-center mb-12">
              <Heading level={2} size="heading-xl">
                Feedback from industry <span className="text-primary">leaders</span>.
              </Heading>
              <Text size="body" className="text-neutral-400">
                Words from our amazing users who are achieving more with TABLY.
              </Text>
            </Stack>
          </Reveal>
        </Container>

        <div className="testimonial-marquee">
          <div className="testimonial-marquee-track">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
              <TestimonialCard key={idx} t={t} />
            ))}
          </div>
        </div>
      </Section>

      {/* Closing CTA Section — glass card, two-line stacked heading */}
      <Section spacing="sm" className="bg-neutral-950 dark text-white text-center">
        <Container size="wide">
          <Reveal>
            <Box className="max-w-3xl mx-auto bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-sm px-8 py-16">
              <Stack gap="lg" align="center">
                <Heading level={2} size="heading-xl">
                  Book a <span className="text-primary">discovery call</span>
                  <br />
                  for a no-sales chat.
                </Heading>
                <Text size="body-lg" className="text-neutral-400">
                  Our discovery call gives us the opportunity to understand your current business goals and pain points before selling you anything.
                </Text>
                <Box className="pt-2">
                  <Button asChild className="bg-primary hover:bg-[#bd1a1d] text-white rounded-none px-[22px] pt-[15px] pb-[13px] font-bold uppercase tracking-[0.05em] text-[12px] h-auto">
                    <Link href="/getintouch">
                      Book a Discovery Call
                    </Link>
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Reveal>
        </Container>
      </Section>

      {/* Footer attribution note — sits between the page and the global site footer */}
      <Box className="bg-neutral-950 dark text-center py-6 border-t border-white/5">
        <Text size="body-sm" className="text-neutral-500 font-heading uppercase tracking-wider">
          Built by Gourmetica.
        </Text>
      </Box>

      <style jsx>{`
        .testimonial-marquee {
          width: 100%;
          overflow: hidden;
        }

        .testimonial-marquee-track {
          display: flex;
          width: max-content;
          gap: 24px;
          animation: testimonialScroll 45s linear infinite;
        }

        @keyframes testimonialScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </main>
  );
}
