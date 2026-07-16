"use client";

import Link from "next/link";
import { CLIENTS } from "@/constants/clients";
import { Box, Grid, Flex } from "@/core/primitives";
import { Reveal, Stagger } from "@/core/motion";

export default function ClientsShowcase() {
  return (
    <Box className="w-full bg-black py-8">
      {/* Self-contained logo filters style block */}
      <style>{`
        .client-logo-png {
          filter: brightness(0) invert(1) opacity(0.92);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .group:hover .client-logo-png {
          filter: brightness(0) invert(1) opacity(1);
        }
        .client-logo-jpg {
          filter: invert(1) contrast(140%) brightness(0.8) opacity(0.92);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .group:hover .client-logo-jpg {
          filter: invert(1) contrast(140%) brightness(1.1) opacity(1);
        }
        /* Badge logos whose artwork has a filled background: inverting them
           collapses the badge into a solid disc, so show them as authored. */
        .client-logo-original {
          filter: opacity(0.95);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .group:hover .client-logo-original {
          filter: opacity(1);
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
            const isJpg = client.logo.endsWith('.jpg') || client.logo.endsWith('.jpeg');
            const logoFilterClass = client.keepOriginalColour
              ? 'client-logo-original'
              : isJpg
                ? 'client-logo-jpg'
                : 'client-logo-png';
            return (
              <Reveal key={index} delay={(index % 8) * 0.03}>
                <a
                  href={client.url === "#" ? undefined : client.url}
                  target={client.url === "#" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between items-center aspect-[4/3] bg-[#161618] p-6 transition-all duration-300 hover:bg-[#1c1c1f] hover:scale-[1.03] relative overflow-hidden rounded-xl cursor-pointer"
                >
                  {/* Logo Box */}
                  <Flex align="center" justify="center" className="flex-1 w-full h-full min-h-0 transition-all duration-300">
                    <img
                      src={`/images/clients/${client.logo}`}
                      alt={`${client.name} Logo`}
                      className={`max-h-[75%] max-w-[85%] object-contain transition-all duration-300 group-hover:scale-105 ${logoFilterClass}`}
                    />
                  </Flex>

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
