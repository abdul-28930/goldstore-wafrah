"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-amber-700 mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">The product you are looking for does not exist or has been removed.</p>
        <Link href="/" className="inline-block bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors">
          Return to Home
        </Link>
      </div>
    );
  }

  // Format price in Indian Rupees
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
            <Image
              src={product.imageSrc}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        {/* Product Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-amber-800 mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.brand}</p>
          
          <div className="mb-6">
            {product.salePrice ? (
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-amber-700">{formatPrice(product.salePrice)}</span>
                <span className="text-lg text-gray-500 line-through">{formatPrice(product.price)}</span>
                <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm">
                  {Math.round(((product.price - product.salePrice) / product.price) * 100)}% OFF
                </span>
              </div>
            ) : (
              <span className="text-2xl font-bold text-amber-700">{formatPrice(product.price)}</span>
            )}
          </div>
          
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-2">Product Description</h2>
            <p className="text-gray-600">
              This exquisite {product.name.toLowerCase()} is crafted with the finest materials and attention to detail. 
              Perfect for special occasions or everyday elegance, this piece will add a touch of luxury to any outfit.
            </p>
          </div>
          
          <div className="flex gap-4 mb-8">
            <button className="flex-1 bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition-colors">
              Add to Cart
            </button>
            <button className="border border-amber-600 text-amber-600 px-4 py-3 rounded-md hover:bg-amber-50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-2">Product Details</h2>
            <ul className="text-gray-600 space-y-2">
              <li><span className="font-medium">Category:</span> {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</li>
              <li><span className="font-medium">Brand:</span> {product.brand}</li>
              <li><span className="font-medium">SKU:</span> {product.id}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
