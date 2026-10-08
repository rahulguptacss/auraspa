"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Phone } from 'lucide-react';

const LotusIconExact = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 19.5 C 9 21.5 15 21.5 18 19.5" />
    <path d="M12 21 C 12 17 9 14 6 13 C 9 13 12 16 12 19" />
    <path d="M12 21 C 12 17 15 14 18 13 C 15 13 12 16 12 19" />
    <path d="M12 19 C 12 14 10 9 6 6 C 10 9 12 14 12 18" />
    <path d="M12 19 C 12 14 14 9 18 6 C 14 9 12 14 12 18" />
    <path d="M12 18 C 12 12 12 6 12 2" />
  </svg>
);

const LeafIcon = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 22l8.1-8.1"/>
    <path d="M10.5 14.5l-3 3" />
  </svg>
);

const StonesIcon = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="17" width="14" height="5" rx="2.5" />
    <rect x="6.5" y="12" width="11" height="5" rx="2.5" />
    <rect x="8" y="7" width="8" height="5" rx="2.5" />
    <rect x="9.5" y="3" width="5" height="4" rx="2" />
  </svg>
);

const MoonZIcon = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.5 13.5A8.5 8.5 0 1 1 11.5 4.5 6.5 6.5 0 0 0 20.5 13.5z" />
    <path d="M16 4h3l-3 4h3" />
    <path d="M20 1h2.5l-2.5 3h2.5" />
  </svg>
);

export default function ServiceDetails({ service, allServices, data }: { service: any, allServices: any[], data: any }) {

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* Left Sidebar */}
          <aside className="w-full lg:w-1/3 xl:w-1/4 flex flex-col gap-8 lg:sticky lg:top-24 self-start order-2 lg:order-1">
            {/* Explore Our Services */}
            <div className="bg-[#f2f6ec] rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-[#4d5e3c] px-6 py-4">
                <h3 className="text-white font-medium text-[17px]">Explore Our Services</h3>
              </div>
              <div className="p-3">
                {allServices.map((svc, idx) => {
                  const isActive = svc.slug === service.slug;
                  return (
                    <Link 
                      key={idx} 
                      href={svc.link || `/services/${svc.slug}`} 
                      className={`flex items-center gap-4 p-2 mb-1 ${isActive ? 'bg-[#fcfdfa] rounded-[12px] shadow-sm' : 'group'}`}
                    >
                      <div className="w-[46px] h-[46px] rounded-[10px] overflow-hidden relative flex-shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                        <Image src={svc.image} alt={svc.title} layout="fill" objectFit="cover" />
                      </div>
                      <div className={`flex-1 flex items-center justify-between py-2 ${!isActive && idx !== allServices.length - 1 ? 'border-b border-[#e1e6d9]' : ''}`}>
                        <span className={`text-[15px] ${isActive ? 'font-bold text-[#1a202c]' : 'font-semibold text-[#3a4732] group-hover:text-[#4d5e3c]'}`}>
                          {svc.title}
                        </span>
                        <ArrowUpRight strokeWidth={1.5} className={`w-4 h-4 ${isActive ? 'text-[#4d5e3c]' : 'text-[#8c9c7f] group-hover:text-[#4d5e3c]'}`} />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Contact Us Today Card */}
            <div className="relative rounded-[24px] overflow-hidden bg-stone-800 text-white p-8 h-[320px] flex flex-col justify-center">
              <Image 
                src={data.image} 
                alt="Contact Background" 
                layout="fill" 
                objectFit="cover" 
                className="absolute inset-0 opacity-40 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif mb-3">Contact Us Today!</h3>
                <p className="text-stone-200 text-[15px] mb-8 leading-relaxed">
                  Experience profound relaxation as our expert therapists release tension.
                </p>
                <Link href="#contact" className="inline-flex items-center gap-3 bg-white text-[#1c2417] px-6 py-3.5 rounded-full font-bold text-sm hover:bg-stone-100 transition-colors">
                  <div className="bg-[#526343] p-1.5 rounded-full text-white">
                    <Phone className="w-4 h-4" />
                  </div>
                  Call: +100000000000
                </Link>
              </div>
            </div>
          </aside>

          {/* Right Content */}
          <div className="w-full lg:w-2/3 xl:w-3/4 flex flex-col order-1 lg:order-2">
            {/* Main Image */}
            <div className="w-full h-[300px] md:h-[350px] relative rounded-[20px] overflow-hidden mb-10">
              <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" />
            </div>

            {/* Title & Description */}
            <div className="mb-10">
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#849a75] mb-3 block">
                {service.title.toUpperCase()}
              </span>
              <h1 className="text-4xl md:text-5xl font-serif text-[#1c2417] mb-6">
                <span className="font-bold text-[#1c2417]">{service.title.split(' ')[0]}</span> <span className="text-[#485f38]">{service.title.split(' ').slice(1).join(' ')}</span>
              </h1>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-[#849a75]" />
                <LotusIconExact size={24} className="text-[#849a75]" />
                <div className="h-[1px] w-12 bg-[#849a75]" />
              </div>

              <p className="text-stone-600 text-[16px] leading-relaxed mb-6 whitespace-pre-wrap">
                {data?.longDescription || service.description}
              </p>
            </div>

            {/* Key Benefits */}
            <div className="bg-[#f4f7f0] rounded-[24px] p-6 md:p-8 mb-12">
              <h3 className="text-3xl md:text-[34px] font-serif text-[#121826] mb-6">Key Benefits</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
                {data?.keyBenefits?.map((benefit: any, idx: number) => (
                  <div key={idx} className={`flex flex-col items-center text-center px-2 md:px-4 ${idx !== data.keyBenefits.length - 1 ? 'md:border-r border-[#dce4d1]' : ''}`}>
                    <div className="w-[64px] h-[64px] rounded-full bg-[#e6efdb] flex items-center justify-center mb-4 text-[#324523]">
                      {(!benefit.icon || benefit.icon.includes('lotus')) && <LotusIconExact size={32} />}
                      {benefit.icon?.includes('leaf') && <LeafIcon size={32} />}
                      {benefit.icon?.includes('stones') && <StonesIcon size={32} />}
                      {benefit.icon?.includes('moon') && <MoonZIcon size={32} />}
                    </div>
                    <h4 className="text-[16px] font-bold text-[#121826] mb-2 leading-snug">{benefit.title}</h4>
                    <p className="text-[13px] text-[#6b7280] leading-relaxed max-w-[180px]">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Who is it for? */}
            <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
              <div className="flex-1">
                <h3 className="text-3xl md:text-[34px] font-serif text-[#121826] mb-5">Who is it for?</h3>
                <p className="text-[#6b7280] text-[17px] leading-[1.8]">
                  {service.title} is ideal for anyone looking to de-stress, relax, and rejuvenate—whether you have a busy lifestyle, experience muscle tension, or simply want to enhance your overall wellness and mood.
                </p>
              </div>
              <div className="w-full md:w-[45%] h-[200px] relative rounded-[16px] overflow-hidden">
                <Image src={service.image} alt="Who is it for" layout="fill" objectFit="cover" />
              </div>
            </div>



          </div>
        </div>
      </div>
    </section>
  );
}
