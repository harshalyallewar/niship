import Header from '@/components/header';
import Hero from '@/components/hero';
import Categories from '@/components/categories';
import FeaturedProducts from '@/components/featured-products';
import HowItWorks from '@/components/how-it-works';
import Testimonials from '@/components/testimonials';
import AppDownload from '@/components/app-download';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <HowItWorks />
      <Testimonials />
      <AppDownload />
      <Footer />
    </main>
  );
}