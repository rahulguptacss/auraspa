"use client";

import React, { useState } from 'react';
import { GalleryProps } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ChevronDown } from 'lucide-react';

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

export default function Gallery({ data }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!data || !data.items) return null;

  const filteredItems = activeCategory === 'All' 
    ? data.items 
    : data.items.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <section className="relative overflow-hidden py-12 md:py-16 bg-white">
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center"
        >
          <div className="mb-1 flex items-center justify-center">
            <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#849a75]">
              {data.subtitle}
            </span>
          </div>

          <h2 className="mb-2 text-[38px] sm:text-[46px] font-serif leading-tight text-[#1c2417]">
            {data.title}
          </h2>
          
          <div className="mb-3 flex items-center justify-center gap-3 text-[#b9c8a9]">
            <span className="h-[1px] w-12 bg-[#b9c8a9]" />
            <LotusIconExact size={22} className="text-[#849a75]" />
            <span className="h-[1px] w-12 bg-[#b9c8a9]" />
          </div>

          <p className="mx-auto max-w-[600px] text-[15px] leading-[1.6] text-stone-500">
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
                      setLightboxIndex(null);
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
        <div className="hidden md:flex flex-wrap items-center justify-center gap-3 mb-8">
          {data.categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setLightboxIndex(null);
              }}
              className={`px-6 py-2.5 rounded-full text-[13px] font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#485f38] text-white shadow-md'
                  : 'bg-[#f4f7f0] text-[#121826] hover:bg-[#e4eadb]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="w-full h-[240px] rounded-[16px] overflow-hidden shadow-sm relative group cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.category} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 rounded-full p-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#485f38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 sm:right-8 sm:top-8 z-50 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              <X size={32} />
            </button>

            <button
              onClick={showPrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center rounded-full bg-black/50 text-white/70 hover:bg-black/80 hover:text-white transition-all border border-white/10 backdrop-blur-md"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={showNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center rounded-full bg-black/50 text-white/70 hover:bg-black/80 hover:text-white transition-all border border-white/10 backdrop-blur-md"
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -20 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-h-full max-w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].category}
                className="max-h-[85vh] max-w-[85vw] object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-[-40px] left-0 right-0 text-center text-white/80 text-sm font-medium">
                {filteredItems[lightboxIndex].category} • {lightboxIndex + 1} / {filteredItems.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
