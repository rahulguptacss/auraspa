import React from 'react';
import Header from '@/components/sections/Header';
import Breadcrumb from '@/components/sections/Breadcrumb';
import ServiceDetails from '@/components/sections/ServiceDetails';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import { common, sections } from '@/components/types';

export const instant = false;

export function generateStaticParams() {
  return sections.services.items.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = sections.services.items.find((item) => item.slug === slug);
  return service ? { title: `${service.title} | Serenity Spa`, description: service.description } : { title: 'Service Details | Serenity Spa' };
}

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = sections.services.items.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-50 text-2xl text-stone-800">
        Service not found
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans text-stone-800">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb title="Service Details" breadcrumb="HOME / SERVICE DETAILS" />
        <ServiceDetails service={service} allServices={sections.services.items} data={service.details || sections.serviceDetails} />
        <CTA data={sections.cta} />
      </main>
      <Footer data={common.Footer} />
    </div>
  );
}
