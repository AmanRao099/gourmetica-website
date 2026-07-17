import type { Metadata } from "next";
import { Container } from "@/core/primitives";
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
    </main>
  );
}
