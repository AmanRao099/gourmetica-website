"use client";

import { useState, type FormEvent } from "react";
import { Section, Container, Grid, Box, Stack, Flex } from "@/core/primitives";
import { Heading, Text } from "@/core/typography";
import { Button } from "@/core/components";
import { Reveal } from "@/core/motion";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function GetInTouch() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          phone: data.get("phone"),
          website: data.get("website"),
          message: data.get("message"),
        }),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const body = await res.json().catch(() => null);
        setErrorMessage(body?.error ?? "Something went wrong. Please try again or email info@gourmetica.co.uk.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error — please check your connection and try again, or email info@gourmetica.co.uk.");
      setStatus("error");
    }
  };

  return (
    <main className="bg-warm-white min-h-screen">
      {/* Hero Header */}
      <Section className="bg-neutral-950 dark text-white pt-32 pb-24 border-b border-white/5" spacing="none">
        <Container size="wide">
          <Reveal>
            <Stack gap="md">
              <Heading level={1} size="display-lg">
                Book A Discovery Call
              </Heading>
              <Text size="body-lg" className="text-neutral-400 max-w-2xl">
                Ready to scale your business? Let&apos;s build a marketing strategy that delivers.
              </Text>
            </Stack>
          </Reveal>
        </Container>
      </Section>

      {/* Main Grid */}
      <Section spacing="lg">
        <Container size="wide">
          <Grid columns={1} gap="xl" className="lg:grid-cols-12 items-start">
            
            {/* Left Column: Contact info */}
            <Box className="lg:col-span-5">
              <Reveal>
                <Stack gap="md">
                  <Heading level={2} size="heading-xl">
                    Contact Details
                  </Heading>
                  <Box className="w-12 h-1 bg-primary mb-2" />
                  
                  <Text size="body" className="text-neutral-600 leading-relaxed mb-8">
                    Have questions about our growth services, pricing, or past client stories? We&apos;d love to hear from you. Fill out our booking form or reach out directly via phone or email.
                  </Text>

                  <Stack gap="lg" className="mb-12">
                    {/* Detail Item 1 */}
                    <Flex align="center" gap="md" className="group">
                      <Box className="w-12 h-12 bg-primary/10 text-primary rounded-md flex items-center justify-center text-xl transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                      </Box>
                      <Stack gap="none">
                        <span className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-400">Phone</span>
                        <a href="tel:+447826597767" className="font-heading font-bold text-neutral-800 hover:text-primary transition-colors">
                          +44 7826 597767
                        </a>
                      </Stack>
                    </Flex>

                    {/* Detail Item 2 */}
                    <Flex align="center" gap="md" className="group">
                      <Box className="w-12 h-12 bg-primary/10 text-primary rounded-md flex items-center justify-center text-xl transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                      </Box>
                      <Stack gap="none">
                        <span className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-400">Email</span>
                        <a href="mailto:info@gourmetica.co.uk" className="font-heading font-bold text-neutral-800 hover:text-primary transition-colors lowercase">
                          info@gourmetica.co.uk
                        </a>
                      </Stack>
                    </Flex>

                    {/* Detail Item 3 */}
                    <Flex align="center" gap="md" className="group">
                      <Box className="w-12 h-12 bg-primary/10 text-primary rounded-md flex items-center justify-center text-xl transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                      </Box>
                      <Stack gap="none">
                        <span className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-400">Office</span>
                        <span className="font-body text-sm font-semibold text-neutral-800">
                          Aldwych House, 71-91 Aldwych, London, WC2B 4HN
                        </span>
                      </Stack>
                    </Flex>
                  </Stack>

                  <Stack gap="sm">
                    <span className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-400">Follow Our Journey</span>
                    <Flex gap="sm">
                      <a 
                        href="https://www.facebook.com/gourmeticauk/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-neutral-100 text-neutral-600 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                      <a 
                        href="https://www.linkedin.com/company/gourmeticauk" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-neutral-100 text-neutral-600 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                      <a 
                        href="https://www.instagram.com/gourmetica.agency/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-neutral-100 text-neutral-600 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </Flex>
                  </Stack>
                </Stack>
              </Reveal>
            </Box>

            {/* Right Column: Booking Form */}
            <Box className="lg:col-span-7">
              <Reveal delay={0.1}>
                <Box className="bg-white border border-neutral-200/60 p-8 rounded-md shadow-sm">
                  <Heading level={3} size="heading-md" className="mb-2">
                    Schedule A Consultation
                  </Heading>
                  <Text size="body-sm" className="text-neutral-500 mb-8">
                    Provide your details below and a strategist will connect within 24 hours.
                  </Text>

                  {status === "success" && (
                    <Box className="mb-6 rounded-md border border-green-200 bg-green-50 px-5 py-4" role="status">
                      <Text size="body-sm" className="font-semibold text-green-800">
                        Thank you — your request has been sent. A strategist will be in touch within 24 hours.
                      </Text>
                    </Box>
                  )}
                  {status === "error" && (
                    <Box className="mb-6 rounded-md border border-red-200 bg-red-50 px-5 py-4" role="alert">
                      <Text size="body-sm" className="font-semibold text-red-800">
                        {errorMessage}
                      </Text>
                    </Box>
                  )}

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <Grid columns={1} gap="md" className="sm:grid-cols-2">
                      <Stack gap="xs">
                        <label htmlFor="first_name" className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-700">First Name *</label>
                        <input 
                          type="text" 
                          id="first_name"
                          name="firstName"
                          required 
                          placeholder="John" 
                          className="border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all rounded-sm px-4 py-3 w-full bg-stone/20 text-neutral-800 placeholder-neutral-400 font-body text-sm font-semibold"
                        />
                      </Stack>
                      <Stack gap="xs">
                        <label htmlFor="last_name" className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-700">Last Name *</label>
                        <input 
                          type="text" 
                          id="last_name"
                          name="lastName"
                          required 
                          placeholder="Doe" 
                          className="border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all rounded-sm px-4 py-3 w-full bg-stone/20 text-neutral-800 placeholder-neutral-400 font-body text-sm font-semibold"
                        />
                      </Stack>
                    </Grid>

                    <Stack gap="xs">
                      <label htmlFor="email" className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-700">Email Address *</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required 
                        placeholder="john.doe@company.com" 
                        className="border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all rounded-sm px-4 py-3 w-full bg-stone/20 text-neutral-800 placeholder-neutral-400 font-body text-sm font-semibold"
                      />
                    </Stack>

                    <Stack gap="xs">
                      <label htmlFor="phone" className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-700">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        required 
                        placeholder="+44 7123 456789" 
                        className="border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all rounded-sm px-4 py-3 w-full bg-stone/20 text-neutral-800 placeholder-neutral-400 font-body text-sm font-semibold"
                      />
                    </Stack>

                    <Stack gap="xs">
                      <label htmlFor="website" className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-700">Website / Company name</label>
                      <input 
                        type="text" 
                        id="website"
                        name="website"
                        placeholder="www.mybusiness.com" 
                        className="border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all rounded-sm px-4 py-3 w-full bg-stone/20 text-neutral-800 placeholder-neutral-400 font-body text-sm font-semibold"
                      />
                    </Stack>

                    <Stack gap="xs">
                      <label htmlFor="message" className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-700">How can we help your business? *</label>
                      <textarea 
                        id="message"
                        name="message"
                        rows={5}
                        required 
                        placeholder="Tell us about your business goals, current bottlenecks, and what services you are interested in..."
                        className="border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all rounded-sm px-4 py-3 w-full bg-stone/20 text-neutral-800 placeholder-neutral-400 font-body text-sm font-semibold resize-none"
                      />
                    </Stack>

                    <Button
                      type="submit"
                      disabled={status === "submitting"}
                      className="bg-primary hover:bg-[#bd1a1d] text-white rounded-none px-[22px] pt-[15px] pb-[13px] font-bold uppercase tracking-[0.05em] text-[12px] h-auto w-full disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? "Sending…" : "Book A Call"}
                    </Button>
                  </form>
                </Box>
              </Reveal>
            </Box>

          </Grid>
        </Container>
      </Section>
    </main>
  );
}
