'use client';

import * as React from 'react';
import Link from 'next/link';
import { PageContainer } from '@/core/primitives';
import { motion } from 'framer-motion';
import { 
  LineChart, 
  Star, 
  Globe, 
  Search, 
  Share2, 
  Camera, 
  BarChart, 
  Mail, 
  MessageSquare, 
  MapPin, 
  BookOpen,
  ArrowRight
} from 'lucide-react';

interface ServiceItemData {
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
  href: string;
}

const servicesList: ServiceItemData[] = [
  {
    title: 'Strategy',
    desc: 'Tailored growth planning to penetrate your target areas, build customer volume, and align marketing channels with sustainable business metrics.',
    icon: LineChart,
    href: '/#strategy'
  },
  {
    title: 'Branding',
    desc: 'Indelible brand identities, typography systems, premium logo designs, and graphic assets that separate your establishment from the competition.',
    icon: Star,
    href: '/#branding'
  },
  {
    title: 'Website Design & Dev',
    desc: 'High-performance, conversion-focused websites featuring exceptional UI/UX, fast loads, and custom menu reservation integrations.',
    icon: Globe,
    href: '/#webdesigndevelopment'
  },
  {
    title: 'Search Engine Optimization',
    desc: 'Meticulous optimization strategies designed to rank your business for high-intent queries, turning local searchers into dining guests.',
    icon: Search,
    href: '/#seo'
  },
  {
    title: 'Social Media Management',
    desc: 'Leveraging Facebook, Instagram, and TikTok to tell your restaurant’s story, showcase menus, and engage your local community.',
    icon: Share2,
    href: '/#socialmedia'
  },
  {
    title: 'Photography',
    desc: 'Editorial food, architectural interior, and lifestyle brand photography that brings your culinary experience to life on screen.',
    icon: Camera,
    href: '/#photography'
  },
  {
    title: 'Paid Advertising',
    desc: 'Targeted Google Ads, local search ads, and Meta PPC campaigns configured to capture customers exactly when they are ready to book.',
    icon: BarChart,
    href: '/#advertising'
  },
  {
    title: 'Email Marketing',
    desc: 'Nurture guest relationships via automated newsletters, birthday rewards, and exclusive campaign updates that drive repeat visits.',
    icon: Mail,
    href: '/#email'
  },
  {
    title: 'Reputation Management',
    desc: 'Review generation systems on Google & TripAdvisor, citation checks, and professional sentiment responses that build guest trust.',
    icon: MessageSquare,
    href: '/#reputation'
  },
  {
    title: 'Google Maps Optimization',
    desc: 'Elevating map visibility, managing review collection loops, and setting up local business hooks to dominate near-me searches.',
    icon: MapPin,
    href: '/#gmb'
  },
  {
    title: 'Event Marketing',
    desc: 'Creation, promotion, and execution of seasonal campaigns, menu launch parties, and special events to spark instant foot traffic.',
    icon: BookOpen,
    href: '/#events'
  }
];

export function ServicesAccordion() {
  return (
    <section className="py-40 bg-[#fcfbf9] border-b border-neutral-100/50" id="services">
      <PageContainer size="standard">
        {/* Section Header */}
        <div className="max-w-[580px] mb-20">
          <p className="text-[10px] md:text-[11px] font-bold text-[#e62656] tracking-[0.25em] uppercase font-sans mb-3">
            Our Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 font-sans tracking-tight leading-[1.05]">
            Marketing Services
          </h2>
          <div className="w-12 h-[2px] bg-[#e62656] mt-6" />
        </div>

        {/* Services Grid (Staggered Animations) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <Link 
                  href={service.href}
                  className="group flex flex-col h-full bg-white rounded-[24px] border border-neutral-200/50 p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:border-[#e62656]"
                >
                  {/* Icon Wrapper inside 64px circle with Stone background */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-stone-100 transition-transform duration-500 group-hover:rotate-6">
                    <Icon className="w-6 h-6 text-neutral-800 transition-colors duration-300 group-hover:text-[#e62656]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-neutral-900 font-sans tracking-tight mt-8 mb-4">
                    {service.title}
                  </h3>

                  {/* Description Paragraph */}
                  <p className="text-neutral-500 font-sans text-[15px] leading-relaxed max-w-[34ch] mb-8">
                    {service.desc}
                  </p>

                  {/* Spacer to push Learn More link to absolute bottom */}
                  <div className="flex-grow" />

                  {/* Learn More Arrow Link */}
                  <div className="inline-flex items-center gap-2 text-sm font-bold text-[#e62656] group-hover:text-[#bd1a1d] transition-colors duration-300 mt-4">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
