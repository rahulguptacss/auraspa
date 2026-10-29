"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { 
  MapPin, Phone, Mail, User, Calendar, 
  List, FileText, ArrowUpRight,
  CalendarDays, Leaf, Shield
} from 'lucide-react';
import { common, BookAppointmentProps } from '@/components/types';

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

const iconMap: { [key: string]: React.FC<any> } = {
  CalendarDays: CalendarDays,
  Leaf: Leaf,
  Lotus: LotusIcon,
  Shield: Shield
};

export default function BookAppointment({ data }: BookAppointmentProps) {
  const contact = common.Footer.contact;
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const servicesList = [
    { value: "massage", label: "Massage Therapy" },
    { value: "facial", label: "Facial Treatment" },
    { value: "body", label: "Body Care" },
    { value: "wellness", label: "Wellness Packages" }
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="pt-16 md:pt-24 pb-4 md:pb-8 bg-[#fbf7f5] scroll-mt-20" id="book">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12 items-stretch mb-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-[52%] xl:w-[54%] flex flex-col">
            {/* Tag */}
            <div className="inline-flex items-center gap-2.5 bg-[#f6ece8] px-4 py-1.5 rounded-full text-[14px] font-semibold text-[#2b120f] mb-6 w-fit border border-[#e5d3cc]/60">
              <div className="w-2 h-2 rounded-full bg-[#b66f50]" />
              {data.subtitle}
            </div>

            {/* Title */}
            <h2 className="text-[36px] md:text-[42px] lg:text-[48px] font-serif text-[#2b120f] leading-[1.1] mb-4 tracking-tight">
              {data.title_line1} <br className="hidden md:block" />
              {data.title_line2} <span className="text-[#4a211c]">{data.title_highlight}</span>
            </h2>

            {/* Lotus Divider */}
            <div className="flex items-center justify-center gap-3 mb-6 w-full lg:max-w-[550px] pr-4">
              <span className="w-16 h-[1px] bg-[#b66f50]"></span>
              <LotusIcon size={24} className="text-[#b66f50]" />
              <span className="w-16 h-[1px] bg-[#b66f50]"></span>
            </div>

            {/* Description */}
            <p className="text-[#69524d] text-[16px] sm:text-[17px] leading-[1.6] max-w-[550px] mb-10">
              {data.description}
            </p>

            {/* Image with Contact Bar */}
            <div className="relative rounded-[24px] overflow-hidden w-full h-[350px] sm:h-[400px] lg:h-auto lg:flex-1 lg:min-h-[400px] shadow-lg mb-12 lg:mb-0 border border-[#e5d3cc]/40">
              <Image 
                src={data.image} 
                alt={data.title_highlight} 
                layout="fill" 
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlapping Contact Bar */}
              <div className="absolute bottom-0 left-0 w-full bg-[#4a211c] rounded-t-[20px] rounded-b-[24px] px-5 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] border-t border-[#b66f50]/20">
                
                {/* Address */}
                <div className="flex items-center gap-3.5 w-full">
                  <div className="w-[50px] h-[50px] rounded-full bg-[#b66f50] flex items-center justify-center text-white shrink-0 shadow-inner">
                    <MapPin size={22} fill="currentColor" strokeWidth={1} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[#b66f50] font-medium text-[13.5px] mb-0.5">Our Address</h4>
                    <p className="text-white text-[13px] leading-[1.3] whitespace-pre-wrap">{contact.address}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden sm:block w-[1px] h-12 bg-white/10 shrink-0"></div>

                {/* Phone */}
                <div className="flex items-center gap-3.5 w-full">
                  <div className="w-[50px] h-[50px] rounded-full bg-[#b66f50] flex items-center justify-center text-white shrink-0 shadow-inner">
                    <Phone size={22} fill="currentColor" strokeWidth={1} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[#b66f50] font-medium text-[13.5px] mb-0.5">Phone Number</h4>
                    <p className="text-white text-[13px] leading-[1.3]">{contact.phone}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden sm:block w-[1px] h-12 bg-white/10 shrink-0"></div>

                {/* Email */}
                <div className="flex items-center gap-3.5 w-full">
                  <div className="w-[50px] h-[50px] rounded-full bg-[#b66f50] flex items-center justify-center text-white shrink-0 shadow-inner">
                    <Mail size={22} fill="currentColor" strokeWidth={1} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[#b66f50] font-medium text-[13.5px] mb-0.5">Email Address</h4>
                    <p className="text-white text-[13px] leading-[1.3]">{contact.email}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="w-full lg:w-[48%] xl:w-[46%] bg-white rounded-[24px] border border-[#e5d3cc]/70 p-6 lg:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col">
            <div className="text-center mb-6">
              <h3 className="text-[32px] md:text-[38px] font-serif text-[#2b120f] mb-3">
                {data.form.title_line1} <span className="text-[#4a211c]">{data.form.title_highlight}</span>
              </h3>
              <div className="flex justify-center items-center gap-2 mb-4">
                <span className="w-10 h-[1px] bg-[#b66f50] opacity-60"></span>
                <LotusIcon size={16} className="text-[#b66f50]" />
                <span className="w-10 h-[1px] bg-[#b66f50] opacity-60"></span>
              </div>
              <p className="text-[#69524d] text-[14px]">
                {data.form.description}
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-[#f6ece8] border border-[#e5d3cc] rounded-2xl p-8 text-center flex flex-col items-center justify-center my-auto min-h-[360px]">
                <div className="w-16 h-16 rounded-full bg-[#4a211c] text-white flex items-center justify-center mb-4 shadow-sm">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-[24px] font-serif text-[#2b120f] font-semibold mb-2">Appointment Requested!</h3>
                <p className="text-[#69524d] text-[15px] max-w-[420px] mb-4">
                  Thank you for booking with Aura Spa. Our concierge team will contact you shortly to confirm your schedule.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs uppercase font-bold tracking-wider text-[#4a211c] hover:underline"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form 
                className="flex flex-1 flex-col" 
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsSubmitted(true);
                }}
              >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-bold text-[#2b120f]">Full Name*</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <User size={18} />
                  </div>
                  <input type="text" placeholder="Enter Full Name" className="w-full bg-[#fbf7f5] border border-[#e5d3cc] rounded-[12px] py-3 pl-11 pr-4 text-[14px] outline-none focus:border-[#4a211c] focus:ring-1 focus:ring-[#4a211c] transition-all text-[#2b120f]" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-bold text-[#2b120f]">Phone Number*</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Phone size={18} />
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Enter Phone Number" 
                    inputMode="numeric"
                    onChange={(event) => {
                      event.target.value = event.target.value.replace(/\D/g, '');
                    }}
                    className="w-full bg-[#fbf7f5] border border-[#e5d3cc] rounded-[12px] py-3 pl-11 pr-4 text-[14px] outline-none focus:border-[#4a211c] focus:ring-1 focus:ring-[#4a211c] transition-all text-[#2b120f]" 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-bold text-[#2b120f]">Email Address*</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Mail size={18} />
                  </div>
                  <input type="email" placeholder="Enter Email Address" className="w-full bg-[#fbf7f5] border border-[#e5d3cc] rounded-[12px] py-3 pl-11 pr-4 text-[14px] outline-none focus:border-[#4a211c] focus:ring-1 focus:ring-[#4a211c] transition-all text-[#2b120f]" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-bold text-[#2b120f]">Select Date*</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Calendar size={18} />
                  </div>
                  <input type="date" className="w-full bg-[#fbf7f5] border border-[#e5d3cc] rounded-[12px] py-3 pl-11 pr-4 text-[14px] text-gray-600 outline-none focus:border-[#4a211c] focus:ring-1 focus:ring-[#4a211c] transition-all" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-[13px] font-bold text-[#2b120f]">Select Service*</label>
                <div className="relative" ref={dropdownRef}>
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10 pointer-events-none">
                    <List size={18} />
                  </div>
                  
                  <div 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full bg-[#fbf7f5] border ${isDropdownOpen ? 'border-[#4a211c] ring-1 ring-[#4a211c]' : 'border-[#e5d3cc]'} rounded-[12px] py-3 pl-11 pr-4 text-[14px] text-gray-600 outline-none cursor-pointer transition-all flex items-center justify-between`}
                  >
                    <span className={selectedService ? "text-[#2b120f]" : "text-gray-500"}>
                      {selectedService ? servicesList.find(s => s.value === selectedService)?.label : "Select a Service"}
                    </span>
                    <div className={`text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white border border-[#e5d3cc] rounded-[12px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-20 overflow-hidden py-2">
                      <div className="px-4 py-2.5 text-[14px] text-[#69524d] bg-[#f6ece8] opacity-90 cursor-default">
                        Select a Service
                      </div>
                      {servicesList.map((service) => (
                        <div 
                          key={service.value}
                          onClick={() => {
                            setSelectedService(service.value);
                            setIsDropdownOpen(false);
                          }}
                          className={`px-4 py-2.5 text-[14px] cursor-pointer hover:bg-[#f6ece8] hover:text-[#4a211c] transition-colors ${selectedService === service.value ? 'bg-[#f6ece8] text-[#4a211c] font-medium' : 'text-[#69524d]'}`}
                        >
                          {service.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-[13px] font-bold text-[#2b120f]">Message</label>
                <div className="relative">
                  <div className="absolute left-4 top-4 text-gray-400">
                    <FileText size={18} />
                  </div>
                  <textarea rows={3} placeholder="Any Additional Message..." className="w-full bg-[#fbf7f5] border border-[#e5d3cc] rounded-[12px] py-3 pl-11 pr-4 text-[14px] outline-none focus:border-[#4a211c] focus:ring-1 focus:ring-[#4a211c] transition-all resize-none text-[#2b120f]"></textarea>
                </div>
              </div>

              </div>
              <div className="mt-auto pt-4">
                <button type="submit" className="w-full bg-[#4a211c] text-white py-3.5 rounded-full font-bold text-[15px] flex items-center justify-center gap-2 hover:bg-[#311310] transition-all duration-300 shadow-[0_4px_14px_rgba(74,33,28,0.25)] hover:shadow-[0_6px_20px_rgba(74,33,28,0.35)] cursor-pointer">
                  <div className="bg-[#b66f50] rounded-full p-1 text-white">
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </div>
                  {data.form.button_text}
                </button>
              </div>
            </form>
            )}
          </div>
        </div>

        {/* Features Row */}
        <div className="bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#e5d3cc]/60 p-6 lg:p-8 mt-12 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
          {data.features.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || Leaf;
            return (
              <React.Fragment key={idx}>
                <div className="flex items-center gap-4 px-4 w-full lg:w-1/4">
                  <div className="w-[60px] h-[60px] rounded-full bg-[#f6ece8] flex items-center justify-center text-[#4a211c] shrink-0 border border-[#e5d3cc]/50">
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-bold text-[#2b120f] text-[15px] mb-1">{feature.title}</h4>
                    <p className="text-[#69524d] text-[13px] leading-snug">{feature.description}</p>
                  </div>
                </div>
                {idx < data.features.length - 1 && (
                  <div className="hidden lg:block w-[1px] h-[60px] bg-[#e5d3cc]/40 shrink-0"></div>
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
}
