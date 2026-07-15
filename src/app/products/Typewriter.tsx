"use client";

import { useEffect, useState } from "react";
import { cn } from "@/core/utils";

interface TypewriterProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  holdDelay?: number;
}

export function Typewriter({
  words,
  className,
  typingSpeed = 80,
  deletingSpeed = 40,
  holdDelay = 1500,
}: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");

  useEffect(() => {
    const currentWord = words[wordIndex] ?? "";

    if (phase === "typing") {
      if (text.length < currentWord.length) {
        const t = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeed);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("holding"), holdDelay);
      return () => clearTimeout(t);
    }

    if (phase === "holding") {
      const t = setTimeout(() => setPhase("deleting"), holdDelay);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (text.length > 0) {
        const t = setTimeout(() => setText(text.slice(0, -1)), deletingSpeed);
        return () => clearTimeout(t);
      }
      setWordIndex((i) => (i + 1) % words.length);
      setPhase("typing");
    }
  }, [text, phase, wordIndex, words, typingSpeed, deletingSpeed, holdDelay]);

  return (
    <span className={cn("inline-flex items-baseline", className)}>
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-current" style={{ height: "0.9em" }} aria-hidden />
    </span>
  );
}
