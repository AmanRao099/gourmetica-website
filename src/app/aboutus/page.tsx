import type { Metadata } from "next";
import { PageContainer } from "@/core/primitives";
import { SplitBackgroundBlock } from "@/blocks";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Gourmetica's philosophy, expertise, and dedication to helping UK hospitality brands scale sustainably."
};

const INTRO_PARAGRAPHS = [
  "At Gourmetica, we understand the unique needs of the hospitality industry. Our team has over 10 years of experience in this sector, meaning we deeply understand how to create copy that effectively engages your audience. We combine persuasive language with data-driven insights to help you create compelling content that resonates with your guests and drives more revenue for your business. With our help, you can stand out in the competitive hospitality market and increase your ROI.",
  "By prioritizing repeat business, we help you build a solid foundation of loyal customers who become an integral part of your success story. Through strategic marketing initiatives, we aim to inspire customer loyalty, driving increased visit frequency, higher average spend, and a positive word-of-mouth ripple effect that extends your reach far beyond traditional marketing channels.",
  "At Gourmetica, we preserve the significance of the repeat customers' contribution over sustaining and growing your business. Based on our expertise in the UK hospitality industry, we are thoroughly performing most effective and optimized marketing strategies in order to captivate the target audience and elevate the product value all time.",
  "We have the privilege of collaborating with numerous establishments in the dynamic and lucrative hospitality sector. We make some special offers in national holidays, bank holidays and special occasions. In addition to that, share some limited time offers within unrivaled techniques to propel your business in this digital transformation journey.",
  "Arrange a call with us and let's start a digital transformation journey in your business right now. You provide the business goals and statements, and we'll bring out the branding, business growth and expert level of sales generation for your business instantly.",
];

const VALUE_SECTIONS = [
  {
    heading: "Strategic outlook and solution oriented",
    paragraphs: [
      "Our approach to marketing is holistic. As everything is interconnected, it must be understood from the ground up, recognising all the moving parts and how they need to be connected.",
      "We track the entire customer experience from the first click of an ad to the moment they are dining at the restaurant for instance. Diving further into this, we can identify aspects of the business model that are working and what isn't and identify any missed opportunities. From here, we can put a plan into place to address those issues.",
    ],
  },
  {
    heading: "Expertise and speed",
    paragraphs: [
      "We have successfully developed many businesses from the ground up and identified all the weaknesses and found solutions to fast track success. It has taken years for us to get here.",
      "Because of that experience, we can foresee and identify any issues before they arise and prevent them from escalating. We have a wealth of proven strategies to drive business with a track record to back this.",
    ],
  },
  {
    heading: "We are personally invested",
    paragraphs: [
      "We take pride in the level of service we provide. Through word of mouth alone we have attracted clients wanting to work with us because of the high standards we set.",
      "So any business we take on is one we feel personally responsible for as it has our name associated with it. This is a responsibility we take very seriously which is why we become so personally invested, treating your business like our own and going above and beyond for you.",
    ],
  },
];

export default function AboutUs() {
  return (
    <main className="min-h-screen">
      <section className="w-full bg-white pt-[110px] pb-[60px] md:pt-[140px] md:pb-[70px]">
        <PageContainer size="standard" className="text-center">
          <h1 className="font-heading font-bold uppercase text-black text-[28px] md:text-[33px] lg:text-[37px]">
            About Us
          </h1>
        </PageContainer>
      </section>

      <SplitBackgroundBlock>
        <PageContainer size="standard" className="pb-[100px] md:pb-[140px] flex flex-col gap-14">
          <div className="flex flex-col gap-5">
            {INTRO_PARAGRAPHS.map((paragraph, index) => (
              <p key={index} className="text-[15px] md:text-[16px] leading-[1.7] text-black text-justify">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-10">
            {VALUE_SECTIONS.map((section, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h2 className="font-heading font-bold text-primary text-[20px] md:text-[22px] lg:text-[26px]">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-[15px] md:text-[16px] leading-[1.7] text-black text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </PageContainer>
      </SplitBackgroundBlock>
    </main>
  );
}
