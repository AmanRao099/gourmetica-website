import type { ReactNode } from "react";
import type { Metadata } from "next";

/* page.tsx is a client component, so the route's metadata lives here. */
export const metadata: Metadata = {
  title: "Tably",
  description:
    "Tably by Gourmetica — the website operations platform for hospitality. Manage content at scale across venues, brands, domains and more.",
};

export default function TablyLayout({ children }: { children: ReactNode }) {
  return children;
}
