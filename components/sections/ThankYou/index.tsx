"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThankYouProps } from '@/components/types';
import { Check, ArrowLeft } from 'lucide-react';

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

export default function ThankYou({ data }: ThankYouProps) {
  return (
    <section className="relative flex-1 w-full flex items-center justify-center pt-28 pb-10 md:pt-32 md:pb-12">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image src={data.bg_image} alt="Background" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 w-full max-w-[650px] mx-auto px-4">
        {/* Card */}
        <div className="bg-[#fbf7f5] rounded-[24px] px-8 py-8 md:py-8 text-center relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] border border-white/50">
          
          {/* Watermarks */}
          <div className="absolute top-0 left-0 opacity-[0.25] w-48 h-48 pointer-events-none -translate-x-1/4 -translate-y-1/4 rotate-180">
            <Image src={data.bg_image} alt="Leaf" layout="fill" objectFit="cover" />
          </div>
          <div className="absolute bottom-0 right-0 opacity-[0.25] w-48 h-48 pointer-events-none translate-x-1/4 translate-y-1/4">
            <Image src={data.bg_image} alt="Leaf" layout="fill" objectFit="cover" />
          </div>

          {/* Checkmark Circle */}
          <div className="relative inline-flex items-center justify-center w-24 h-24 bg-[#f0e2dc] rounded-full mb-4 z-10">
            <div className="w-16 h-16 bg-[#4a211c] rounded-full flex items-center justify-center text-white shadow-md">
              <Check size={32} strokeWidth={3} />
            </div>
            
            {/* Side leaves decorations */}
            <div className="absolute -left-10 top-1/2 -translate-y-1/2 text-[#4a211c] w-8 h-8">
               <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                 <path d="M17.5 12C12.5 14 10.4 20 10.4 20C10.4 20 13.5 14.5 21.5 12Z"/>
                 <path d="M17 18C12 19 9.9 23 9.9 23C9.9 23 12 20 17 18Z"/>
                 <path d="M16 6C11 8 8.9 14 8.9 14C8.9 14 12 8.5 20 6Z"/>
               </svg>
            </div>
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 text-[#4a211c] w-8 h-8 scale-x-[-1]">
               <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                 <path d="M17.5 12C12.5 14 10.4 20 10.4 20C10.4 20 13.5 14.5 21.5 12Z"/>
                 <path d="M17 18C12 19 9.9 23 9.9 23C9.9 23 12 20 17 18Z"/>
                 <path d="M16 6C11 8 8.9 14 8.9 14C8.9 14 12 8.5 20 6Z"/>
               </svg>
            </div>
          </div>

          <h2 className="text-[40px] md:text-[48px] font-serif font-bold text-[#2b120f] mb-2 z-10 relative leading-none tracking-tight">
            {data.title}
          </h2>

          {/* Divider */}
          <div className="flex justify-center items-center gap-3 mb-4 relative z-10">
            <span className="w-10 h-[1.5px] bg-[#4a211c]"></span>
            <LotusIcon size={16} className="text-[#4a211c]" />
            <span className="w-10 h-[1.5px] bg-[#4a211c]"></span>
          </div>

          <h3 className="text-[18px] md:text-[20px] font-bold text-[#4a211c] mb-3 relative z-10">
            {data.subtitle}
          </h3>

          <p className="text-[#4a5342] text-[15px] leading-[1.6] max-w-[550px] mx-auto mb-6 relative z-10">
            {data.description}
          </p>

          <Link href={data.button.href}>
            <button className="bg-[#4a211c] text-white py-3 px-8 rounded-full font-bold text-[15px] inline-flex items-center justify-center gap-3 hover:bg-[#311310] transition-all shadow-lg hover:shadow-xl relative z-10">
              <ArrowLeft size={18} strokeWidth={2.5} />
              {data.button.text}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
