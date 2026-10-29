"use client";

import React, { useState } from 'react';
import { VideoPromoProps } from '../../types';
import { Play, X, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const StonesIconOutline = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="18.5" rx="7.5" ry="3" />
    <ellipse cx="12" cy="13.5" rx="6" ry="2.5" />
    <ellipse cx="12" cy="9.5" rx="4.5" ry="2" />
    <ellipse cx="12" cy="6" rx="3" ry="1.5" />
  </svg>
);

const LotusIconOutline = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 19.5 C 9 21.5 15 21.5 18 19.5" />
    <path d="M5 13.5 C 3 12.5 2 12.5 2 12.5 C 2.5 15.5 5 17.5 8 18.5" />
    <path d="M19 13.5 C 21 12.5 22 12.5 22 12.5 C 21.5 15.5 19 17.5 16 18.5" />
    <path d="M9 10.5 C 6 9 4 9.5 4 9.5 C 4.5 13.5 7 16 10.5 17" />
    <path d="M15 10.5 C 18 9 20 9.5 20 9.5 C 19.5 13.5 17 16 13.5 17" />
    <path d="M12 2.5 L 9 10.5 C 8.5 13 10 16 12 17 C 14 16 15.5 13 15 10.5 L 12 2.5 Z" />
  </svg>
);

const iconMap: Record<string, React.ReactNode> = {
  Leaf: <Leaf className="text-[#4a211c]" size={30} strokeWidth={1.5} />,
  Lotus: <LotusIconOutline className="text-[#4a211c]" size={32} />,
  Database: <StonesIconOutline className="text-[#4a211c]" size={30} />,
};

export default function VideoPromo({ data }: VideoPromoProps) {
  const [open, setOpen] = useState(false);
  const videoSrc = `https://www.youtube.com/embed/${data.video_id}?autoplay=1`;

  return (
    <section className="relative py-8 flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <img
          src={data.image}
          alt="Video Promo Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-[#311310]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-[#311310]/40 to-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Header Elements */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-2"
        >
          <span className="text-[#b66f50] font-bold tracking-[0.25em] text-[12px] uppercase mb-4 block">
            {data.subtitle}
          </span>
          
          <div className="flex justify-center items-center gap-3 mb-3">
            <span className="w-10 h-[1px] bg-[#b66f50]"></span>
            <LotusIconOutline className="text-[#b66f50]" size={20} />
            <span className="w-10 h-[1px] bg-[#b66f50]"></span>
          </div>

          <h2 className="text-[36px] sm:text-[42px] md:text-[50px] font-serif text-white mb-2 leading-tight max-w-[700px] mx-auto">
            {data.title_line1}
          </h2>
          
          <p className="text-white/90 max-w-2xl mx-auto text-[15px] sm:text-[16px] leading-[1.6]">
            {data.description}
          </p>
        </motion.div>

        {/* Video Play Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center mb-4"
        >
          <div 
            className="relative w-[76px] h-[76px] rounded-full bg-black/30 backdrop-blur-[2px] border border-white/20 flex items-center justify-center cursor-pointer group hover:bg-black/40 transition-all" 
            onClick={() => setOpen(true)}
          >
            <div className="absolute inset-0 rounded-full animate-ping opacity-0 group-hover:opacity-10 transition-opacity bg-white"></div>
            <div className="w-[52px] h-[52px] bg-[#b66f50] group-hover:bg-[#c77c5d] rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300">
              <Play size={20} className="ml-1" fill="currentColor" strokeWidth={1} />
            </div>
          </div>
          
          <span className="mt-3 text-[11px] font-bold tracking-[0.25em] text-[#b66f50] uppercase">
            WATCH OUR SPA VIDEO
          </span>
        </motion.div>

        {/* Features Row */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-4 gap-x-2 w-full relative">
            {data.features.map((feature, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="flex flex-col items-center gap-3 sm:gap-4 relative md:border-r border-white/20 last:border-r-0 group cursor-pointer"
              >
                <div className="w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] bg-white/95 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                  {iconMap[feature.icon]}
                </div>
                <span className="text-white/80 group-hover:text-white text-[12px] sm:text-[14px] font-medium tracking-wide text-center px-2">
                  {feature.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          >
            <button className="absolute right-6 top-6 text-white/80 hover:text-white transition-colors" onClick={() => setOpen(false)}>
              <X size={36} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10"
            >
              <iframe
                className="w-full h-full"
                src={videoSrc}
                title="Promo Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
