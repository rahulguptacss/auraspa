import { common, sections } from '@/components/types';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Breadcrumb from '@/components/sections/Breadcrumb';
import Gallery from '@/components/sections/Gallery';

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans text-stone-800">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb title="Our Gallery" breadcrumb="HOME / OUR GALLERY" />
        <Gallery data={sections.gallery} />
      </main>
      <Footer data={common.Footer} />
    </div>
  );
}
