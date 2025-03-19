import { FC } from 'react';
import Link from 'next/link';
import ProductCard from './ProductCard';
import { Product } from '@/data/products';

interface ProductSectionProps {
  title: string;
  viewAllLink: string;
  products: Product[];
  bgColor?: string;
}

const ProductSection: FC<ProductSectionProps> = ({ 
  title, 
  viewAllLink, 
  products,
  bgColor = 'bg-white'
}) => {
  return (
    <section className={`py-12 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-800">{title}</h2>
          <Link href={viewAllLink} className="text-amber-600 hover:text-amber-800 transition-colors">
            VIEW ALL
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
