"use client";

import React from 'react';
import Image from 'next/image';
import { ContactProps } from '@/components/types';
import { MapPin, Mail, Phone, Clock, User, FileText, ArrowRight } from 'lucide-react';

const iconMap: { [key: string]: React.FC<any> } = {
  MapPin: MapPin,
  Mail: Mail,
  Phone: Phone,
  Clock: Clock
};

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

export default function Contact({ data }: ContactProps) {
  return (
    <section className="py-10 md:py-12 bg-[#f6f3ec] relative overflow-hidden" id="contact">
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden>
        <img src="/img/sectionbg.webp" alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,243,236,0.72),rgba(244,247,240,0.88))]" />
        <div
          className="absolute inset-0 opacity-50"
          style={{ backgroundImage: 'radial-gradient(rgba(74,99,54,0.28) 0.7px, transparent 0.7px)', backgroundSize: '16px 16px' }}
        />
        <div className="absolute -left-16 top-16 h-56 w-56 rounded-full bg-[#d7e3c4]/70 blur-3xl" />
        <div className="absolute -right-10 bottom-10 h-64 w-64 rounded-full bg-[#efe2c4]/80 blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Info Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20 pt-10">
          {data.info_cards.map((card, idx) => {
            const Icon = iconMap[card.icon] || MapPin;
            return (
              <div key={idx} className="bg-[#f5f8ef] rounded-2xl pt-10 md:pt-12 pb-5 md:pb-6 px-4 md:px-8 relative flex flex-col items-start border border-[#eef2e6] hover:shadow-lg transition-shadow mt-6">
                {/* Decorative leaf/watermark */}
                <div className="absolute bottom-0 right-0 opacity-[0.15] w-16 h-16 md:w-28 md:h-28 pointer-events-none overflow-hidden rounded-br-2xl">
                  <Image src={data.bg_image || '/img/sectionbg.png'} alt="Leaf" layout="fill" objectFit="cover" />
                </div>
                
                {/* Overlapping Icon */}
                <div className="absolute -top-8 md:-top-10 left-4 md:left-8 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#e8ecd9] flex items-center justify-center z-10">
                  <div className="w-[42px] h-[42px] md:w-[52px] md:h-[52px] rounded-full bg-[#4f673a] flex items-center justify-center text-white shadow-sm">
                    <Icon size={20} fill="currentColor" strokeWidth={1} className="md:w-6 md:h-6" />
                  </div>
                </div>

                <h3 className="text-[17px] md:text-[22px] font-serif text-[#11160e] mb-2 z-10 mt-1 md:mt-0">{card.title}</h3>
                <span className="w-8 md:w-10 h-[1.5px] bg-[#d3dfc3] mb-2 md:mb-3 z-10"></span>
                <p className="text-[#4a5342] text-[12px] md:text-[14px] leading-[1.6] z-10 break-words w-full">
                  {card.icon === 'Mail' ? (
                    <a href={`mailto:${card.detail1}`} className="hover:text-[#4a6336] transition-colors">{card.detail1}</a>
                  ) : card.icon === 'Phone' ? (
                    <a href={`tel:${card.detail1.replace(/[^\d+]/g, '')}`} className="hover:text-[#4a6336] transition-colors">{card.detail1}</a>
                  ) : (
                    card.detail1
                  )}
                  {card.detail2 && <><br />{card.detail2}</>}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left - Map */}
          <div className="w-full lg:w-1/2 h-[450px] lg:h-[600px] rounded-3xl overflow-hidden border-8 border-[#f4f7f0] shadow-[0_10px_40px_rgba(0,0,0,0.08)] relative z-10">
            <iframe
              src={data.map_iframe_url}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right - Form */}
          <div className="w-full lg:w-1/2 relative z-10">
            {/* Header */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-4 font-bold text-[#4a6336] uppercase tracking-[0.2em] text-[13px] mb-4">
                {data.subtitle}
                <div className="flex items-center gap-2 opacity-50">
                  <span className="w-12 h-[1px] bg-[#4a6336]"></span>
                  <LotusIcon size={14} className="text-[#4a6336]" />
                  <span className="w-12 h-[1px] bg-[#4a6336]"></span>
                </div>
              </div>
              <h2 className="text-[40px] md:text-[48px] font-serif text-[#11160e] leading-[1.15] mb-5 tracking-tight">
                {data.title_line1} <span className="text-[#4a6336]">{data.title_highlight}</span>
              </h2>
              <p className="text-[#646f5e] text-[16px] leading-[1.7] max-w-[500px]">
                {data.description}
              </p>
            </div>

            {/* Form */}
            <form 
              className="flex flex-col gap-4" 
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = '/thank-you';
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                    <User size={18} />
                  </div>
                  <input type="text" placeholder={data.form.name_placeholder} className="w-full bg-white border border-[#e4eadb] rounded-xl py-3.5 pl-12 pr-4 text-[14px] outline-none focus:border-[#4a6336] transition-all" />
                </div>
                <div className="relative">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                    <Mail size={18} />
                  </div>
                  <input type="email" placeholder={data.form.email_placeholder} className="w-full bg-white border border-[#e4eadb] rounded-xl py-3.5 pl-12 pr-4 text-[14px] outline-none focus:border-[#4a6336] transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                    <Phone size={18} />
                  </div>
                  <input type="tel" placeholder={data.form.phone_placeholder} className="w-full bg-white border border-[#e4eadb] rounded-xl py-3.5 pl-12 pr-4 text-[14px] outline-none focus:border-[#4a6336] transition-all" />
                </div>
                <div className="relative">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                    <FileText size={18} />
                  </div>
                  <input type="text" placeholder={data.form.subject_placeholder} className="w-full bg-white border border-[#e4eadb] rounded-xl py-3.5 pl-12 pr-4 text-[14px] outline-none focus:border-[#4a6336] transition-all" />
                </div>
              </div>

              <div className="relative mb-2">
                <div className="absolute left-5 top-4 text-gray-400">
                  <FileText size={18} />
                </div>
                <textarea rows={5} placeholder={data.form.message_placeholder} className="w-full bg-white border border-[#e4eadb] rounded-xl py-4 pl-12 pr-4 text-[14px] outline-none focus:border-[#4a6336] transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#4a6336] text-white py-4 px-8 rounded-full font-bold text-[15px] flex items-center justify-center gap-3 hover:bg-[#3b4f2b] transition-all shadow-md">
                {data.form.button_text}
                <div className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center">
                  <ArrowRight size={14} />
                </div>
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
