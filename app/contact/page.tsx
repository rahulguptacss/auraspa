import { common, sections } from '@/components/types';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Breadcrumb from '@/components/sections/Breadcrumb';
import Contact from '@/components/sections/Contact';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans text-stone-800">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb title="Contact Us" breadcrumb="HOME / CONTACT US" />
        <Contact data={sections.contact} />
      </main>
      <Footer data={common.Footer} />
    </div>
  );
}
