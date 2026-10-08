"use client";

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ServicesProps } from '../../types';
import { Footprints, Sparkles, ChevronLeft, ChevronRight, ArrowRight, Trees, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const StonesIconExact = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="18.5" rx="7.5" ry="3" fill="#e4ebd9" />
    <ellipse cx="12" cy="14.5" rx="6" ry="2.5" fill="#e4ebd9" />
    <ellipse cx="12" cy="11" rx="4.5" ry="2" fill="#e4ebd9" />
    <ellipse cx="12" cy="7.5" rx="3" ry="1.5" fill="#e4ebd9" />
  </svg>
);

const LotusIconExact = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 19.5 C 9 21.5 15 21.5 18 19.5" />
    <path d="M5 13.5 C 3 12.5 2 12.5 2 12.5 C 2.5 15.5 5 17.5 8 18.5" fill="#e4ebd9" />
    <path d="M19 13.5 C 21 12.5 22 12.5 22 12.5 C 21.5 15.5 19 17.5 16 18.5" fill="#e4ebd9" />
    <path d="M9 10.5 C 6 9 4 9.5 4 9.5 C 4.5 13.5 7 16 10.5 17" fill="#e4ebd9" />
    <path d="M15 10.5 C 18 9 20 9.5 20 9.5 C 19.5 13.5 17 16 13.5 17" fill="#e4ebd9" />
    <path d="M12 2.5 L 9 10.5 C 8.5 13 10 16 12 17 C 14 16 15.5 13 15 10.5 L 12 2.5 Z" fill="#e4ebd9" />
  </svg>
);

const LeavesIconExact = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 22 C 11 22 11 15 13 11" />
    <path d="M13 11 C 13 11 15 4 21 4 C 21 9 17 12 13 11 Z" fill="#e4ebd9" />
    <path d="M13 11 L 17 7" />
    <path d="M11 17 C 11 17 7 11 2 12 C 2 17 7 19 11 17 Z" fill="#e4ebd9" />
    <path d="M11 17 L 6 14" />
  </svg>
);

const FaceIconExact = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
     <circle cx="12" cy="12" r="9" fill="#e4ebd9" />
     <path d="M9 10 h.01 M15 10 h.01 M9 15 q3 2 6 0" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const iconMap: Record<string, React.ReactNode> = {
  Heart: <LotusIconExact size={28} className="text-[#485f38]" />,
  Smile: <FaceIconExact size={28} className="text-[#485f38]" />,
  Leaf: <LeavesIconExact size={28} className="text-[#485f38]" />,
  Flame: <StonesIconExact size={28} className="text-[#485f38]" />,
  Footprints: <Footprints className="w-7 h-7 text-[#485f38]" strokeWidth={1.5} />,
  Sparkles: <Sparkles className="w-7 h-7 text-[#485f38]" strokeWidth={1.5} />,
  Trees: <Trees className="w-7 h-7 text-[#485f38]" strokeWidth={1.5} />,
  Users: <Users className="w-7 h-7 text-[#485f38]" strokeWidth={1.5} />,
};

export default function Services({ data, isGrid }: ServicesProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  
  if (!data || !data.items) return null;

  const itemsLength = data.items.length;
  // Duplicate array 3 times for seamless infinite loop
  const extendedItems = [...data.items, ...data.items, ...data.items];
  
  // Start in the middle copy
  const [currentIndex, setCurrentIndex] = useState(itemsLength);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [slideWidth, setSlideWidth] = useState(0);

  // Measure slide width dynamically including gap
  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current && trackRef.current.children.length > 0) {
        const firstChild = trackRef.current.children[0] as HTMLElement;
        setSlideWidth(firstChild.offsetWidth + 16); // 16px is gap-4
      }
    };
    
    const observer = new ResizeObserver(updateWidth);
    if (trackRef.current) {
      observer.observe(trackRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const next = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  }, []);

  const prev = () => {
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  };

  // Auto-play interval
  useEffect(() => {
    if (!isHovered && slideWidth > 0) {
      const timer = setInterval(next, 3500); // Auto slide every 3.5s
      return () => clearInterval(timer);
    }
  }, [isHovered, next, slideWidth]);

  // Handle infinite loop logic
  useEffect(() => {
    if (currentIndex >= itemsLength * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex - itemsLength);
      }, 500); // Matches CSS transition duration
      return () => clearTimeout(timer);
    }
    
    if (currentIndex <= 0) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex + itemsLength);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, itemsLength]);

  // Re-enable transition after teleporting
  useEffect(() => {
    if (!isTransitioning) {
      // Need a small timeout to let the DOM update without transition before re-enabling
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <section id="services" className="relative overflow-hidden py-12 bg-[#f8faf6]">
      {/* Decorative Background Leaves */}
      <div className="absolute left-[-150px] top-[-100px] pointer-events-none opacity-10">
        <LeavesIconExact size={400} className="text-[#485f38]" />
      </div>
      <div className="absolute right-[-150px] top-[-100px] pointer-events-none opacity-10 scale-x-[-1]">
        <LeavesIconExact size={400} className="text-[#485f38]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px]">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-center px-4"
        >
          <div className="mb-2 flex items-center justify-center">
            <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#849a75]">
              {data.subtitle}
            </span>
          </div>

          <h2 className="mb-0 text-[36px] sm:text-[42px] md:text-[48px] font-serif leading-tight text-[#1c2417]">
            {data.title_line1}
          </h2>
          
          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-[#849a75]" />
            <LotusIconExact size={22} className="text-[#849a75]" />
            <span className="h-[1px] w-12 bg-[#849a75]" />
          </div>

          <p className="mx-auto max-w-[600px] text-[15px] sm:text-[16px] leading-[1.6] text-stone-500">
            {data.description}
          </p>
        </motion.div>

        {/* Content Section (Grid or Carousel) */}
        {isGrid ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mt-10">
            {data.items.map((item, index) => (
              <div key={`${item.title}-${index}`} className="w-full flex-none">
                <div className="h-full relative overflow-visible rounded-[16px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col transition-transform duration-300 hover:-translate-y-2 border border-[#f3f6ec]">
                  {/* Image */}
                  <div className="h-[220px] overflow-hidden rounded-t-[16px] relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  {/* Circular Icon Overlay */}
                  <div className="absolute left-1/2 top-[220px] z-20 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-sm">
                    <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full border border-[#849a75] bg-[#f8fbf5]">
                      {iconMap[item.icon] || <LotusIconExact size={28} className="text-[#485f38]" />}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col items-center flex-1 px-5 pb-8 pt-12 text-center">
                    <h3 className="mb-2.5 text-[20px] font-serif text-[#1c2417] font-medium">{item.title}</h3>
                    <p className="mb-6 text-[14px] leading-relaxed text-[#596558] flex-1 line-clamp-3">{item.description}</p>
                    
                    <Link
                      href={item.link}
                      className="inline-flex items-center text-[#293623] font-semibold text-[13px] tracking-wide uppercase hover:text-[#d7ad64] transition-colors"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
          <div 
          className="relative px-4 sm:px-12 md:px-16 group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Button */}
          <button
            onClick={prev}
            className="hidden sm:flex absolute left-2 sm:left-4 top-[160px] z-10 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full border border-[#849a75] bg-[#f8faf6] text-[#485f38] transition-colors hover:bg-[#849a75] hover:text-white shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden w-full py-4 px-1" style={{ opacity: slideWidth ? 1 : 0, transition: 'opacity 0.3s ease' }}>
            <div 
              ref={trackRef}
              className="flex w-full gap-4" 
              style={{ 
                transform: `translateX(-${currentIndex * slideWidth}px)`,
                transition: isTransitioning ? 'transform 500ms ease-in-out' : 'none'
              }}
            >
              {extendedItems.map((item, index) => (
                <div key={`${item.title}-${index}`} className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] flex-none">
                  <div className="h-full relative overflow-visible rounded-xl bg-white shadow-[0_4px_25px_rgb(0,0,0,0.03)] flex flex-col transition-transform duration-300 hover:-translate-y-1 border border-stone-100/60">
                    {/* Image */}
                    <div className="h-[160px] overflow-hidden rounded-t-xl relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>

                    {/* Circular Icon Overlay */}
                    <div className="absolute left-1/2 top-[160px] z-20 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-sm">
                      <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full border border-[#849a75] bg-[#f8fbf5]">
                        {iconMap[item.icon] || <LotusIconExact size={28} className="text-[#485f38]" />}
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col items-center flex-1 px-4 pb-6 pt-10 text-center">
                      <h3 className="mb-2 text-[19px] font-serif text-[#1c2417]">{item.title}</h3>
                      <p className="mb-4 text-[13px] leading-relaxed text-stone-500 flex-1 line-clamp-3">{item.description}</p>
                      
                      <Link
                        href={item.link}
                        className="inline-flex items-center text-[#485f38] font-bold text-[14px] hover:text-[#2d3b23] transition-colors"
                      >
                        Read More <ArrowRight className="w-4 h-4 ml-1.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={next}
            className="hidden sm:flex absolute right-2 sm:right-4 top-[160px] z-10 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full border border-[#849a75] bg-[#f8faf6] text-[#485f38] transition-colors hover:bg-[#849a75] hover:text-white shadow-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex sm:hidden justify-center gap-4 mt-2">
          <button
            onClick={prev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#849a75] bg-[#f8faf6] text-[#485f38] transition-colors hover:bg-[#849a75] hover:text-white shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#849a75] bg-[#f8faf6] text-[#485f38] transition-colors hover:bg-[#849a75] hover:text-white shadow-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        </>
        )}

        {/* View All Button */}
        {data.button && !isGrid && (
          <div className="mt-8 text-center">
            <Link
              href={data.button.href}
              className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-[#485f38] px-8 text-[15px] font-medium text-white hover:bg-[#384a2b] transition-colors"
            >
              {data.button.text} <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
