"use client";

import React from 'react';
import Link from 'next/link';
import { CTAProps } from '../../types';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA({ data }: CTAProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url('${data.image}')` }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#172111] via-[#172111]/90 to-transparent" />
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-24 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-[650px] text-center lg:text-left"
          >
            <div className="flex justify-center lg:justify-start mb-6 lg:mb-8">
               <span className="w-16 h-[2px] bg-[#d6a655]"></span>
            </div>
            
            <h2 className="text-[38px] md:text-[50px] lg:text-[56px] font-serif leading-[1.15] mb-5 tracking-tight text-white">
              {data.title_line1} <br/>
              <span className="text-[#d6a655]">{data.title_highlight}</span> {data.title_line2}
            </h2>
            
            <p className="text-[#dcdcdc] text-[15px] sm:text-[16.5px] leading-relaxed max-w-[500px] mx-auto lg:mx-0">
              {data.description}
            </p>
          </motion.div>

          {/* Button Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <Link
              href={data.button.href}
              className="inline-flex items-center gap-4 bg-white rounded-full p-2 pl-6 pr-2 hover:scale-105 transition-transform shadow-2xl"
            >
              <CalendarDays className="text-[#354b2d]" size={22} />
              <span className="text-[#2a3c26] font-bold text-[13px] uppercase tracking-wide px-2">
                {data.button.text}
              </span>
              <div className="w-12 h-12 rounded-full bg-[#2a3c26] flex items-center justify-center text-white shrink-0 shadow-inner">
                <ArrowRight size={18} />
              </div>
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
