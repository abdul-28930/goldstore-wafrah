import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { id, name, brand, price, imageSrc, salePrice } = product;
  
  // Format price in Indian Rupees
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="group">
      <div className="relative overflow-hidden bg-gray-100 rounded-lg aspect-square">
        <Link href={`/products/${id}`}>
          <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
        </Link>
        
        {/* Quick action buttons */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            className="bg-white text-amber-700 p-2 rounded-full shadow-md hover:bg-amber-50"
            aria-label="Add to wishlist"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </button>
          <button 
            className="bg-amber-600 text-white p-2 rounded-full shadow-md hover:bg-amber-700"
            aria-label="Add to cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </button>
        </div>
        
        {/* Sale badge */}
        {salePrice && (
          <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            SALE
          </div>
        )}
      </div>
      
      <div className="mt-4">
        <div className="text-xs text-amber-700 font-medium mb-1">{brand}</div>
        <Link href={`/products/${id}`} className="block">
          <h3 className="text-sm font-bold text-gray-800 hover:text-amber-600 transition-colors">{name}</h3>
        </Link>
        <div className="mt-2 flex items-center">
          {salePrice ? (
            <>
              <span className="text-lg font-bold text-amber-700">{formatPrice(salePrice)}</span>
              <span className="ml-2 text-sm text-gray-500 line-through">{formatPrice(price)}</span>
            </>
          ) : (
            <span className="text-lg font-bold text-amber-700">{formatPrice(price)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
