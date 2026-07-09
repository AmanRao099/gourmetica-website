"use client";

import { useState } from "react";
import { CLIENTS } from "@/constants/clients";
import { Box, Grid, Flex } from "@/core/primitives";
import { Text } from "@/core/typography";
import { Button } from "@/core/components";
import { Reveal, Stagger } from "@/core/motion";

export default function ClientsShowcase() {
  const [showAll, setShowAll] = useState(false);

  const initialClients = CLIENTS.slice(0, 28);
  const remainingClients = CLIENTS.slice(28);

  return (
    <Box className="w-full bg-black py-8">
      {/* Self-contained logo filters style block */}
      <style>{`
        .client-logo-png { 
          filter: brightness(0) invert(1) opacity(0.65); 
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); 
        }
        .group:hover .client-logo-png { 
          filter: brightness(0) invert(1) opacity(1); 
        }
        .client-logo-jpg { 
          filter: invert(1) contrast(140%) brightness(0.8) opacity(0.65); 
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); 
        }
        .group:hover .client-logo-jpg { 
          filter: invert(1) contrast(140%) brightness(1.1) opacity(1); 
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

      {/* Grid Showcase */}
      <Stagger>
        <Grid columns={2} gap="sm" className="md:grid-cols-3 lg:grid-cols-4" style={{ gap: "8px" }}>
          {initialClients.map((client, index) => {
            const isJpg = client.logo.endsWith('.jpg') || client.logo.endsWith('.jpeg');
            return (
              <Reveal key={index}>
                <a 
                  href={client.url === "#" ? undefined : client.url} 
                  target={client.url === "#" ? undefined : "_blank"} 
                  rel="noopener noreferrer" 
                  className="group flex flex-col justify-between items-center aspect-[4/3] bg-[#121212] p-6 transition-all duration-300 hover:bg-[#161616] hover:scale-[1.03] relative overflow-hidden rounded-sm cursor-pointer"
                >
                  {/* Logo Box */}
                  <Flex align="center" justify="center" className="flex-1 w-full h-full min-h-0 transition-all duration-300">
                    <img 
                      src={`/images/clients/${client.logo}`} 
                      alt={`${client.name} Logo`} 
                      className={`max-h-[55%] max-w-[70%] object-contain transition-all duration-300 group-hover:scale-105 ${isJpg ? 'client-logo-jpg' : 'client-logo-png'}`}
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

          {/* Dynamically reveal remaining clients */}
          {showAll && remainingClients.map((client, index) => {
            const isJpg = client.logo.endsWith('.jpg') || client.logo.endsWith('.jpeg');
            return (
              <Reveal key={index + 28} delay={index * 0.03}>
                <a 
                  href={client.url === "#" ? undefined : client.url} 
                  target={client.url === "#" ? undefined : "_blank"} 
                  rel="noopener noreferrer" 
                  className="group flex flex-col justify-between items-center aspect-[4/3] bg-[#121212] p-6 transition-all duration-300 hover:bg-[#161616] hover:scale-[1.03] relative overflow-hidden rounded-sm cursor-pointer"
                >
                  {/* Logo Box */}
                  <Flex align="center" justify="center" className="flex-1 w-full h-full min-h-0 transition-all duration-300">
                    <img 
                      src={`/images/clients/${client.logo}`} 
                      alt={`${client.name} Logo`} 
                      className={`max-h-[55%] max-w-[70%] object-contain transition-all duration-300 group-hover:scale-105 ${isJpg ? 'client-logo-jpg' : 'client-logo-png'}`}
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

      {/* View All Clients Section */}
      {!showAll && (
        <Reveal className="mt-16 text-center" style={{ marginTop: "4.5rem" }}>
          <Box className="pt-8 border-t border-neutral-900/60" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
            <Button 
              onClick={() => setShowAll(true)}
              className="bg-primary hover:bg-[#bd1a1d] text-white rounded-none px-[34px] py-[18px] font-bold uppercase tracking-[0.05em] text-[12px] h-auto"
            >
              View All Clients
            </Button>
          </Box>
        </Reveal>
      )}
    </Box>
  );
}
