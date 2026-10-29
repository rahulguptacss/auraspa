import React from 'react';
import { common, pages, sections } from '@/components/types';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import VideoPromo from '@/components/sections/VideoPromo';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import PackageGrid from '@/components/sections/PackageGrid';
import Gallery from '@/components/sections/Gallery';
import Team from '@/components/sections/Team';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import BookAppointment from '@/components/sections/BookAppointment';

export const metadata = {
  title: pages.home?.metadata?.title || 'Serenity Spa - Relax, Refresh & Rejuvenate',
  description: 'Experience ultimate relaxation and therapeutic care at Serenity Spa with our complete range of wellness treatments.',
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans text-stone-800 overflow-x-hidden">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Hero data={sections.hero} />
        <About data={sections.about} />
        <Services data={sections.services} />
        <WhyChooseUs data={sections.feature} />
        <VideoPromo data={sections.videoPromo} />
        <PackageGrid data={(sections as any).packageGrid} />
        <Gallery data={sections.gallery} />
        <Team data={sections.team} />
        <Testimonials data={sections.testimonials} />
        <FAQ data={sections.faq} />
        <BookAppointment data={(sections as any).bookAppointment} />
      </main>
      <Footer data={common.Footer} />
    </div>
  );
}
