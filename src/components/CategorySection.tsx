import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { categories } from '@/data/categories';

const CategorySection: FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-amber-50 to-amber-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-amber-800 mb-2">SHOP BY CATEGORY</h2>
          <p className="text-amber-700">Explore our exquisite collection of fine gold jewelry</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={category.link} className="group">
              <div className="relative overflow-hidden rounded-lg aspect-square shadow-md transition-transform duration-300 group-hover:shadow-xl group-hover:scale-105">
                <Image
                  src={category.imageSrc}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent flex items-end justify-center p-4">
                  <h3 className="text-white font-bold text-lg md:text-xl text-center">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link 
            href="/categories" 
            className="inline-block border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-6 py-3 font-medium transition-colors"
          >
            VIEW ALL CATEGORIES
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
