"use client";

import React, { useState } from 'react';
import { PackageGridProps } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Clock, ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const LotusIconExact = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 19.5 C 9 21.5 15 21.5 18 19.5" />
    <path d="M5 13.5 C 3 12.5 2 12.5 2 12.5 C 2.5 15.5 5 17.5 8 18.5" fill="currentColor" />
    <path d="M19 13.5 C 21 12.5 22 12.5 22 12.5 C 21.5 15.5 19 17.5 16 18.5" fill="currentColor" />
    <path d="M9 10.5 C 6 9 4 9.5 4 9.5 C 4.5 13.5 7 16 10.5 17" fill="currentColor" />
    <path d="M15 10.5 C 18 9 20 9.5 20 9.5 C 19.5 13.5 17 16 13.5 17" fill="currentColor" />
    <path d="M12 2.5 L 9 10.5 C 8.5 13 10 16 12 17 C 14 16 15.5 13 15 10.5 L 12 2.5 Z" fill="currentColor" />
  </svg>
);

export default function PackageGrid({ data }: PackageGridProps) {
  const [activeCategory, setActiveCategory] = useState('All Packages');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (!data || !data.items) return null;

  const filteredItems = activeCategory === 'All Packages'
    ? data.items
    : data.items.filter(item => item.category === activeCategory);

  return (
    <section className="relative overflow-hidden py-8 md:py-12 bg-white">
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center"
        >
          <div className="mb-2 flex items-center justify-center">
            <span className="text-[14px] font-bold uppercase tracking-[0.2em] text-[#6b8c4a]">
              {data.subtitle}
            </span>
          </div>

          <h2 className="mb-3 text-[40px] sm:text-[48px] font-serif leading-tight text-[#2d3a24]">
            {data.title}
          </h2>

          <div className="mb-4 flex items-center justify-center gap-3 text-[#b9c8a9]">
            <span className="h-[1px] w-12 bg-[#b9c8a9]" />
            <LotusIconExact size={22} className="text-[#6b8c4a]" />
            <span className="h-[1px] w-12 bg-[#b9c8a9]" />
          </div>

          <p className="mx-auto max-w-[650px] text-[16px] leading-[1.6] text-stone-500">
            {data.description}
          </p>
        </motion.div>

        {/* Filters */}
        {/* Mobile Dropdown */}
        <div className="w-full max-w-xs mx-auto mb-8 md:hidden relative z-30">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between bg-[#f5f8ef] border border-[#eef2e6] text-[#485f38] font-medium text-[15px] py-3.5 pl-6 pr-5 rounded-full shadow-sm outline-none"
          >
            {activeCategory}
            <ChevronDown size={18} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-[#e4eadb] overflow-hidden origin-top"
              >
                {data.categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-6 py-3.5 text-[15px] transition-colors ${
                      activeCategory === category 
                        ? 'bg-[#485f38] text-white font-medium' 
                        : 'text-[#646f5e] hover:bg-[#f5f8ef] hover:text-[#485f38]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-3 mb-6">
          {data.categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 border ${activeCategory === category
                  ? 'bg-[#485f38] text-white border-[#485f38] shadow-md'
                  : 'bg-white text-[#485f38] border-[#e4eadb] hover:bg-[#f4f7f0]'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Package Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="flex flex-col bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative group"
              >
                {/* Most Popular Badge */}
                {item.mostPopular && (
                  <div className="absolute top-4 right-4 z-10 bg-[#7a2c2c] text-white text-[12px] font-medium px-4 py-1.5 rounded-full shadow-md tracking-wide">
                    Most Popular
                  </div>
                )}

                {/* Image Area */}
                <div className="h-[220px] w-full relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content Area */}
                <div className="flex-1 flex flex-col p-6 sm:p-8">
                  <h3 className="text-[20px] font-serif text-[#121826] mb-3 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mb-6 flex items-baseline gap-2">
                    <span className="text-[32px] font-bold text-[#2d3a24] tracking-tight">{item.price}</span>
                    <span className="text-[14px] text-gray-500">/ Session</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-[#6b8c4a] mt-0.5 flex-shrink-0" />
                        <span className="text-[14px] text-gray-700 leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <div className="bg-[#f4f7f0] rounded-full py-2.5 px-4 flex items-center justify-center gap-2 mb-4 text-[#485f38]">
                      <Clock size={16} />
                      <span className="text-[13px] font-medium">Duration: {item.duration}</span>
                    </div>

                    <Link
                      href="#book"
                      className="flex items-center justify-center gap-2 w-full bg-[#485f38] text-white py-3.5 rounded-full text-[14px] font-medium hover:bg-[#3a4d2c] transition-colors shadow-md hover:shadow-lg"
                    >
                      Book Now
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
