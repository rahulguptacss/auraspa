'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HeaderProps, LinkType } from '../../types';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { FaCalendar } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

/** Desktop Navigation Item with multi-level dropdown flyout support */
function DesktopNavItem({
  link,
  active,
  isActive,
}: {
  link: LinkType;
  active: boolean;
  isActive: (href: string) => boolean;
}) {
  const hasChildren = Boolean(link.children && link.children.length > 0);

  if (!hasChildren) {
    return (
      <Link
        href={link.href}
        className={`text-[15.5px] xl:text-[16.5px] font-semibold transition-colors duration-200 relative py-1.5 ${
          active ? 'text-[#d7ad64]' : 'text-white/90 hover:text-[#d7ad64]'
        }`}
      >
        <span>{link.name}</span>
        {active && (
          <motion.div
            layoutId="sarenityUnderline"
            className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#d7ad64] rounded-full"
          />
        )}
      </Link>
    );
  }

  // Multi-level Dropdown
  return (
    <div className="group/nav relative py-1.5">
      <Link
        href={link.href}
        className={`inline-flex items-center gap-1.5 text-[15.5px] xl:text-[16.5px] font-semibold transition-colors duration-200 relative ${
          active ? 'text-[#d7ad64]' : 'text-white/90 group-hover/nav:text-[#d7ad64]'
        }`}
      >
        <span>{link.name}</span>
        <ChevronDown className="w-3.5 h-3.5 opacity-70 transition-transform duration-200 group-hover/nav:rotate-180 group-hover/nav:text-[#d7ad64]" />
        {active && (
          <motion.div
            layoutId="sarenityUnderline"
            className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#d7ad64] rounded-full"
          />
        )}
      </Link>

      {/* Level 1 Dropdown Card */}
      <div className="pointer-events-none absolute left-0 top-full pt-2 opacity-0 translate-y-2 transition-all duration-200 group-hover/nav:pointer-events-auto group-hover/nav:opacity-100 group-hover/nav:translate-y-0 focus-within:pointer-events-auto focus-within:opacity-100 focus-within:translate-y-0 z-50">
        <div className="min-w-[230px] rounded-2xl border border-[#d7ad64]/25 bg-[#1b2718]/98 backdrop-blur-xl p-2 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.65)]">
          <ul className="space-y-0.5">
            {link.children?.map((sub) => {
              const hasSubChildren = Boolean(sub.children && sub.children.length > 0);

              if (!hasSubChildren) {
                return (
                  <li key={sub.name}>
                    <Link
                      href={sub.href}
                      className={`block rounded-xl px-3.5 py-2 text-[13.5px] font-semibold transition-colors ${
                        isActive(sub.href)
                          ? 'bg-[#d7ad64]/20 text-[#d7ad64]'
                          : 'text-white/85 hover:bg-[#d7ad64]/15 hover:text-[#d7ad64]'
                      }`}
                    >
                      {sub.name}
                    </Link>
                  </li>
                );
              }

              // Level 1 item with Level 2 Flyout
              return (
                <li key={sub.name} className="group/sub relative">
                  <Link
                    href={sub.href}
                    className={`flex items-center justify-between rounded-xl px-3.5 py-2 text-[13.5px] font-semibold transition-colors ${
                      isActive(sub.href)
                        ? 'bg-[#d7ad64]/20 text-[#d7ad64]'
                        : 'text-white/85 hover:bg-[#d7ad64]/15 hover:text-[#d7ad64]'
                    }`}
                  >
                    <span>{sub.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-60 transition-transform duration-200 group-hover/sub:translate-x-0.5 group-hover/sub:text-[#d7ad64]" />
                  </Link>

                  {/* Level 2 Sub-Dropdown Card (Flyout to the right) */}
                  <div className="pointer-events-none absolute left-full top-0 pl-2 opacity-0 translate-x-2 transition-all duration-200 group-hover/sub:pointer-events-auto group-hover/sub:opacity-100 group-hover/sub:translate-x-0 focus-within:pointer-events-auto focus-within:opacity-100 focus-within:translate-x-0 z-50">
                    <div className="min-w-[210px] rounded-2xl border border-[#d7ad64]/25 bg-[#1b2718]/98 backdrop-blur-xl p-2 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.65)]">
                      <ul className="space-y-0.5">
                        {sub.children?.map((nested) => (
                          <li key={nested.name}>
                            <Link
                              href={nested.href}
                              className={`block rounded-xl px-3.5 py-2 text-[13px] font-semibold transition-colors ${
                                isActive(nested.href)
                                  ? 'bg-[#d7ad64]/20 text-[#d7ad64]'
                                  : 'text-white/85 hover:bg-[#d7ad64]/15 hover:text-[#d7ad64]'
                              }`}
                            >
                              {nested.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

/** Mobile Navigation Item with multi-level accordion support */
function MobileNavItem({
  link,
  active,
  isActive,
  onClose,
}: {
  link: LinkType;
  active: boolean;
  isActive: (href: string) => boolean;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [subExpanded, setSubExpanded] = useState<Record<string, boolean>>({});
  const hasChildren = Boolean(link.children && link.children.length > 0);

  const toggleSub = (name: string) => {
    setSubExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  if (!hasChildren) {
    return (
      <Link
        href={link.href}
        onClick={onClose}
        className={`block rounded-xl px-3.5 py-2.5 text-base font-semibold transition-colors ${
          active
            ? 'bg-[#d7ad64]/20 text-[#d7ad64]'
            : 'text-white/90 hover:bg-[#d7ad64]/10 hover:text-[#d7ad64]'
        }`}
      >
        {link.name}
      </Link>
    );
  }

  // Level 1 + Level 2 inside mobile drawer
  return (
    <div className="flex flex-col">
      <div
        className={`flex items-center justify-between rounded-xl px-3.5 py-2 text-base font-semibold ${
          active || expanded ? 'bg-[#d7ad64]/15' : 'hover:bg-[#d7ad64]/10'
        }`}
      >
        <Link
          href={link.href}
          onClick={(e) => {
            if (link.href === '#' || !link.href) {
              e.preventDefault();
              setExpanded(!expanded);
            } else {
              onClose();
            }
          }}
          className={`flex-1 py-1 transition ${
            active || expanded ? 'text-[#d7ad64]' : 'text-white/90'
          }`}
        >
          {link.name}
        </Link>
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label={`Toggle ${link.name} menu`}
          className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all cursor-pointer ${
            expanded
              ? 'border-[#d7ad64] text-[#d7ad64] bg-[#d7ad64]/20'
              : 'border-white/20 text-white/70 hover:border-[#d7ad64] hover:text-[#d7ad64]'
          }`}
        >
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              expanded ? 'rotate-180 text-[#d7ad64]' : ''
            }`}
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden pl-3 pr-1 my-1 space-y-1 border-l-2 border-[#d7ad64]/35 ml-3.5"
          >
            {link.children?.map((sub) => {
              const hasSubChildren = Boolean(sub.children && sub.children.length > 0);
              const isSubActive = isActive(sub.href);
              const isSubOpen = Boolean(subExpanded[sub.name]);

              if (!hasSubChildren) {
                return (
                  <li key={sub.name}>
                    <Link
                      href={sub.href}
                      onClick={onClose}
                      className={`block rounded-lg px-3 py-2 text-[13.5px] font-semibold transition ${
                        isSubActive
                          ? 'bg-[#d7ad64]/20 text-[#d7ad64]'
                          : 'text-white/80 hover:bg-[#d7ad64]/10 hover:text-[#d7ad64]'
                      }`}
                    >
                      {sub.name}
                    </Link>
                  </li>
                );
              }

              // Level 2 inside mobile drawer
              return (
                <li key={sub.name} className="flex flex-col">
                  <div
                    className={`flex items-center justify-between rounded-lg px-3 py-1.5 text-[13.5px] font-semibold ${
                      isSubActive || isSubOpen ? 'bg-[#d7ad64]/15' : 'hover:bg-[#d7ad64]/10'
                    }`}
                  >
                    <Link
                      href={sub.href}
                      onClick={(e) => {
                        if (sub.href === '#' || !sub.href) {
                          e.preventDefault();
                          toggleSub(sub.name);
                        } else {
                          onClose();
                        }
                      }}
                      className={`flex-1 py-1 transition ${
                        isSubActive || isSubOpen ? 'text-[#d7ad64]' : 'text-white/85'
                      }`}
                    >
                      {sub.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleSub(sub.name)}
                      aria-expanded={isSubOpen}
                      aria-label={`Toggle ${sub.name} nested menu`}
                      className={`flex h-7 w-7 items-center justify-center rounded-full border transition-all cursor-pointer ${
                        isSubOpen
                          ? 'border-[#d7ad64] text-[#d7ad64] bg-[#d7ad64]/20'
                          : 'border-white/20 text-white/70 hover:border-[#d7ad64] hover:text-[#d7ad64]'
                      }`}
                    >
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isSubOpen ? 'rotate-180 text-[#d7ad64]' : ''
                        }`}
                      />
                    </button>
                  </div>

                  <AnimatePresence initial={false}>
                    {isSubOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-3 pr-1 my-1 space-y-1 border-l border-[#d7ad64]/30 ml-3"
                      >
                        {sub.children?.map((nested) => (
                          <li key={nested.name}>
                            <Link
                              href={nested.href}
                              onClick={onClose}
                              className={`block rounded-md px-2.5 py-1.5 text-xs font-semibold transition ${
                                isActive(nested.href)
                                  ? 'bg-[#d7ad64]/20 text-[#d7ad64]'
                                  : 'text-white/75 hover:bg-[#d7ad64]/10 hover:text-[#d7ad64]'
                              }`}
                            >
                              {nested.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header({ data }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (!href || href === '#') return false;
    return pathname === href || (href !== '/' && pathname.startsWith(href));
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#212f1e]/98 backdrop-blur-md shadow-xl py-2.5 border-b border-[#d7ad64]/15'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-3 sm:py-4'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo/logo.webp"
            alt={data.logo_text || 'Serenity Spa'}
            width={350}
            height={120}
            priority
            className={`w-auto object-contain transition-all duration-300 ${
              isScrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-20 lg:h-24'
            }`}
          />
        </Link>

        {/* Desktop Navigation Links with Multi-Level Dropdowns */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7.5 whitespace-nowrap">
          {data.links?.map((link, idx) => (
            <DesktopNavItem
              key={link.name + (link.href || idx)}
              link={link}
              active={isActive(link.href)}
              isActive={isActive}
            />
          ))}
        </nav>

        {/* Right Actions: CTA Button + Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          {/* Action Button */}
          <Link
            href={data.button_link || '/book-appointment'}
            className="hidden sm:inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#f9f5ed] px-4.5 sm:px-5 py-3 rounded-xl text-[13px] sm:text-[14px] font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-black/25 active:scale-95 group"
          >
            <FaCalendar className="text-[#e7aa40] text-[18px] transition-transform duration-200 group-hover:scale-110" />
            <span className="text-[#8a5d19] whitespace-nowrap">{data.button_text || 'BOOK APPOINTMENT'}</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-xl text-white hover:text-[#d7ad64] hover:bg-white/10 transition-colors cursor-pointer"
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
            className="absolute top-full left-0 w-full bg-[#1b2718]/98 backdrop-blur-2xl shadow-2xl border-b border-[#d7ad64]/20 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-4 sm:p-6 space-y-1.5 max-h-[calc(100vh-100px)] overflow-y-auto">
              {data.links?.map((link) => (
                <MobileNavItem
                  key={link.name + link.href}
                  link={link}
                  active={isActive(link.href)}
                  isActive={isActive}
                  onClose={() => setMobileMenuOpen(false)}
                />
              ))}

              <div className="pt-3">
                <Link
                  href={data.button_link || '/book-appointment'}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#f9f5ed] px-5 py-3.5 rounded-xl text-[14px] font-bold uppercase tracking-wider transition-all duration-300 shadow-md text-[#8a5d19]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FaCalendar size={18} className="text-[#e7aa40]" />
                  <span>{data.button_text || 'BOOK APPOINTMENT'}</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
