import React from 'react';
import { common, pages, sections } from '@/components/types';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Breadcrumb from '@/components/sections/Breadcrumb';
import Services from '@/components/sections/Services';

export const metadata = {
  title: pages.services?.metadata?.title || 'Our Services | Serenity Spa',
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans text-stone-800 overflow-x-hidden">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb title={pages.services?.title || "Our Services"} breadcrumb="OUR SERVICES" />
        <Services data={sections.services} isGrid={true} />
      </main>
      <Footer data={common.Footer} />
    </div>
  );
}
