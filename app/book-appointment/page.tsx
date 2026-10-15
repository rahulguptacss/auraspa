import React from 'react';
import Header from '@/components/sections/Header';
import Breadcrumb from '@/components/sections/Breadcrumb';
import BookAppointment from '@/components/sections/BookAppointment';
import Footer from '@/components/sections/Footer';
import { common, sections } from '@/components/types';

export const metadata = {
  title: 'Book A Appointment | Serenity Spa',
  description: 'Book your relaxing spa appointment at Serenity Spa today.',
};

export default function BookAppointmentPage() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans text-stone-800">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb title="Book A Appointment" breadcrumb="HOME / BOOK A APPOINTMENT" />
        <BookAppointment data={(sections as any).bookAppointment} />
      </main>
      <Footer data={common.Footer} />
    </div>
  );
}
