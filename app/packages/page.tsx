import { common, sections } from '@/components/types';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Breadcrumb from '@/components/sections/Breadcrumb';
import PackageGrid from '@/components/sections/PackageGrid';

export default function PackagesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans text-stone-800">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb title="Our Packages" breadcrumb="HOME / OUR PACKAGES" />
        <PackageGrid data={(sections as any).packageGrid} />
      </main>
      <Footer data={common.Footer} />
    </div>
  );
}
