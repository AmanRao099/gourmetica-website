import type { Metadata } from "next";
import { Section, Container, Stack, Box } from "@/core/primitives";
import { Heading, Text } from "@/core/typography";
import { Reveal, Stagger } from "@/core/motion";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Gourmetica's philosophy, expertise, and dedication to helping UK hospitality brands scale sustainably."
};

export default function AboutUs() {
  return (
    <main className="bg-[#fafaf9] min-h-screen pb-24" style={{ backgroundColor: "#fafaf9", paddingTop: "8rem", paddingBottom: "6rem" }}>
      <Container size="wide">
        <Box 
          className="mx-auto bg-white border border-neutral-200/50 rounded-sm shadow-sm p-6 md:p-12 lg:p-16"
          style={{ 
            maxWidth: "1140px", 
            backgroundColor: "#ffffff", 
            marginTop: "20px" 
          }}
        >
          {/* Title Header */}
          <Box className="text-center mb-12" style={{ marginBottom: "3rem" }}>
            <Heading level={1} className="font-mont font-black text-[32px] md:text-[37px] text-neutral-900 tracking-tight max-w-none uppercase">
              About Us
            </Heading>
          </Box>

          {/* Main Content Section */}
          <Stagger>
            <Stack gap="md" className="mb-16" style={{ marginBottom: "4rem", gap: "1.5rem" }}>
              <Reveal>
                <Text size="body" className="text-neutral-800 leading-relaxed text-justify max-w-none" style={{ fontSize: "17px" }}>
                  At Gourmetica, we understand the unique needs of the hospitality industry. Our team has over 10 years of experience in this sector, meaning we deeply understand how to create copy that effectively engages your audience. We combine persuasive language with data-driven insights to help you create compelling content that resonates with your guests and drives more revenue for your business. With our help, you can stand out in the competitive hospitality market and increase your ROI.
                </Text>
              </Reveal>
              <Reveal delay={0.05}>
                <Text size="body" className="text-neutral-800 leading-relaxed text-justify max-w-none" style={{ fontSize: "17px" }}>
                  By prioritizing repeat business, we help you build a solid foundation of loyal customers who become an integral part of your success story. Through strategic marketing initiatives, we aim to inspire customer loyalty, driving increased visit frequency, higher average spend, and a positive word-of-mouth ripple effect that extends your reach far beyond traditional marketing channels.
                </Text>
              </Reveal>
              <Reveal delay={0.1}>
                <Text size="body" className="text-neutral-800 leading-relaxed text-justify max-w-none" style={{ fontSize: "17px" }}>
                  At Gourmetica, we preserve the significance of the repeat customers' contribution over sustaining and growing your business. Based on our expertise in the UK hospitality industry, we are thoroughly performing most effective and optimized marketing strategies in order to captivate the target audience and elevate the product value all time.
                </Text>
              </Reveal>
              <Reveal delay={0.15}>
                <Text size="body" className="text-neutral-800 leading-relaxed text-justify max-w-none" style={{ fontSize: "17px" }}>
                  We have the privilege of collaborating with numerous establishments in the dynamic and lucrative hospitality sector. We make some special offers in national holidays, bank holidays and special occasions. In addition to that, share some limited time offers within unrivaled techniques to propel your business in this digital transformation journey.
                </Text>
              </Reveal>
              <Reveal delay={0.2}>
                <Text size="body" className="text-neutral-800 leading-relaxed text-justify max-w-none" style={{ fontSize: "17px" }}>
                  Arrange a call with us and let's start a digital transformation journey in your business right now. You provide the business goals and statements, and we'll bring out the branding, business growth and expert level of sales generation for your business instantly.
                </Text>
              </Reveal>
            </Stack>
          </Stagger>

          {/* Strategic Values */}
          <Stack gap="lg" style={{ gap: "2rem" }}>
            <Reveal>
              <Stack gap="sm" style={{ gap: "0.75rem" }}>
                <Heading level={2} className="text-primary font-mont font-bold text-[22px] md:text-[26px] tracking-tight max-w-none" style={{ color: "#E42528" }}>
                  Strategic outlook and solution oriented
                </Heading>
                <Text size="body" className="text-neutral-800 leading-relaxed text-justify max-w-none" style={{ fontSize: "17px" }}>
                  Our approach to marketing is holistic. As everything is interconnected, it must be understood from the ground up, recognising all the moving parts and how they need to be connected.
                </Text>
                <Text size="body" className="text-neutral-800 leading-relaxed text-justify max-w-none" style={{ fontSize: "17px" }}>
                  We track the entire customer experience from the first click of an ad to the moment they are dining at the restaurant for instance. Diving further into this, we can identify aspects of the business model that are working and what isn't and identify any missed opportunities. From here, we can put a plan into place to address those issues.
                </Text>
              </Stack>
            </Reveal>

            <Reveal delay={0.05}>
              <Stack gap="sm" style={{ gap: "0.75rem" }}>
                <Heading level={2} className="text-primary font-mont font-bold text-[22px] md:text-[26px] tracking-tight max-w-none" style={{ color: "#E42528" }}>
                  Expertise and speed
                </Heading>
                <Text size="body" className="text-neutral-800 leading-relaxed text-justify max-w-none" style={{ fontSize: "17px" }}>
                  We have successfully developed many businesses from the ground up and identified all the weaknesses and found solutions to fast track success. It has taken years for us to get here.
                </Text>
                <Text size="body" className="text-neutral-800 leading-relaxed text-justify max-w-none" style={{ fontSize: "17px" }}>
                  Because of that experience, we can foresee and identify any issues before they arise and prevent them from escalating. We have a wealth of proven strategies to drive business with a track record to back this.
                </Text>
              </Stack>
            </Reveal>

            <Reveal delay={0.1}>
              <Stack gap="sm" style={{ gap: "0.75rem" }}>
                <Heading level={2} className="text-primary font-mont font-bold text-[22px] md:text-[26px] tracking-tight max-w-none" style={{ color: "#E42528" }}>
                  We are personally invested
                </Heading>
                <Text size="body" className="text-neutral-800 leading-relaxed text-justify max-w-none" style={{ fontSize: "17px" }}>
                  We take pride in the level of service we provide. Through word of mouth alone we have attracted clients wanting to work with us because of the high standards we set.
                </Text>
                <Text size="body" className="text-neutral-800 leading-relaxed text-justify max-w-none" style={{ fontSize: "17px" }}>
                  So any business we take on is one we feel personally responsible for as it has our name associated with it. This is a responsibility we take very seriously which is why we become so personally invested, treating your business like our own and going above and beyond for you.
                </Text>
              </Stack>
            </Reveal>
          </Stack>
        </Box>
      </Container>
    </main>
  );
}
