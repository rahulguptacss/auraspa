"use client";

import React from 'react';
import { TeamProps } from '../../types';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

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

export default function Team({ data }: TeamProps) {
  return (
    <section id="team" className="py-10 lg:py-14 relative bg-[#fbf7f5] overflow-hidden scroll-mt-20">
      {/* Background Graphic */}
      <div className="absolute left-0 top-0 opacity-10 pointer-events-none transform -translate-x-1/4 -translate-y-1/4">
        <img src={data.decoration_image} alt="Leaf" className="w-[400px] lg:w-[600px] h-auto object-contain" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8 lg:mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-4"
          >
            <div className="flex justify-center items-center gap-2 mb-2 w-full">
              <span className="w-12 sm:w-24 h-[1px] bg-[#b66f50] opacity-50"></span>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#b66f50] opacity-60"></div>
              <div className="text-[#b66f50] px-1">
                <LotusIcon size={22} />
              </div>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#b66f50] opacity-60"></div>
              <span className="w-12 sm:w-24 h-[1px] bg-[#b66f50] opacity-50"></span>
            </div>
            <span className="text-[#b66f50] font-bold tracking-[0.25em] text-[12px] sm:text-[13px] uppercase">
              {data.subtitle}
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[38px] md:text-[46px] lg:text-[54px] font-serif text-[#2b120f] mb-4 leading-[1.2]"
          >
            {data.title_line1} <span className="text-[#4a211c]">{data.title_highlight}</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#69524d] text-[15px] sm:text-[16px] max-w-[650px] mx-auto leading-relaxed"
          >
            {data.description}
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5">
          {data.members.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col group relative rounded-[20px] overflow-hidden bg-white shadow-xs border border-[#e5d3cc]/60 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-full h-[250px] sm:h-[280px] relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="bg-white w-full -mt-6 relative z-10 rounded-t-[20px] pt-4 px-4 pb-5 flex flex-col items-center">
                <h3 className="text-[20px] font-serif text-[#2b120f] font-medium mb-0.5">
                  {member.name}
                </h3>
                <span className="text-[#b66f50] text-[10.5px] font-bold tracking-[0.1em] uppercase mb-2 block">
                  {member.role}
                </span>
                
                <span className="w-10 h-[1.5px] bg-[#b66f50] mb-2.5 opacity-70"></span>
                
                <p className="text-[#69524d] text-[13px] leading-[1.5] mb-4 text-center">
                  {member.description}
                </p>
                
                <div className="flex items-center justify-center gap-3">
                  <a href={member.socials.facebook} className="w-[34px] h-[34px] rounded-full bg-[#f6ece8] text-[#4a211c] flex items-center justify-center hover:bg-[#4a211c] hover:text-white transition-colors">
                    <FaFacebookF size={13} />
                  </a>
                  <a href={member.socials.instagram} className="w-[34px] h-[34px] rounded-full bg-[#f6ece8] text-[#4a211c] flex items-center justify-center hover:bg-[#4a211c] hover:text-white transition-colors">
                    <FaInstagram size={13} />
                  </a>
                  <a href={member.socials.linkedin} className="w-[34px] h-[34px] rounded-full bg-[#f6ece8] text-[#4a211c] flex items-center justify-center hover:bg-[#4a211c] hover:text-white transition-colors">
                    <FaLinkedinIn size={13} />
                  </a>
                  <a href={member.socials.email} className="w-[34px] h-[34px] rounded-full bg-[#f6ece8] text-[#4a211c] flex items-center justify-center hover:bg-[#4a211c] hover:text-white transition-colors">
                    <FaEnvelope size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
