import { common, sections } from '@/components/types';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import ThankYou from '@/components/sections/ThankYou';

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans text-stone-800">
      <Header data={common.Header} />
      <main className="w-full flex-1 flex flex-col">
        <ThankYou data={sections.thank_you} />
      </main>
      <Footer data={common.Footer} />
    </div>
  );
}
