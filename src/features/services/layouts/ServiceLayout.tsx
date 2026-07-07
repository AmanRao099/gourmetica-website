"use client";

import React from 'react';

interface ServiceLayoutProps {
  children: React.ReactNode;
}

export function ServiceLayout({ children }: ServiceLayoutProps) {
  return (
    <div className="services-layout min-h-screen bg-warm-white flex flex-col">
      {children}
    </div>
  );
}
