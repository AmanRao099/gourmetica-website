"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CLIENTS } from "@/constants/clients";
import { Box, Grid, Flex } from "@/core/primitives";
import { Reveal, Stagger } from "@/core/motion";

/**
 * Decides which chip a logo will actually read on. Light artwork (white or
 * pale-gray marks made for dark sites) needs a dark chip; dark artwork gets a
 * white chip. For opaque files the background (sampled from the corners) is
 * excluded so a white canvas doesn't masquerade as light artwork.
 */
function useLogoTone(src: string): "light" | "dark" {
  const [tone, setTone] = useState<"light" | "dark">("dark");

  useEffect(() => {
    let active = true;
    const img = new Image();
    // NB: img.decode() is deliberately avoided — with ~37 logos mounting at once
    // Chromium rejects part of the decode queue and the tone silently stays at
    // the default. onload + drawImage has no such limit.
    img.onload = () => {
      if (!active) return;
      try {
        const size = 48;
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(img, 0, 0, size, size);
        const d = ctx.getImageData(0, 0, size, size).data;

        const total = size * size;
        let visible = 0;
        let lumaSum = 0;
        for (let i = 0; i < d.length; i += 4) {
          if (d[i + 3]! > 25) {
            visible++;
            lumaSum += 0.2126 * d[i]! + 0.7152 * d[i + 1]! + 0.0722 * d[i + 2]!;
          }
        }
        // Opaque files bring their own background — a dark chip would just frame
        // a light rectangle, so they always stay on the white chip.
        if (visible / total > 0.98 || visible === 0) return;
        if (lumaSum / visible > 175) setTone("light");
      } catch {
        /* keep the safe default */
      }
    };
    img.src = src;
    return () => {
      active = false;
    };
  }, [src]);

  return tone;
}

function ClientLogoChip({ logo, name }: { logo: string; name: string }) {
  const tone = useLogoTone(`/images/clients/${logo}`);
  return (
    <Flex
      align="center"
      justify="center"
      className={`flex-1 w-full min-h-0 mb-4 rounded-lg p-4 transition-all duration-300 ${
        tone === "light" ? "bg-[#26262b] border border-white/10" : "bg-white"
      }`}
    >
      <img
        src={`/images/clients/${logo}`}
        alt={`${name} Logo`}
        className="client-logo-img max-h-full max-w-[82%] object-contain group-hover:scale-105"
      />
    </Flex>
  );
}

export default function ClientsShowcase() {
  return (
    <Box className="w-full bg-black py-8">
      {/* Logos render in natural colors on a white chip inside the dark card.
          The old brightness(0)/invert(1) white-out required transparent PNGs and
          flattened every opaque-background file into a gray box — this treatment
          has no such failure mode. Muted grayscale by default, brand color on hover. */}
      <style>{`
        .client-logo-img {
          filter: grayscale(1);
          opacity: 0.85;
          transition: filter 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .group:hover .client-logo-img {
          filter: grayscale(0);
          opacity: 1;
        }
      `}</style>

      {/* Giant Title Header */}
      <Box className="w-full text-left mb-16" style={{ marginBottom: "4rem", marginTop: "2rem" }}>
        <Reveal>
          <h1
            className="font-mont font-black uppercase text-white leading-none tracking-tighter text-[72px] sm:text-[100px] md:text-[140px] lg:text-[180px] xl:text-[220px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Clients
          </h1>
        </Reveal>
      </Box>

      {/* Grid Showcase — full roster, no pagination gate */}
      <Stagger>
        <Grid columns={2} gap="sm" className="md:grid-cols-3 lg:grid-cols-4" style={{ gap: "20px" }}>
          {CLIENTS.map((client, index) => {
            return (
              <Reveal key={index} delay={(index % 8) * 0.03}>
                <a
                  href={client.url === "#" ? undefined : client.url}
                  target={client.url === "#" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between items-center aspect-[4/3] bg-[#161618] p-5 transition-all duration-300 hover:bg-[#1c1c1f] hover:scale-[1.03] relative overflow-hidden rounded-xl cursor-pointer"
                >
                  {/* Logo chip — tone-aware surface (white for dark artwork, dark
                      for white artwork) so any file reads. Clients without a
                      supplied logo yet get a name-only tile. */}
                  {client.logo ? (
                    <ClientLogoChip logo={client.logo} name={client.name} />
                  ) : (
                    <Flex align="center" justify="center" className="flex-1 w-full min-h-0 mb-4 rounded-lg border border-white/10">
                      <span className="font-heading font-bold text-lg uppercase tracking-wider text-white/40 text-center px-2 transition-all duration-300 group-hover:text-white/60">
                        {client.name}
                      </span>
                    </Flex>
                  )}

                  {/* Bottom row: Name & Label */}
                  <Flex align="center" justify="center" className="border-t border-neutral-900/40 w-full pt-3 relative h-5 shrink-0">
                    <span className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-400 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-1">
                      {client.name}
                    </span>
                    <span
                      className="absolute font-heading font-extrabold text-[11px] uppercase tracking-wider transition-all duration-300 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 flex items-center gap-1"
                      style={{ color: "#E42528" }}
                    >
                      Visit Website ↗
                    </span>
                  </Flex>
                </a>
              </Reveal>
            );
          })}
        </Grid>
      </Stagger>

      {/* Oversized closing CTA — echoes the giant title treatment */}
      <Reveal className="mt-24 pt-16 border-t border-neutral-900/60" style={{ marginTop: "6rem", paddingTop: "3rem", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
        <Link href="/getintouch" className="group block w-full text-left">
          <h2
            className="font-mont font-black uppercase text-white leading-none tracking-tighter text-[48px] sm:text-[72px] md:text-[100px] lg:text-[130px] transition-colors duration-300 group-hover:text-primary"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Get In Touch
          </h2>
        </Link>
      </Reveal>
    </Box>
  );
}
