"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BreadcrumbProps {
  title: string;
  breadcrumb: string;
}

export default function Breadcrumb({ title, breadcrumb }: BreadcrumbProps) {
  return (
    <section className="relative h-[260px] lg:h-[300px] flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Header Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#311310]/80 mix-blend-multiply" />
      </div>

      <div className="relative z-10 text-center flex flex-col items-center mt-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-4"
        >
          {title}
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3 text-white/90 text-sm md:text-[15px] tracking-[0.2em] uppercase font-medium"
        >
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <span className="text-[#b66f50]">/</span>
          <span className="text-white">{breadcrumb}</span>
        </motion.div>
      </div>
    </section>
  );
}
