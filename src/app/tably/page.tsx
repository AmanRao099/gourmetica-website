"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { Section, Container, Grid, Box, Stack } from "@/core/primitives";
import { Heading, Text } from "@/core/typography";
import { Button } from "@/core/components";
import { Video } from "@/core/components/Video";
import { Reveal, Stagger, StaggerItem, HoverScale } from "@/core/motion";
import { cn } from "@/core/utils";
import { CLIENTS } from "@/constants/clients";
import { Typewriter } from "./Typewriter";

/* Client-approved copy — verbatim. Do not add sections beyond the spec:
   Hero → Trust bar → Video → Two-column text → Three features → Closing → Footer. */

const TRUST_BRAND_NAMES = ["Ivy Tree", "Otto Kitchen", "Rustiq"];

/* Single word — typed, held, deleted, retyped in the two-column headline. */
const VENUE_WORDS = ["restaurant"];

const FEATURES = [
  {
    title: "Launch Your Website in Days",
    description: "Get your business online quickly with a professionally designed website—no lengthy development process.",
    image: "/product/card1.jpg",
  },
  {
    title: "Update Your Content in Minutes",
    description: "Easily edit menus, images, events, and pages without any technical knowledge.",
    image: "/product/card2.jpg",
  },
  {
    title: "Designed to Grow Your Business",
    description: "SEO-ready and built to convert visitors into customers.",
    image: "/product/card3.jpg",
  },
];

/**
 * Product video with a scroll-driven expansion: pinned while in view, it
 * interpolates from a contained rounded card to a full-bleed viewport fill,
 * holds full-screen for a beat, then releases. Scroll-linked, so reversing
 * scroll reverses the effect. Mobile (<768px) and prefers-reduced-motion get
 * a static contained block instead — a scroll pin eats too much scroll length
 * on small screens to feel good.
 */
function ScrollExpandVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [animated, setAnimated] = useState(false);
  const reducedMotion = useReducedMotion();
  // Tracks whether the user has started playback, so scroll-in only resumes a
  // video they actually played — it never auto-starts one on its own.
  const wantsPlayRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setAnimated(mq.matches && !reducedMotion);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reducedMotion]);

  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });
  // Spring-smooth the raw progress: wheel scrolling arrives in discrete steps,
  // which otherwise lands as visible size jumps. This keeps the smoothing
  // local to the video (no global scroll-behavior).
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.4 });
  // Expansion completes at 55% progress; the rest of the pin holds full-screen.
  const width = useTransform(smoothProgress, [0, 0.55], ["66vw", "100vw"]);
  const height = useTransform(smoothProgress, [0, 0.55], ["64vh", "100vh"]);
  const borderRadius = useTransform(smoothProgress, [0, 0.55], ["16px", "0px"]);

  const handlePlay = () => {
    if (videoRef.current) {
      // Click is a user gesture, so browsers allow audio: unmute before play.
      videoRef.current.muted = false;
    }
    wantsPlayRef.current = true;
    videoRef.current?.play();
    setIsPlaying(true);
  };

  // Pause the video when it scrolls out of view; resume it when back on screen
  // (only if the user had started it). Re-attaches when the layout branch
  // switches between the animated pin and the static fallback.
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          if (wantsPlayRef.current && el.paused) {
            el.play().catch(() => {});
          }
        } else if (!el.paused) {
          el.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animated]);

  const videoEl = (
    <>
      <Video
        ref={videoRef}
        aspectRatio="auto"
        radius="none"
        loop
        playsInline
        preload="none"
        poster="/product/card1.jpg"
        className="absolute inset-0 w-full h-full object-cover"
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
    </>
  );

  if (!animated) {
    // Static fallback: the previous contained treatment. pinRef must still be
    // attached — useScroll throws if its target ref never hydrates.
    return (
      <div ref={pinRef}>
        <Container size="wide" className="py-14">
          <Box
            className="relative rounded-lg overflow-hidden cursor-pointer group max-w-5xl mx-auto aspect-video"
            onClick={!isPlaying ? handlePlay : undefined}
          >
            {videoEl}
          </Box>
        </Container>
      </div>
    );
  }

  return (
    // No margin here: it would collapse through the parent wrapper and expose
    // a band of the page background between the hero and the video.
    <div ref={pinRef} className="relative h-[240vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ width, height, borderRadius, willChange: "width, height" }}
          className="relative overflow-hidden cursor-pointer group"
          onClick={!isPlaying ? handlePlay : undefined}
        >
          {videoEl}
        </motion.div>
      </div>
    </div>
  );
}

function Blob({ className }: { className: string }) {
  return (
    <div
      className={cn("absolute pointer-events-none opacity-[0.15] blur-2xl", className)}
      style={{ borderRadius: "42% 58% 65% 35% / 45% 40% 60% 55%" }}
      aria-hidden
    />
  );
}

export default function TablyPage() {
  const trustClients = TRUST_BRAND_NAMES
    .map((name) => CLIENTS.find((c) => c.name === name))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <main className="bg-warm-white min-h-screen">
      {/* ── Hero + Trust bar + Video (one dark header block) ── */}
      <Section className="relative bg-neutral-950 dark text-white pt-32 pb-16 border-b border-white/5 overflow-hidden" spacing="none">
        <Blob className="w-[420px] h-[420px] bg-primary -top-24 -left-24" />
        <Blob className="w-[380px] h-[380px] bg-neutral-500 -top-16 -right-16" />
        <Blob className="w-[340px] h-[340px] bg-primary bottom-0 -left-10 translate-y-1/2" />
        <Blob className="w-[380px] h-[380px] bg-neutral-500 bottom-0 -right-16 translate-y-1/3" />

        <Container size="wide" className="relative">
          {/* Hero: headline left, product mockups right */}
          <Reveal>
            <Grid columns={1} gap="xl" className="lg:grid-cols-2 items-center">
              <Stack gap="lg" align="start" className="text-left">
                <img
                  src="/images/tably/tably.png"
                  alt="Tably"
                  className="h-20 w-auto ml-6"
                />
                <Heading level={1} size="display-lg" className="leading-tight">
                  Website Operations Platform
                </Heading>
                <Text size="body-lg" className="text-neutral-400 max-w-xl">
                  Manage content at scale across venues, brands, domains and more.
                </Text>
                <Box className="pt-2 w-full sm:w-auto">
                  <Button asChild className="bg-primary hover:bg-[#bd1a1d] text-white rounded-none px-[22px] pt-[15px] pb-[13px] font-bold uppercase tracking-[0.05em] text-[12px] h-auto min-h-[44px] w-full sm:w-auto">
                    <Link href="/getintouch">
                      Book a Discovery Call
                    </Link>
                  </Button>
                </Box>
              </Stack>

              {/* Product UI on real client sites — dual phone mockups, sized as
                  the hero's centerpiece per client direction */}
              <div className="relative flex justify-center py-6 lg:py-4">
                <div className="absolute left-1/4 top-4 w-56 h-56 rounded-full bg-primary/15 blur-3xl pointer-events-none" aria-hidden />
                <HoverScale amount={1.02} className="relative w-full max-w-[480px] sm:max-w-[560px] lg:max-w-[640px] aspect-[4/3.4]">
                  <img
                    src="/product/mobile2.png"
                    alt="TABLY venue website on mobile"
                    className="absolute top-0 right-0 w-[62%] h-auto rotate-[6deg] drop-shadow-2xl"
                  />
                  <img
                    src="/product/mobile1.png"
                    alt="TABLY gallery page on mobile"
                    className="absolute bottom-0 left-0 w-[68%] h-auto -rotate-[3deg] drop-shadow-2xl"
                  />
                </HoverScale>
              </div>
            </Grid>
          </Reveal>

          {/* Trust bar — shared clients data + shared logo chip component */}
          <Reveal delay={0.1}>
            <Stack gap="lg" align="center" className="text-center mt-14">
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-500 px-5">
                Trusted by the UK&apos;s Leading Hospitality Brands
              </span>
              {/* Logos shown as-is: transparent PNGs, no chip/card and no colour
                  filter, so the artwork blends straight into the dark section.
                  Always one row — on phones the three logos share the width. */}
              <div className="flex flex-row items-center justify-center gap-3 sm:gap-8 w-full px-4 sm:px-5">
                {trustClients.map((client) => {
                  const hasUrl = Boolean(client.url && client.url !== "#");
                  const CardTag = hasUrl ? "a" : "div";
                  return (
                    <CardTag
                      key={client.name}
                      href={hasUrl ? client.url : undefined}
                      target={hasUrl ? "_blank" : undefined}
                      rel={hasUrl ? "noopener noreferrer" : undefined}
                      className="group flex flex-1 sm:flex-none min-w-0 flex-col items-center gap-2"
                    >
                      <img
                        src={`/images/clients/${client.logo}`}
                        alt={`${client.name} Logo`}
                        className="w-full max-w-[160px] h-20 sm:w-60 sm:max-w-none sm:h-32 object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="font-heading font-bold text-[10px] sm:text-xs uppercase tracking-wider text-neutral-500 group-hover:text-white transition-colors duration-200 text-center">
                        {client.name}
                      </span>
                    </CardTag>
                  );
                })}
              </div>
            </Stack>
          </Reveal>

        </Container>
      </Section>

      {/* Video — scroll-driven full-bleed expansion. Lives OUTSIDE the hero
          Section: its overflow-hidden ancestor would disable position:sticky.
          Spacing via padding (not child margins), which can't collapse and
          expose the page background between the dark blocks. */}
      <div className="bg-neutral-950 dark pt-6">
        <ScrollExpandVideo />
      </div>

      {/* ── Two-column text block ── */}
      <Section spacing="sm">
        <Container size="wide">
          <Grid columns={1} gap="xl" className="lg:grid-cols-12 items-start">
            <Box className="lg:col-span-5">
              <Reveal>
                <Heading level={2} size="heading-xl" className="leading-tight">
                  Reimagining how <Typewriter words={VENUE_WORDS} className="text-primary" /> websites are managed.
                </Heading>
              </Reveal>
            </Box>

            <Box className="lg:col-span-7">
              <Reveal delay={0.1}>
                <Text size="body" className="text-neutral-600 leading-relaxed">
                  TABLY is built to simplify how hospitality businesses manage their websites. We believe updating a website should be as easy as updating a social media post. That&apos;s why we&apos;ve created an intuitive platform that gives hospitality teams complete control over their websites, content and digital operations—without relying on developers.
                </Text>
              </Reveal>
            </Box>
          </Grid>

          {/* ── Three feature blocks ── */}
          <Stagger className="mt-16">
            <Grid columns={1} gap="lg" className="md:grid-cols-3">
              {FEATURES.map((feature) => (
                <StaggerItem key={feature.title} className="h-full">
                  <div className="bg-white border border-neutral-200/80 rounded-xl overflow-hidden h-full flex flex-col">
                    {/* Fixed aspect + object-cover keeps all three crops identical */}
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={feature.image}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <Stack gap="sm" className="p-8 flex-1">
                      <span className="block w-10 h-[3px] bg-primary rounded-full mb-1" aria-hidden />
                      <Heading level={3} size="heading-sm">{feature.title}</Heading>
                      <Text size="body-sm" className="text-neutral-600 leading-relaxed">{feature.description}</Text>
                    </Stack>
                  </div>
                </StaggerItem>
              ))}
            </Grid>
          </Stagger>
        </Container>
      </Section>

      {/* ── Closing statement ── */}
      <Section spacing="sm" className="relative bg-neutral-950 dark text-white text-center overflow-hidden">
        <Blob className="w-[380px] h-[380px] bg-primary -bottom-24 -right-24" />
        <Container size="content" className="relative">
          <Reveal>
            <Stack gap="md" align="center">
              <Heading level={2} size="heading-xl">
                The smartest way to manage <span className="text-primary">hospitality</span> websites.
              </Heading>
              <Text size="body-lg" align="center" className="text-neutral-400 mx-auto">
                Manage websites, menus, events, careers and digital content from one intuitive platform—built specifically for restaurants, pubs, hotels and hospitality groups.
              </Text>
            </Stack>
          </Reveal>
        </Container>
      </Section>

      {/* Footer attribution note — sits between the page and the global site footer.
          Text defaults to align="left", so it must be centered explicitly. */}
      <Box className="bg-neutral-950 dark text-center py-6 px-5 border-t border-white/5">
        <Text size="body-sm" align="center" className="text-primary dark:text-primary font-heading uppercase tracking-wider mx-auto">
          Built by Gourmetica.
        </Text>
      </Box>
    </main>
  );
}
