"use client";

import React from 'react';
import Link from 'next/link';
import { AboutProps } from '../../types';
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

function Counter({ value }: { value: string }) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px" });
  
  const numberStr = value.replace(/[^0-9]/g, '');
  const endNum = parseInt(numberStr) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  React.useEffect(() => {
    if (inView) {
      if (endNum === 0) return;
      
      const duration = 2000;
      const increment = endNum / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= endNum) {
          setCount(endNum);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(current));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [inView, endNum]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function About({ data, hideButton = false }: AboutProps & { hideButton?: boolean }) {
  // Utility to split the label so it breaks like the screenshot
  const formatLabel = (label: string) => {
    const parts = label.split(' ');
    if (parts.length > 2) {
      return (
        <>
          {parts[0]}<br/>{parts.slice(1).join(' ')}
        </>
      );
    } else if (parts.length === 2) {
      return (
        <>
          {parts[0]}<br/>{parts[1]}
        </>
      );
    }
    return label;
  };

  return (
    <section id="about" className="py-16 bg-[#f6f5f0] relative overflow-hidden">
      {/* Decorative Leaf Graphic */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
        <img src={data.decoration_image} alt="Leaf graphic" className="w-[350px] lg:w-[450px] h-auto object-contain" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-20 items-center">
          
          {/* Images Left */}
          <div className="w-full lg:w-1/2 relative h-[550px] flex items-center justify-center">
            {/* Light Green Background Box */}
            <div className="absolute left-4 bottom-8 w-2/3 h-2/3 bg-[#e8eee3] rounded-[35px] -z-10" />
            
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src={data.image1}
              alt="Spa room"
              className="w-[75%] h-[420px] object-cover rounded-[35px] absolute top-4 left-0 shadow-lg"
            />
            
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src={data.image2}
              alt="Spa towels"
              className="w-[60%] h-[320px] object-cover rounded-[35px] absolute bottom-4 right-0 border-[10px] border-[#f6f5f0] z-20 shadow-xl"
            />
          </div>

          {/* Content Right */}
          <div className="w-full lg:w-1/2">
            <div className="mb-4">
              <span className="text-[#7c9270] font-semibold tracking-[0.2em] text-[13px] uppercase">
                {data.subtitle}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-[52px] font-serif text-[#162115] leading-[0.95] mb-6">
              {data.title_line1} <br/>
              <span className="text-[#162115]">{data.title_line2}</span>
            </h2>

            <p className="text-[#596558] leading-[1.8] text-[16px] mb-10 max-w-[480px]">
              {data.description}
            </p>

            <div className="grid grid-cols-3 gap-2 mb-10 max-w-[480px]">
              {data.stats.map((stat, idx) => (
                <div key={idx} className={`${idx !== 2 ? 'border-r border-[#d2d8ce]' : ''} pl-4 first:pl-0`}>
                  <div className="text-[40px] lg:text-[46px] font-serif text-[#33462c] mb-1 leading-none">
                    <Counter value={stat.value} />
                  </div>
                  <div className="text-[15px] text-[#596558] leading-snug font-medium">
                    {formatLabel(stat.label)}
                  </div>
                </div>
              ))}
            </div>

            {!hideButton && (
              <Link
                href={data.button.href}
                className="inline-flex items-center justify-center gap-2 bg-[#4a5e3d] text-white px-7 py-3.5 rounded-full text-[15px] font-medium transition-colors hover:bg-[#344529] shadow-md"
              >
                {data.button.text} <ArrowRight size={18} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
