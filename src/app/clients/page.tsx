import type { Metadata } from "next";
import { Container } from "@/core/primitives";
import ClientsShowcase from "./ClientsShowcase";

export const metadata: Metadata = {
  title: "Our Clients",
  description: "Explore the hospitality, retail, and B2B brands that partner with Gourmetica to accelerate their growth."
};

export default function ClientsPage() {
  return (
    <main className="bg-black min-h-screen pb-24" style={{ backgroundColor: "#000000", paddingTop: "8rem", paddingBottom: "6rem" }}>
      <Container size="wide">
        <ClientsShowcase />
      </Container>
    </main>
  );
}
