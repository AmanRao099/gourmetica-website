"use client";

import { useEffect } from "react";

/* Stylesheets that are non-critical for first paint: injecting them after
   hydration removes render-blocking cross-origin round-trips from the
   critical path. The hero/headline font (Eina) is self-hosted via next/font
   and unaffected; body text renders with the fallback stack, then swaps. */
const DEFERRED_STYLESHEETS = [
  "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800;900&family=Open+Sans:wght@400;500;600&family=Raleway:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
];

export default function DeferredStyles() {
  useEffect(() => {
    for (const href of DEFERRED_STYLESHEETS) {
      if (document.querySelector(`link[href="${href}"]`)) continue;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }
  }, []);

  return null;
}
