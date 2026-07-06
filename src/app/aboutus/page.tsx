import type { Metadata } from "next";
import Link from "next/link";
import { Section, Container, Grid, Stack, Box } from "@/core/primitives";
import { Heading, Text } from "@/core/typography";
import { Button } from "@/core/components";
import { Reveal, Stagger, HoverLift } from "@/core/motion";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Gourmetica's philosophy, expertise, and dedication to helping UK hospitality and B2B brands scale sustainably."
};

export default function AboutUs() {
  return (
    <main className="bg-warm-white min-h-screen">
      {/* Hero Header */}
      <Section className="bg-neutral-950 dark text-white pt-32 pb-24 border-b border-white/5" spacing="none">
        <Container size="wide">
          <Reveal>
            <Stack gap="md">
              <Heading level={1} size="display-lg">
                About Us
              </Heading>
              <Text size="body-lg" className="text-neutral-400 max-w-2xl">
                Our philosophy, our expertise, and our commitment to your growth.
              </Text>
            </Stack>
          </Reveal>
        </Container>
      </Section>

      {/* Main Philosophy Section */}
      <Section spacing="lg">
        <Container size="wide">
          <Grid columns={1} gap="xl" className="lg:grid-cols-12 items-start">
            <Box className="lg:col-span-5">
              <Reveal>
                <Stack gap="md">
                  <Heading level={2} size="heading-xl" className="max-w-[14ch]">
                    Building Foundations For Long-Term Success
                  </Heading>
                  <Box className="w-12 h-1 bg-primary" />
                </Stack>
              </Reveal>
            </Box>
            
            <Box className="lg:col-span-7">
              <Reveal delay={0.1}>
                <Stack gap="lg">
                  <Text size="body-lg" className="font-semibold text-neutral-800 leading-relaxed">
                    At Gourmetica, we understand the unique needs of the hospitality and service industries. Our team has over 10 years of experience in this sector, meaning we deeply understand how to create marketing campaigns and copy that effectively engage your audience.
                  </Text>
                  <Text size="body" className="text-neutral-600 leading-relaxed">
                    We combine persuasive messaging with data-driven insights to help you create compelling content that resonates with your guests and drives more revenue for your business. With our help, you can stand out in the competitive UK market and increase your ROI.
                  </Text>
                  <Text size="body" className="text-neutral-600 leading-relaxed">
                    By prioritizing repeat business, we help you build a solid foundation of loyal customers who become an integral part of your success story. Through strategic marketing initiatives, we aim to inspire customer loyalty, driving increased visit frequency, higher average spend, and a positive word-of-mouth ripple effect that extends your reach far beyond traditional marketing channels.
                  </Text>
                  <Text size="body" className="text-neutral-600 leading-relaxed">
                    We have the privilege of collaborating with numerous establishments in the dynamic and lucrative hospitality and B2B sectors. We implement optimized marketing strategies to captivate your target audience, elevate product value, and scale your operations sustainably.
                  </Text>
                </Stack>
              </Reveal>
            </Box>
          </Grid>
        </Container>
      </Section>

      {/* Core Values Section */}
      <Section spacing="lg" className="bg-stone border-y border-neutral-200/40">
        <Container size="wide">
          <Reveal className="mb-16">
            <Stack gap="md" align="center" className="text-center">
              <Heading level={2} size="heading-lg">
                Why Partners Choose Gourmetica
              </Heading>
              <Text size="body-lg" className="text-neutral-500 max-w-2xl">
                Our core operating values guide how we work and deliver results for our clients.
              </Text>
            </Stack>
          </Reveal>

          <Stagger>
            <Grid columns={1} gap="lg" className="md:grid-cols-3">
              {/* Value Card 1 */}
              <Reveal>
                <HoverLift>
                  <Box className="bg-white border border-neutral-200/50 p-8 h-full rounded-md shadow-sm">
                    <Box className="w-12 h-12 bg-primary/10 text-primary rounded-md flex items-center justify-center text-xl mb-6">
                      <i className="fa fa-line-chart" aria-hidden="true"></i>
                    </Box>
                    <Heading level={3} size="heading-sm" className="mb-4">
                      Strategic Outlook & Solution Oriented
                    </Heading>
                    <Text size="body-sm" className="text-neutral-600 leading-relaxed">
                      Our approach to marketing is holistic. As everything is interconnected, it must be understood from the ground up, recognizing all moving parts and how they connect. We track the entire customer experience—from the first click of an ad to the moment they dine at the restaurant or purchase a product—identifying missed opportunities and resolving operational blockages.
                    </Text>
                  </Box>
                </HoverLift>
              </Reveal>

              {/* Value Card 2 */}
              <Reveal>
                <HoverLift>
                  <Box className="bg-white border border-neutral-200/50 p-8 h-full rounded-md shadow-sm">
                    <Box className="w-12 h-12 bg-primary/10 text-primary rounded-md flex items-center justify-center text-xl mb-6">
                      <i className="fa fa-bolt" aria-hidden="true"></i>
                    </Box>
                    <Heading level={3} size="heading-sm" className="mb-4">
                      Expertise & Speed
                    </Heading>
                    <Text size="body-sm" className="text-neutral-600 leading-relaxed">
                      We have successfully developed many businesses from the ground up, identifying weaknesses and implementing fast-track solutions. Because of our experience, we foresee issues before they arise, preventing them from escalating. We apply a wealth of proven, benchmarked strategies to drive quick wins alongside long-term scaling.
                    </Text>
                  </Box>
                </HoverLift>
              </Reveal>

              {/* Value Card 3 */}
              <Reveal>
                <HoverLift>
                  <Box className="bg-white border border-neutral-200/50 p-8 h-full rounded-md shadow-sm">
                    <Box className="w-12 h-12 bg-primary/10 text-primary rounded-md flex items-center justify-center text-xl mb-6">
                      <i className="fa fa-users" aria-hidden="true"></i>
                    </Box>
                    <Heading level={3} size="heading-sm" className="mb-4">
                      We Are Personally Invested
                    </Heading>
                    <Text size="body-sm" className="text-neutral-600 leading-relaxed">
                      We take pride in the high standards we set, attracting clients primarily through word of mouth. Any business we take on is one we feel personally responsible for. We treat your business like our own, integrating as an extension of your internal team and going above and beyond to ensure your ambitions are met.
                    </Text>
                  </Box>
                </HoverLift>
              </Reveal>
            </Grid>
          </Stagger>
        </Container>
      </Section>

      {/* CTA Footer */}
      <Section spacing="xl" className="bg-neutral-950 dark text-white">
        <Container size="wide">
          <Reveal>
            <Stack gap="lg" align="center" className="text-center max-w-3xl mx-auto">
              <Heading level={2} size="heading-xl">
                Let&apos;s Start Your Transformation Journey
              </Heading>
              <Text size="body-lg" className="text-neutral-400">
                You provide the business goals and statements, and we&apos;ll bring the branding, web development, and sales generation systems.
              </Text>
              <Box className="pt-4">
                <Button asChild className="bg-primary hover:bg-[#bd1a1d] text-white rounded-none px-[22px] pt-[15px] pb-[13px] font-bold uppercase tracking-[0.05em] text-[12px] h-auto">
                  <Link href="/getintouch">
                    Arrange A Discovery Call
                  </Link>
                </Button>
              </Box>
            </Stack>
          </Reveal>
        </Container>
      </Section>
    </main>
  );
}
