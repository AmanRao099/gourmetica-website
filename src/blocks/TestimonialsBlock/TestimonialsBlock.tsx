"use client";

import * as React from 'react';
import { PageContainer } from '@/core/primitives';
import { cn } from '@/core/utils';
import { motion } from 'framer-motion';
import { TestimonialsBlockProps, TestimonialItem } from './TestimonialsBlock.types';

export const TestimonialsBlock = React.forwardRef<HTMLDivElement, TestimonialsBlockProps>(
  (
    {
      title,
      subtitle,
      description,
      testimonials,
      layout = 'grid',
      theme = 'light',
      className,
      ...props
    },
    ref
  ) => {
    const renderTestimonial = (testimonial: TestimonialItem, index: number) => {
      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col h-full min-h-[420px] bg-white border border-neutral-200/50 rounded-[24px] p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] justify-between relative overflow-hidden"
        >
          {/* Quote Mark top-left */}
          <div className="absolute top-6 left-8 text-neutral-100 text-[120px] font-serif leading-none select-none pointer-events-none">
            “
          </div>

          <div className="relative z-10 flex flex-col justify-between h-full">
            {/* Rating */}
            {testimonial.rating && (
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg 
                    key={i} 
                    className={cn("w-4 h-4", i < testimonial.rating! ? "text-[#e62656]" : "text-neutral-200")} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            )}
            
            {/* Quote content */}
            <div className="flex-grow mb-8 mt-2">
              <p className="text-[17px] md:text-[18px] text-neutral-800 leading-relaxed font-sans font-medium italic">
                "{testimonial.quote}"
              </p>
            </div>
            
            {/* Footer Zone */}
            <div className="flex items-center justify-between pt-6 border-t border-neutral-100 mt-auto">
              <div className="flex items-center gap-3">
                {testimonial.author.avatar ? (
                  <img 
                    src={testimonial.author.avatar} 
                    alt={testimonial.author.name}
                    className="w-12 h-12 rounded-full object-cover shrink-0" 
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center font-bold text-neutral-600 shrink-0 text-sm">
                    {testimonial.author.name.charAt(0)}
                  </div>
                )}
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-neutral-900 font-sans">
                    {testimonial.author.name}
                  </span>
                  <span className="text-xs text-neutral-500 font-sans mt-0.5">
                    {testimonial.author.role}{testimonial.author.company && `, ${testimonial.author.company}`}
                  </span>
                </div>
              </div>
              
              {/* Company Logo (Right-aligned) */}
              {testimonial.companyLogo && (
                <img 
                  src={testimonial.companyLogo} 
                  alt={testimonial.author.company || 'Company logo'} 
                  className="h-5 w-auto opacity-30 grayscale object-contain" 
                />
              )}
            </div>
          </div>
        </motion.div>
      );
    };

    return (
      <section 
        ref={ref} 
        className={cn('py-40 bg-[#fcfbf9] border-t border-b border-neutral-100/50', className)} 
        {...props}
      >
        <PageContainer size="standard">
          {/* Section Header */}
          {(title || subtitle || description) && (
            <div className="text-center mb-20">
              {subtitle && (
                <p className="text-[10px] md:text-[11px] font-bold text-[#e62656] tracking-[0.25em] uppercase font-sans mb-3">
                  {subtitle}
                </p>
              )}
              {title && (
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-neutral-900 font-sans tracking-tight">
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-neutral-500 font-sans text-base max-w-xl mx-auto mt-4 leading-relaxed">
                  {description}
                </p>
              )}
              <div className="w-12 h-[2px] bg-[#e62656] rounded-full mx-auto mt-6" />
            </div>
          )}

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(renderTestimonial)}
          </div>
        </PageContainer>
      </section>
    );
  }
);
TestimonialsBlock.displayName = 'TestimonialsBlock';
