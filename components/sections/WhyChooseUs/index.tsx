"use client";

import React from 'react';
import { FeatureProps } from '../../types';
import { motion } from 'framer-motion';

const UsersIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const LotusIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22v-3" />
    <path d="M12 19c-3.3 0-6-2.7-6-6 0-3 2-6 6-9 4 3 6 6 6 9 0 3.3-2.7 6-6 6z" />
    <path d="M6 13c-2.8 0-5-2.2-5-5 0-2.5 2-5 5-7 3 2 5 4.5 5 7 0 2.8-2.2 5-5 5z" />
    <path d="M18 13c2.8 0 5-2.2 5-5 0-2.5-2-5-5-7-3 2-5 4.5-5 7 0 2.8-2.2 5-5 5z" />
  </svg>
);

const CalendarStarIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M10.5 14L12 12.5 13.5 14l1.5-3-3 1-3-1z" />
    <circle cx="12" cy="15" r="3" />
  </svg>
);

const SmileIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);

const LeafIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 22l8.5-8.5" />
  </svg>
);

const iconMap: Record<string, React.ReactNode> = {
  Users: <UsersIcon size={22} />,
  Lotus: <LotusIcon size={22} />,
  CalendarStar: <CalendarStarIcon size={26} />,
  Smile: <SmileIcon size={26} />,
  Leaf: <LeafIcon size={26} />,
};

export default function WhyChooseUs({ data }: FeatureProps) {
  return (
    <section className="py-12 lg:py-16 bg-[#fcfdfa] relative overflow-hidden">
      {/* Background Decoratives */}
      <div className="absolute left-8 lg:left-16 bottom-8 lg:bottom-12 z-0 opacity-40">
        <svg width="120" height="120" viewBox="0 0 100 100" className="text-[#a1b894]">
          <pattern id="dotPattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="2.5" fill="currentColor" />
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#dotPattern)" />
        </svg>
      </div>

      <div className="absolute -left-20 top-[15%] z-0 opacity-[0.06] pointer-events-none -rotate-12">
        <svg width="400" height="500" viewBox="0 0 24 24" fill="currentColor" className="text-[#485f38]">
          <path d="M12 21 C12 21 3 15 3 8 C3 4 12 2 12 2 C12 2 21 4 21 8 C21 15 12 21 12 21 Z" />
          <path d="M12 21 L12 2" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>
      
      <div className="absolute right-0 top-0 z-0 opacity-[0.04] pointer-events-none rotate-45 transform translate-x-1/2 -translate-y-1/4">
        <svg width="600" height="600" viewBox="0 0 24 24" fill="currentColor" className="text-[#485f38]">
          <path d="M12 21 C12 21 3 15 3 8 C3 4 12 2 12 2 C12 2 21 4 21 8 C21 15 12 21 12 21 Z" />
        </svg>
      </div>

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row gap-10 md:gap-12 lg:gap-16 items-stretch">
          
          {/* Content Left - Images */}
          <div className="w-full lg:w-[45%] relative flex justify-start items-center pt-8 pb-16 lg:py-0">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-[90%] md:w-[85%] h-[350px] sm:h-[450px] lg:h-[550px] z-10 ml-4 sm:ml-8 lg:ml-12"
            >
              <img src={data.image1} alt="Spa Relaxation" className="w-full h-full object-cover rounded-[24px] lg:rounded-3xl shadow-sm" />
            </motion.div>
            
            {/* Overlapping Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute right-0 -bottom-8 lg:-bottom-12 w-[65%] sm:w-[60%] h-[220px] sm:h-[280px] lg:h-[320px] z-20 border-[6px] sm:border-[8px] lg:border-[12px] border-[#fcfdfa] rounded-[24px] lg:rounded-3xl overflow-hidden shadow-sm"
            >
              <img src={data.image2} alt="Spa Massage" className="w-full h-full object-cover" />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute left-0 lg:-left-2 top-[15%] lg:top-[25%] z-30 bg-[#61744e] text-white p-5 lg:p-7 rounded-[20px] shadow-xl flex flex-col items-center text-center w-[140px] lg:w-[155px]"
            >
              <LotusIcon size={38} className="mb-3 opacity-95" />
              <span className="text-[11px] lg:text-[12px] font-medium tracking-wide leading-tight mb-2 opacity-90">Providing<br/>Wellness Since</span>
              <span className="text-3xl lg:text-[34px] font-bold tracking-tight">{data.badge_year}</span>
            </motion.div>
          </div>

          {/* Content Right - Text & Features */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center mt-12 lg:mt-0">
            {/* Subtitle */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#f9fbf6] border border-[#e8efe2] shadow-sm px-4 py-[6px] rounded-full self-start mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#516b41]"></span>
              <span className="text-[#516b41] font-bold text-[14px] tracking-wide capitalize">
                {data.subtitle.toLowerCase()}
              </span>
            </motion.div>
            
            {/* Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[36px] md:text-[42px] lg:text-[46px] font-medium font-serif text-[#1a1f17] leading-[1.15] mb-6 tracking-tight"
            >
              {data.title_line1} <br className="hidden sm:block" />
              <span className="text-[#516b41]">{data.title_highlight}</span> and <span className="text-[#516b41]">{data.title_line2.replace(/and/i, '').trim()}</span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#646f5e] text-[15px] sm:text-[16px] leading-[1.7] mb-10"
            >
              {data.description}
            </motion.p>

            {/* Features & Stats Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5 items-stretch"
            >
              {/* Points Block (Light Green) */}
              <div className="md:col-span-7 bg-[#f0f3eb] rounded-[24px] p-6 lg:p-7 flex flex-col justify-between h-full gap-6">
                {data.points.map((point, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + idx * 0.15, duration: 0.5 }}
                    className={`flex gap-4 group cursor-pointer ${idx !== data.points.length - 1 ? 'pb-6 border-b border-[#e1e8d9]' : ''}`}
                  >
                    <div className="w-[52px] h-[52px] flex-shrink-0 rounded-full flex items-center justify-center text-[#1a1f17] bg-gradient-to-br from-white via-[#e8efe0] to-[#cbd7be] border border-[#d3ddc5] shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                      {iconMap[point.icon]}
                    </div>
                    <div className="flex flex-col pt-1">
                      <h4 className="text-[15px] font-bold text-[#1a1f17] mb-1 leading-tight group-hover:text-[#485f38] transition-colors duration-300">
                        {point.title}
                      </h4>
                      <p className="text-[#737b6d] text-[13px] leading-relaxed group-hover:text-[#52594e] transition-colors duration-300">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats Block (Dark Green) */}
              <div className="md:col-span-5 bg-[#24351c] rounded-[24px] p-6 lg:p-7 flex flex-col justify-between h-full">
                {data.stats.map((stat, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.15, duration: 0.5 }}
                    className={`flex items-center gap-4 group cursor-pointer ${idx !== data.stats.length - 1 ? 'pb-5 mb-5 border-b border-[#3b4d32]' : ''}`}
                  >
                    <div className="text-white w-[32px] flex justify-center flex-shrink-0 opacity-95 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                      {iconMap[stat.icon]}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[34px] lg:text-[38px] font-semibold text-white leading-none tracking-tight group-hover:text-[#c4d7b6] transition-colors duration-300">{stat.value}</span>
                      <span className="text-[11px] lg:text-[12px] text-[#a4b899] leading-[1.3] whitespace-pre-line group-hover:text-white transition-colors duration-300">{stat.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
