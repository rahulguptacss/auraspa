"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HeaderProps } from '../../types';
import { Menu, X } from 'lucide-react';
import { FaCalendar } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header({ data }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#212f1e] shadow-lg py-1.5' : 'bg-transparent py-2.5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo/logo.webp" 
            alt={data.logo_text} 
            width={350} 
            height={120} 
            className={`w-auto object-contain transition-all duration-300 ${
              isScrolled ? 'h-16' : 'h-24'
            }`}
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {data.links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className={`text-[17px] font-semibold transition-colors hover:text-[#d7ad64] ${
                (pathname === link.href || (pathname === '/' && link.href === '/'))
                  ? 'text-[#d7ad64] border-b-2 border-[#d7ad64] pb-1' 
                  : 'text-white pb-1 border-b-2 border-transparent'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Action Button (Hidden on Mobile) */}
          <Link
            href={data.button_link}
            className="hidden sm:inline-flex items-center justify-center gap-3 bg-white px-5 py-3.5 rounded-[10px] text-[14px] font-bold uppercase tracking-wider transition hover:bg-gray-50"
          >
            <FaCalendar className="text-[#e7aa40] text-[20px]" />
            <span className="text-[#8a5d19] whitespace-nowrap">{data.button_text}</span>
          </Link>

          {/* Menu Toggle */}
          <button
            className="lg:hidden text-white hover:text-[#d7ad64] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-full left-0 w-full bg-[#212f1e] shadow-lg lg:hidden overflow-hidden"
          >
          <div className="flex flex-col p-6 space-y-4">
            {data.links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className={`text-lg font-medium hover:text-[#d7ad64] ${
                  (pathname === link.href || (pathname === '/' && link.href === '/'))
                    ? 'text-[#d7ad64]' : 'text-white'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href={data.button_link}
              className="inline-flex items-center justify-center gap-3 bg-white px-5 py-4 rounded-[10px] text-[15px] font-bold uppercase tracking-wider transition hover:bg-gray-50 mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaCalendar size={20} className="text-[#e7aa40]" />
              <span className="text-[#8a5d19]">{data.button_text}</span>
            </Link>
          </div>
        </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
