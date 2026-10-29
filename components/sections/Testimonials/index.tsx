"use client";

import React, { useState, useEffect } from 'react';
import { TestimonialsProps } from '../../types';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

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

export default function Testimonials({ data }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(data.reviews.length * 7);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Extend array to 15x to allow seamless infinite scrolling even with rapid clicking
  const extendedReviews = Array(15).fill(data.reviews).flat();

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex >= data.reviews.length * 10) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - data.reviews.length * 3);
    } else if (currentIndex <= data.reviews.length * 4) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + data.reviews.length * 3);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };
  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const realIndex = (currentIndex + data.reviews.length * 10) % data.reviews.length;

  return (
    <section id="testimonials" className="py-8 lg:py-10 relative overflow-hidden bg-[#fbf7f5] scroll-mt-20">
      {/* Full Background Image */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ backgroundImage: `url('${data.bg_image}')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
      />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 xl:px-24 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-2 lg:mb-3">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-1.5"
          >
            <div className="flex justify-center items-center gap-2 mb-2 w-full">
              <span className="w-12 sm:w-24 h-[1px] bg-[#b66f50] opacity-40"></span>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#b66f50] opacity-60"></div>
              <div className="text-[#b66f50] px-1">
                <LotusIcon size={22} />
              </div>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#b66f50] opacity-60"></div>
              <span className="w-12 sm:w-24 h-[1px] bg-[#b66f50] opacity-40"></span>
            </div>
            <span className="text-[#b66f50] font-bold tracking-[0.3em] text-[12px] sm:text-[13px] uppercase whitespace-nowrap">
              {data.subtitle}
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[44px] md:text-[54px] lg:text-[62px] font-medium font-serif text-[#2b120f] mb-1.5 leading-tight tracking-tight"
          >
            {data.title_line1}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#69524d] text-[15px] sm:text-[16px] max-w-2xl mx-auto leading-relaxed whitespace-pre-line"
          >
            {data.description}
          </motion.p>
        </div>

        {/* Carousel / Grid Area */}
        <div className="relative">
          {/* Navigation Arrows (Desktop) */}
          <div 
            onClick={prevSlide}
            className="hidden lg:flex absolute top-[55%] -left-3 lg:-left-6 -translate-y-1/2 -translate-x-full w-12 h-12 rounded-full border border-[#e5d3cc] items-center justify-center text-[#4a211c] hover:bg-[#f6ece8] transition-colors cursor-pointer z-20 shadow-xs"
          >
            <ChevronLeft size={24} />
          </div>
          <div 
            onClick={nextSlide}
            className="hidden lg:flex absolute top-[55%] -right-3 lg:-right-6 -translate-y-1/2 translate-x-full w-12 h-12 rounded-full border border-[#e5d3cc] items-center justify-center text-[#4a211c] hover:bg-[#f6ece8] transition-colors cursor-pointer z-20 shadow-xs"
          >
            <ChevronRight size={24} />
          </div>

          <div className="overflow-hidden pt-8 pb-8 px-2 -mx-2">
            <div className="flex">
              {extendedReviews.map((review, idx) => (
                <div
                  key={idx}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-2.5"
                  style={{ 
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: isTransitioning ? 'transform 700ms ease-in-out' : 'none'
                  }}
                  onTransitionEnd={idx === currentIndex ? handleTransitionEnd : undefined}
                >
                  <div className="bg-white rounded-[20px] px-6 pb-6 pt-10 relative shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#e5d3cc]/60 flex flex-col h-full mx-auto max-w-[95%] sm:max-w-none">
                    
                    {/* Floating Quote Badge */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[48px] h-[48px] rounded-full bg-[#4a211c] flex items-center justify-center text-[#b66f50] shadow-md">
                      <span className="font-serif text-[32px] leading-none pt-3.5 tracking-tighter">“</span>
                    </div>
                    
                    {/* Rating Stars */}
                    <div className="flex gap-0.5 mb-4 justify-center sm:justify-start">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < review.rating ? "fill-[#b66f50] text-[#b66f50]" : "fill-gray-200 text-gray-200"}
                        />
                      ))}
                    </div>
                    
                    {/* Review Text */}
                    <p className="text-[#69524d] text-[13.5px] font-medium leading-[1.65] mb-5 flex-grow text-center sm:text-left">
                      {review.text}
                    </p>
                    
                    {/* Divider */}
                    <div className="h-[1px] w-full bg-[#e5d3cc]/40 mb-5"></div>
                    
                    {/* Avatar & Info */}
                    <div className="relative flex items-center gap-3.5 mt-auto justify-center sm:justify-start">
                      <div className="w-[48px] h-[48px] rounded-full overflow-hidden flex-shrink-0 shadow-sm border border-[#e5d3cc]/60">
                        <img
                          src={review.avatar}
                          alt={review.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="z-10 relative text-left">
                        <h4 className="font-bold text-[#2b120f] text-[13px] uppercase tracking-wide mb-0.5">{review.author}</h4>
                        <p className="text-[#b66f50] font-medium text-[12px] capitalize">{review.role}</p>
                      </div>
                      
                      {/* Large Bottom Quote */}
                      <div className="absolute bottom-0 right-0 text-[#e5d3cc]/40 font-serif text-[50px] leading-none pointer-events-none translate-y-1">
                        ”
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2.5 mt-2 mb-6 relative z-20">
            {data.reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentIndex(data.reviews.length + idx);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${realIndex === idx ? 'bg-[#4a211c]' : 'bg-white border border-[#4a211c]'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
