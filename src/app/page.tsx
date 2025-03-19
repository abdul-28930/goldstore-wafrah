import { FC } from 'react';
import HeroBanner from '@/components/HeroBanner';
import CategorySection from '@/components/CategorySection';
import ProductSection from '@/components/ProductSection';
import StoreLocationsSection from '@/components/StoreLocationsSection';
import TrustBadgesSection from '@/components/TrustBadgesSection';
import Testimonials from '@/components/Testimonials';
import WhatsAppButton from '@/components/WhatsAppButton';
import { getNewArrivals, getTrendingProducts, getSaleProducts } from '@/data/products';

const Home: FC = () => {
  const newArrivals = getNewArrivals();
  const trendingProducts = getTrendingProducts();
  const saleProducts = getSaleProducts();

  return (
    <main>
      <HeroBanner />
      
      <CategorySection />
      
      <ProductSection 
        title="NEW ARRIVALS" 
        products={newArrivals}
        viewAllLink="/collections/new-arrivals"
      />
      
      <ProductSection 
        title="TRENDING NOW" 
        products={trendingProducts}
        viewAllLink="/collections/trending"
        bgColor="bg-amber-50"
      />
      
      <Testimonials />
      
      <ProductSection 
        title="ON SALE" 
        products={saleProducts}
        viewAllLink="/collections/sale"
      />
      
      <StoreLocationsSection />
      
      <TrustBadgesSection />
      
      <WhatsAppButton phoneNumber="+919876543210" />
    </main>
  );
};

export default Home;
