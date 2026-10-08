"use client";

import React from 'react';
import Link from 'next/link';
import { PackagesProps } from '../../types';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const LotusIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2C12 2 15 5 15 9C15 13 12 15 12 15C12 15 9 13 9 9C9 5 12 2 12 2Z" />
    <path d="M12 15C12 15 18 13 19 9C20 5 15 8 15 8C15 8 17 4 13 4C9 4 12 15 12 15Z" />
    <path d="M12 15C12 15 6 13 5 9C4 5 9 8 9 8C9 8 7 4 11 4C15 4 12 15 12 15Z" />
    <path d="M12 15C12 15 15 17 17 21C18 23 20 22 20 22C20 22 17 18 15 18C13 18 12 15 12 15Z" />
    <path d="M12 15C12 15 9 17 7 21C6 23 4 22 4 22C4 22 7 18 9 18C11 18 12 15 12 15Z" />
    <path d="M7 21C7 21 12 22 17 21" />
  </svg>
);

export default function Packages({ data }: PackagesProps) {
  return (
    <section className="relative h-[400px] lg:h-[450px] flex items-center justify-end overflow-hidden mt-6 lg:mt-10">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={data.image}
          alt="Spa packages banner"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle gradient overlay to ensure text readability on the right */}
        <div className="absolute inset-0 bg-black/40 md:bg-gradient-to-r md:from-black/10 md:via-black/40 md:to-black/70" />
      </div>

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 flex justify-center md:justify-end">
        <div className="w-full md:w-[60%] lg:w-[50%] flex flex-col items-center text-center px-4 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-5"
          >
            <div className="text-[#a4bc8a] mb-2.5">
              <LotusIcon size={30} />
            </div>
            <div className="flex justify-center items-center gap-4 w-full">
              <span className="w-12 sm:w-20 h-[1px] bg-[#a4bc8a] opacity-80"></span>
              <span className="text-[#b2c899] font-medium tracking-[0.2em] text-[13px] sm:text-[14px] uppercase whitespace-nowrap">
                {data.subtitle}
              </span>
              <span className="w-12 sm:w-20 h-[1px] bg-[#a4bc8a] opacity-80"></span>
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[44px] sm:text-[52px] lg:text-[64px] font-medium font-serif text-white mb-6 leading-[1.1] tracking-tight"
          >
            {data.title_line1}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#e2e8db] text-[16px] sm:text-[17px] max-w-lg mx-auto mb-8 leading-relaxed"
          >
            {data.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href={data.button.href}
              className="inline-flex items-center gap-3 bg-[#d2dac0] text-[#1a1f17] px-8 py-3.5 rounded-full text-[15px] font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl group"
            >
              {data.button.text}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
