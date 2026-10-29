'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { HeaderProps, LinkType } from '../../types';
import { Menu, X, ChevronDown } from 'lucide-react';
import { FaCalendar } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header({ data }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to spy active sections
  useEffect(() => {
    const sectionIds = data.links
      .map((l) => l.href.replace('#', ''))
      .filter(Boolean);

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [data.links]);

  const scrollToSection = (targetId: string) => {
    if (!targetId || targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      return;
    }

    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const headerOffset = 80;
      const targetY = targetEl.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({
        top: Math.max(0, Math.round(targetY)),
        behavior: 'smooth',
      });
      setActiveSection(targetId);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      setMobileMenuOpen(false);

      scrollToSection(targetId);
      setTimeout(() => scrollToSection(targetId), 50);
    } else {
      setMobileMenuOpen(false);
    }
  };

  const isActive = (href: string) => {
    const targetId = href.replace('#', '');
    return activeSection === targetId;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#311310]/95 backdrop-blur-md shadow-xl py-2.5 border-b border-[#b66f50]/20'
          : 'bg-gradient-to-b from-black/75 via-[#311310]/40 to-transparent py-3 sm:py-4'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 shrink-0 cursor-pointer"
        >
          <Image
            src="/logo/logo.webp"
            alt={data.logo_text || 'Aura Spa'}
            width={350}
            height={120}
            priority
            className={`w-auto object-contain transition-all duration-300 ${
              isScrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-20 lg:h-24'
            }`}
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 whitespace-nowrap">
          {data.links?.map((link) => {
            const active = isActive(link.href);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[15px] xl:text-[16px] font-semibold transition-colors duration-200 relative py-1.5 cursor-pointer ${
                  active ? 'text-[#b66f50]' : 'text-white/90 hover:text-[#b66f50]'
                }`}
              >
                <span>{link.name}</span>
                {active && (
                  <motion.div
                    layoutId="auraUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#b66f50] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: CTA Button + Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          {/* Action Button */}
          <a
            href={data.button_link || '#book'}
            onClick={(e) => handleNavClick(e, data.button_link || '#book')}
            className="hidden sm:inline-flex items-center justify-center gap-2.5 bg-[#b66f50] hover:bg-[#c77c5d] text-white px-5 py-3 rounded-xl text-[13px] sm:text-[14px] font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-black/25 active:scale-95 group cursor-pointer"
          >
            <FaCalendar className="text-white text-[16px] transition-transform duration-200 group-hover:scale-110" />
            <span className="whitespace-nowrap">{data.button_text || 'BOOK APPOINTMENT'}</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-xl text-white hover:text-[#b66f50] hover:bg-white/10 transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 w-full bg-[#311310]/98 backdrop-blur-2xl shadow-2xl border-b border-[#b66f50]/20 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-4 sm:p-6 space-y-1.5 max-h-[calc(100vh-100px)] overflow-y-auto">
              {data.links?.map((link) => {
                const active = isActive(link.href);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block rounded-xl px-3.5 py-2.5 text-base font-semibold transition-colors cursor-pointer ${
                      active
                        ? 'bg-[#b66f50]/20 text-[#b66f50]'
                        : 'text-white/90 hover:bg-[#b66f50]/10 hover:text-[#b66f50]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="pt-3">
                <a
                  href={data.button_link || '#book'}
                  onClick={(e) => handleNavClick(e, data.button_link || '#book')}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#b66f50] hover:bg-[#c77c5d] text-white px-5 py-3.5 rounded-xl text-[14px] font-bold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
                >
                  <FaCalendar size={18} className="text-white" />
                  <span>{data.button_text || 'BOOK APPOINTMENT'}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
