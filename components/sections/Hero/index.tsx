"use client";

import React from 'react';
import { HeroProps } from '../../types';
import { motion } from 'framer-motion';

export default function Hero({ data }: HeroProps) {
  const slide = data.slides[0];

  return (
    <section id="home" className="relative h-[75vh] min-h-[480px] sm:h-screen sm:min-h-[600px] flex items-center justify-center pt-24 sm:pt-20 pb-12 sm:pb-0 scroll-mt-24">
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
          {slide.title_line1} <span className="text-white md:text-[#b66f50]">{slide.title_highlight}</span> <br className="sm:hidden" /> {slide.title_line2}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-[22px] text-white/90 max-w-3xl mx-auto font-light leading-relaxed"
        >
          {slide.description}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          {slide.primary_button && (
            <a
              href={slide.primary_button.href || '#book'}
              className="inline-flex items-center justify-center rounded-full bg-[#b66f50] px-7 sm:px-8 py-3.5 text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-[#c77c5d] hover:scale-105 active:scale-95 cursor-pointer"
            >
              {slide.primary_button.text}
            </a>
          )}
          {slide.secondary_button && (
            <a
              href={slide.secondary_button.href || '#services'}
              className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/10 backdrop-blur-xs px-7 sm:px-8 py-3.5 text-[13px] sm:text-[14px] font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-[#311310] hover:scale-105 active:scale-95 cursor-pointer"
            >
              {slide.secondary_button.text}
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
