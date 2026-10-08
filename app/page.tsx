import React from 'react';
import { common, pages, sections } from '@/components/types';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import VideoPromo from '@/components/sections/VideoPromo';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Packages from '@/components/sections/Packages';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export const metadata = {
  title: pages.home.metadata.title,
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans text-stone-800 overflow-x-hidden">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Hero data={sections.hero} />
        <About data={sections.about} />
        <Services data={sections.services} />
        <VideoPromo data={sections.videoPromo} />
        <WhyChooseUs data={sections.feature} />
        <Packages data={sections.packages} />
        <Testimonials data={sections.testimonials} />
        <CTA data={sections.cta} />
      </main>
      <Footer data={common.Footer} />
    </div>
  );
}
