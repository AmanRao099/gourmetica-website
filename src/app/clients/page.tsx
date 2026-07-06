import type { Metadata } from "next";
import { CLIENTS } from "@/constants/clients";
import { Section, Container, Grid, Stack, Flex } from "@/core/primitives";
import { Heading, Text } from "@/core/typography";
import { Reveal, Stagger, HoverLift } from "@/core/motion";

export const metadata: Metadata = {
  title: "Our Clients",
  description: "Explore the hospitality, retail, and B2B brands that partner with Gourmetica to accelerate their growth."
};

export default function Clients() {
  return (
    <main className="bg-warm-white min-h-screen">
      {/* Hero Header */}
      <Section className="bg-neutral-950 dark text-white pt-32 pb-24 border-b border-white/5" spacing="none">
        <Container size="wide">
          <Reveal>
            <Stack gap="md">
              <Heading level={1} size="display-lg">
                Our Clients
              </Heading>
              <Text size="body-lg" className="text-neutral-400 max-w-2xl">
                From independent venues to multi-location hospitality and B2B brands.
              </Text>
            </Stack>
          </Reveal>
        </Container>
      </Section>

      {/* Grid Showcase */}
      <Section spacing="lg">
        <Container size="wide">
          <Stagger>
            <Grid columns={2} gap="lg" className="md:grid-cols-3 lg:grid-cols-4">
              {CLIENTS.map((client, index) => (
                <Reveal key={index}>
                  <HoverLift>
                    <a 
                      href={client.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group flex flex-col justify-between h-48 bg-white border border-neutral-200/60 p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-lg relative overflow-hidden"
                    >
                      {/* Logo Box */}
                      <Flex align="center" justify="center" className="h-28 w-full opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0">
                        <img 
                          src={`/images/clients/${client.logo}`} 
                          alt={`${client.name} Logo`} 
                          className="max-h-16 max-w-full object-contain"
                        />
                      </Flex>
                      
                      {/* Bottom row: Name and link */}
                      <Flex align="center" justify="between" className="border-t border-neutral-100 pt-3">
                        <span className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-800">{client.name}</span>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                          Visit Site <i className="fa fa-external-link" aria-hidden="true"></i>
                        </span>
                      </Flex>
                    </a>
                  </HoverLift>
                </Reveal>
              ))}
            </Grid>
          </Stagger>
        </Container>
      </Section>
    </main>
  );
}
