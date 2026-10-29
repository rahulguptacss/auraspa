"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQProps } from '@/components/types';

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

export default function FAQ({ data }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-10 md:py-16 bg-[#fbf7f5] relative overflow-hidden scroll-mt-20" id="faqs">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <img src="/img/sectionbg.webp" alt="" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,248,246,0.85),rgba(237,245,241,0.95))]" />
        <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#e5d3cc]/50 blur-3xl" />
        <div className="absolute -right-10 bottom-8 h-64 w-64 rounded-full bg-[#b66f50]/15 blur-3xl" />
      </div>

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header section */}
        <div className="text-center mb-8 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 font-bold text-[#b66f50] uppercase tracking-[0.2em] text-[13px] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#b66f50]" />
            {data.subtitle}
          </div>
          <h2 className="text-[44px] md:text-[56px] font-serif text-[#2b120f] leading-[1.1] mb-5 tracking-tight">
            {data.title_line1} <span className="text-[#4a211c]">{data.title_highlight}</span>
          </h2>
          
          <div className="flex items-center justify-center gap-3 mb-3 w-full max-w-[500px]">
            <span className="w-16 h-[1px] bg-[#b66f50]"></span>
            <LotusIcon size={24} className="text-[#b66f50]" />
            <span className="w-16 h-[1px] bg-[#b66f50]"></span>
          </div>

          <p className="text-[#69524d] text-[16px] md:text-[18px] leading-relaxed max-w-[700px] mx-auto">
            {data.description}
          </p>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-3">
          {data.questions.map((item, index) => {
            const isActive = openIndex === index;
            
            return (
              <div 
                key={index} 
                className="overflow-hidden transition-all duration-300"
              >
                {/* Header Row */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full flex items-center justify-between p-5 text-left transition-colors duration-300 cursor-pointer ${
                    isActive 
                      ? "bg-[#4a211c] text-white rounded-t-[12px]" 
                      : "bg-white text-[#2b120f] border border-[#e5d3cc]/60 rounded-[12px] hover:bg-[#f6ece8]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-[14px] ${
                      isActive ? "bg-white/20 text-white" : "bg-[#4a211c] text-white"
                    }`}>
                      ?
                    </div>
                    <span className="font-bold text-[15px] sm:text-[16px] leading-tight pr-4">
                      {item.q}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-[18px] font-bold ${
                    isActive ? "bg-[#b66f50] text-white" : "bg-[#f6ece8] text-[#4a211c]"
                  }`}>
                    {isActive ? "-" : "+"}
                  </div>
                </button>

                {/* Body Content */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="bg-white text-[#69524d] p-6 text-[15px] leading-[1.6] rounded-b-[12px] border-x border-b border-[#e5d3cc]/60">
                        <div className="pl-12">
                          {item.a}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
