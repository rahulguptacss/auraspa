"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FooterProps } from '../../types';
import { MapPin, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaDribbble, FaLinkedinIn } from 'react-icons/fa';
import { motion, Variants, AnimatePresence } from 'framer-motion';

const LotusIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 22C12 22 15.5 19 15.5 13C15.5 11 13 8 12 4C11 8 8.5 11 8.5 13C8.5 19 12 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 22C12 22 19 20 21 14C21.6667 12 21 9 19 8C19 11 15 14 12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 22C12 22 5 20 3 14C2.33333 12 3 9 5 8C5 11 9 14 12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.5 13C17 11 19 10 20 10C19 8 17 7 15 7C14.5 9 14 11 13 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.5 13C7 11 5 10 4 10C5 8 7 7 9 7C9.5 9 10 11 11 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const iconMap: Record<string, React.ReactNode> = {
  Facebook: <FaFacebookF size={14} />,
  Instagram: <FaInstagram size={14} />,
  Dribbble: <FaDribbble size={14} />,
  Linkedin: <FaLinkedinIn size={14} />,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Footer({ data }: FooterProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleSection = (section: string) => {
    if (window.innerWidth < 1024) {
      setOpenSection(openSection === section ? null : section);
    }
  };

  return (
    <footer className="bg-[#293623] text-[#dcdcdc] pt-10 pb-6 relative overflow-hidden border-t-4 border-[#d6a655]">

      {/* Container */}
      <motion.div 
        className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >

        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-8">

          {/* Column 1: Logo & About */}
          <motion.div variants={itemVariants} className="lg:col-span-3 lg:pr-10 lg:border-r border-[#ffffff20] border-b lg:border-b-0 pb-8 lg:pb-0 mb-2 lg:mb-0">
            <Link href="/" className="flex items-center mb-2 lg:mb-0 -mt-4 lg:-mt-6">
              <Image
                src="/logo/logo.webp"
                alt={data.logo_text}
                width={400}
                height={140}
                className="w-auto h-28 object-contain"
              />
            </Link>
            <p className="text-[#c0c0c0] text-[14px] leading-[1.8] mb-5 max-w-[280px]">
              {data.description}
            </p>
            <div className="flex gap-4">
              {data.socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-[#d6a655] flex items-center justify-center text-white hover:bg-[#d6a655] hover:text-[#2a3c26] transition-colors"
                >
                  {iconMap[social.icon]}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-3 lg:px-8 lg:border-r border-[#ffffff20] border-b lg:border-b-0 py-5 lg:py-0">
            <div 
              className="flex justify-between items-center cursor-pointer lg:cursor-default"
              onClick={() => toggleSection('quick_links')}
            >
              <h4 className="text-[20px] lg:text-[22px] font-serif text-white m-0 lg:mb-2">{data.quick_links ? "Quick Links" : ""}</h4>
              <ChevronDown className={`lg:hidden text-[#d6a655] transition-transform ${openSection === 'quick_links' ? 'rotate-180' : ''}`} />
            </div>
            <div className="hidden lg:block w-8 h-[2px] bg-[#d6a655] mb-6"></div>
            <div className={`overflow-hidden transition-all duration-300 lg:max-h-none lg:opacity-100 ${openSection === 'quick_links' ? 'max-h-[500px] opacity-100 mt-5' : 'max-h-0 opacity-0 lg:mt-0'}`}>
              <ul className="space-y-4 pb-2 lg:pb-0">
                {data.quick_links?.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-[#dcdcdc] text-[15px] hover:text-[#d6a655] transition-colors flex items-center gap-3 whitespace-nowrap">
                      <LotusIcon className="text-[#d6a655] shrink-0" size={16} />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Column 3: Our Services */}
          <motion.div variants={itemVariants} className="lg:col-span-3 lg:px-8 lg:border-r border-[#ffffff20] border-b lg:border-b-0 py-5 lg:py-0">
            <div 
              className="flex justify-between items-center cursor-pointer lg:cursor-default"
              onClick={() => toggleSection('our_services')}
            >
              <h4 className="text-[20px] lg:text-[22px] font-serif text-white m-0 lg:mb-2">{data.our_services ? "Our Services" : ""}</h4>
              <ChevronDown className={`lg:hidden text-[#d6a655] transition-transform ${openSection === 'our_services' ? 'rotate-180' : ''}`} />
            </div>
            <div className="hidden lg:block w-8 h-[2px] bg-[#d6a655] mb-6"></div>
            <div className={`overflow-hidden transition-all duration-300 lg:max-h-none lg:opacity-100 ${openSection === 'our_services' ? 'max-h-[500px] opacity-100 mt-5' : 'max-h-0 opacity-0 lg:mt-0'}`}>
              <ul className="space-y-4 pb-2 lg:pb-0">
                {data.our_services?.map((service, idx) => (
                  <li key={idx}>
                    <Link href={service.href} className="text-[#dcdcdc] text-[15px] hover:text-[#d6a655] transition-colors flex items-center gap-3 whitespace-nowrap">
                      <LotusIcon className="text-[#d6a655] shrink-0" size={16} />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-3 lg:pl-10 py-5 lg:py-0">
            <div 
              className="flex justify-between items-center cursor-pointer lg:cursor-default"
              onClick={() => toggleSection('contact_info')}
            >
              <h4 className="text-[20px] lg:text-[22px] font-serif text-white m-0 lg:mb-2">Contact Information</h4>
              <ChevronDown className={`lg:hidden text-[#d6a655] transition-transform ${openSection === 'contact_info' ? 'rotate-180' : ''}`} />
            </div>
            <div className="hidden lg:block w-8 h-[2px] bg-[#d6a655] mb-6"></div>
            <div className={`overflow-hidden transition-all duration-300 lg:max-h-none lg:opacity-100 ${openSection === 'contact_info' ? 'max-h-[800px] opacity-100 mt-5' : 'max-h-0 opacity-0 lg:mt-0'}`}>
              <ul className="space-y-4 pb-2 lg:pb-0">
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 shrink-0 rounded-full border border-[#d6a655] flex items-center justify-center text-[#d6a655]">
                    <MapPin size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#d6a655] font-medium text-[15px] mb-1">{data.contact.address_label}</span>
                    <span className="text-[#dcdcdc] text-[14px] leading-relaxed whitespace-pre-line">{data.contact.address}</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 shrink-0 rounded-full border border-[#d6a655] flex items-center justify-center text-[#d6a655]">
                    <Phone size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#d6a655] font-medium text-[15px] mb-1">{data.contact.phone_label}</span>
                    <a href={`tel:${data.contact.phone.replace(/[^\d+]/g, '')}`} className="text-[#dcdcdc] text-[14px] hover:text-white transition-colors">{data.contact.phone}</a>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 shrink-0 rounded-full border border-[#d6a655] flex items-center justify-center text-[#d6a655]">
                    <Mail size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#d6a655] font-medium text-[15px] mb-1">{data.contact.email_label}</span>
                    <a href={`mailto:${data.contact.email}`} className="text-[#dcdcdc] text-[14px] hover:text-white transition-colors">{data.contact.email}</a>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Bottom Copyright */}
        <motion.div variants={itemVariants} className="border-t border-[#ffffff20] pt-6 flex justify-center text-[#a0a0a0] text-[14px]">
          <p>{data.copyright}</p>
        </motion.div>

      </motion.div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 p-3 bg-[#d6a655] text-white rounded-full shadow-lg hover:bg-[#c59648] transition-colors focus:outline-none"
            aria-label="Back to top"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
