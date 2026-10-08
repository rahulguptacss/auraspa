"use client";

import React from 'react';
import Link from 'next/link';
import { HeroProps } from '../../types';
import { Flower, ArrowRight, Check, Settings } from 'lucide-react';
import { FaCalendar, FaLeaf } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Hero({ data }: HeroProps) {
  const slide = data.slides[0];

  return (
    <section className="relative h-[75vh] min-h-[480px] sm:h-screen sm:min-h-[600px] flex items-center justify-center pt-24 sm:pt-20 pb-12 sm:pb-0">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/bannervideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 text-center mt-12">
        {/* Top Ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center mb-1"
        >
          <img src={data.ornament_image} alt="Ornament" className="h-16 w-auto object-contain" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-4"
        >
          {slide.title_line1} <span className="text-white md:text-[#d7ad64]">{slide.title_highlight}</span> <br className="sm:hidden" /> {slide.title_line2}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-[22px] text-white/90 max-w-3xl mx-auto mb-8 font-light leading-relaxed"
        >
          {slide.description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full max-w-sm mx-auto sm:max-w-none"
        >
          <Link
            href={slide.primary_button.href}
            className="flex items-center justify-center gap-2 bg-[#f0c166] text-[#293623] w-full sm:w-auto px-6 py-3.5 rounded-[12px] text-[14px] font-bold uppercase tracking-wider hover:bg-[#e0b257] transition-colors"
          >
            {slide.primary_button.text}
            <ArrowRight size={18} />
          </Link>
          
          <Link
            href={slide.secondary_button.href}
            className="flex items-center justify-center gap-2 border border-white text-white w-full sm:w-auto px-6 py-3.5 rounded-[12px] text-[14px] font-bold uppercase tracking-wider hover:bg-white hover:text-[#293623] transition-colors"
          >
            <Check size={18} strokeWidth={3} />
            {slide.secondary_button.text}
          </Link>
        </motion.div>

        {/* Special Offer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center justify-center gap-2 text-white/90 text-[14px] sm:text-[15px] font-medium tracking-wide mt-2"
        >
          <Settings size={18} className="text-white" />
          <span>{slide.info_line}</span>
        </motion.div>
      </div>
    </section>
  );
}
