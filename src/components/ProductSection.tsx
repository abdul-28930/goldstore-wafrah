import { FC } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/data/products';

interface ProductSectionProps {
  title: string;
  viewAllLink?: string;
  products: Product[];
  bgColor?: string;
}

const ProductSection: FC<ProductSectionProps> = ({ 
  title, 
  products,
  bgColor = 'bg-white'
}) => {
  return (
    <section className={`py-12 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-800">{title}</h2>
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
