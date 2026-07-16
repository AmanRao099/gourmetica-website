import type { Metadata } from "next";
import { Container, Box } from "@/core/primitives";
import { Text } from "@/core/typography";
import ClientsShowcase from "./ClientsShowcase";

export const metadata: Metadata = {
  title: "Our Clients",
  description: "Explore the hospitality, retail, and B2B brands that partner with Gourmetica to accelerate their growth."
};

export default function ClientsPage() {
  return (
    <main className="bg-black min-h-screen" style={{ backgroundColor: "#000000", paddingTop: "8rem" }}>
      <Container size="wide" className="pb-24">
        <ClientsShowcase />
      </Container>
      <Box className="bg-neutral-950 dark text-center py-6 px-5 border-t border-white/5">
        <Text size="body-sm" align="center" className="text-primary dark:text-primary font-heading uppercase tracking-wider mx-auto">
          Built by Gourmetica.
        </Text>
      </Box>
    </main>
  );
}
