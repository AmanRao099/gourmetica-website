"use client";

import Link from "next/link";
import { CLIENTS } from "@/constants/clients";
import { Box, Grid, Flex } from "@/core/primitives";
import { Reveal, Stagger } from "@/core/motion";
import { ClientLogoChip } from "@/core/components/ClientLogoChip";

export default function ClientsShowcase() {
  return (
    <Box className="w-full bg-black py-8">
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
                    <ClientLogoChip
                      logo={client.logo}
                      name={client.name}
                      className="flex-1 w-full min-h-0 mb-4 rounded-lg p-4"
                      imgClassName="group-hover:scale-105"
                    />
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
