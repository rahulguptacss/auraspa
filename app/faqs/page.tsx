import { common, sections } from '@/components/types';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Breadcrumb from '@/components/sections/Breadcrumb';
import FAQ from '@/components/sections/FAQ';

export default function FAQsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans text-stone-800">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb title="Faqs" breadcrumb="HOME / FAQS" />
        <FAQ data={sections.faq} />
      </main>
      <Footer data={common.Footer} />
    </div>
  );
}
