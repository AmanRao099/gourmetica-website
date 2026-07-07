"use client";

import * as React from 'react';
import { PageContainer } from '@/core/primitives';
import { cn } from '@/core/utils';
import { motion } from 'framer-motion';
import { MetricsBlockProps, MetricItem } from './MetricsBlock.types';

export const MetricsBlock = React.forwardRef<HTMLDivElement, MetricsBlockProps>(
  (
    {
      title,
      subtitle,
      description,
      metrics,
      theme = 'light',
      columns = 3,
      className,
      ...props
    },
    ref
  ) => {
    const renderMetric = (metric: MetricItem, index: number) => {
      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col items-center text-center px-4"
        >
          {/* Dominant Number 72px */}
          <span className="text-[64px] md:text-[72px] font-extrabold text-neutral-900 font-sans tracking-tight leading-none">
            {metric.value}
          </span>
          
          {/* Label 18px */}
          <span className="text-[17px] md:text-[18px] font-bold text-neutral-800 font-sans mt-4">
            {metric.label}
          </span>
          
          {/* Description 15px */}
          {metric.description && (
            <p className="text-[14px] md:text-[15px] text-neutral-500 font-sans leading-relaxed mt-2 max-w-[28ch]">
              {metric.description}
            </p>
          )}
        </motion.div>
      );
    };

    return (
      <section
        ref={ref}
        className={cn('py-40 bg-[#f5f5f4] border-t border-b border-neutral-200/50', className)}
        {...props}
      >
        <PageContainer size="standard">
          {/* Section Header */}
          {(title || subtitle) && (
            <div className="text-center mb-20">
              {subtitle && (
                <p className="text-[10px] md:text-[11px] font-bold text-[#e62656] tracking-[0.25em] uppercase font-sans mb-3">
                  {subtitle}
                </p>
              )}
              {title && (
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight font-sans">
                  {title}
                </h2>
              )}
              <div className="w-12 h-[2px] bg-[#e62656] rounded-full mx-auto mt-6" />
            </div>
          )}

          {/* Metrics Row (3-column layout) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
            {metrics.map(renderMetric)}
          </div>

          {/* Thin Divider */}
          <div className="w-full h-[1px] bg-neutral-300/60 my-16" />

          {/* Supporting Text */}
          {description && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[15px] md:text-[16px] text-neutral-500 font-sans max-w-2xl mx-auto text-center leading-relaxed"
            >
              {description}
            </motion.p>
          )}
        </PageContainer>
      </section>
    );
  }
);
MetricsBlock.displayName = 'MetricsBlock';
