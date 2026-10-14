import React from 'react';
import { common, pages, sections } from '@/components/types';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Breadcrumb from '@/components/sections/Breadcrumb';
import About from '@/components/sections/About';
import Team from '@/components/sections/Team';
import WhyChooseUs from '@/components/sections/WhyChooseUs';

export const metadata = {
  title: pages.about?.metadata?.title || 'About Us | Serenity Spa',
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans text-stone-800 overflow-x-hidden">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb title={pages.about?.title || "About Us"} breadcrumb="ABOUT" />
        <About data={sections.about} hideButton />
        <Team data={sections.team} />
        <WhyChooseUs data={sections.feature} />
      </main>
      <Footer data={common.Footer} />
    </div>
  );
}
