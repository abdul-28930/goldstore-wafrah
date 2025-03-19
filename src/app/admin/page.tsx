"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { categories } from '@/data/categories';

interface ImagePreview {
  file: File;
  preview: string;
}

const AdminPage: React.FC = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Form state
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [launchDate, setLaunchDate] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<ImagePreview[]>([]);
  const [brand, setBrand] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Check authentication on page load
  useEffect(() => {
    // In a real app, you would check session/cookies
    // For this demo, we'll just check if the user came from the login page
    const checkAuth = () => {
      // For demo purposes, we're setting a flag in sessionStorage when login is successful
      // In a real app, you would use a more secure method like JWT tokens
      const isLoggedIn = sessionStorage.getItem('adminLoggedIn') === 'true';
      setIsAuthenticated(isLoggedIn);
      setIsLoading(false);
      
      // If not authenticated, redirect to login page
      if (!isLoggedIn) {
        router.push('/admin/login');
      }
    };
    
    checkAuth();
  }, [router]);

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages: ImagePreview[] = [];
      
      Array.from(e.target.files).forEach(file => {
        newImages.push({
          file,
          preview: URL.createObjectURL(file)
        });
      });
      
      setImages([...images, ...newImages]);
    }
  };

  // Remove image
  const removeImage = (index: number) => {
    const updatedImages = [...images];
    URL.revokeObjectURL(updatedImages[index].preview);
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send this data to your backend
    const productData = {
      id: productId,
      name: productName,
      category,
      price: parseFloat(price),
      launchDate,
      description,
      brand,
      // In a real app, you would upload these images to a storage service
      // and store the URLs in your database
      imageCount: images.length
    };
    
    console.log('Product data to be saved:', productData);
    
    // Show success message
    setSuccessMessage('Product added successfully!');
    
    // Clear form after 2 seconds
    setTimeout(() => {
      setProductId('');
      setProductName('');
      setCategory('');
      setPrice('');
      setLaunchDate('');
      setDescription('');
      setBrand('');
      
      // Clean up image previews
      images.forEach(img => URL.revokeObjectURL(img.preview));
      setImages([]);
      
      setSuccessMessage('');
    }, 2000);
  };

  // Handle logout
  const handleLogout = () => {
    sessionStorage.removeItem('adminLoggedIn');
    router.push('/admin/login');
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, this will redirect to login page
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-amber-800">Admin Dashboard</h1>
        <button 
          onClick={handleLogout}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
        >
          Logout
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold text-amber-700 mb-4">Add New Product</h2>
        
        {successMessage && (
          <div className="mb-6 p-3 bg-green-100 text-green-700 rounded">
            {successMessage}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="productId" className="block text-gray-700 mb-1">Product ID*</label>
              <input
                type="text"
                id="productId"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="productName" className="block text-gray-700 mb-1">Product Name*</label>
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="category" className="block text-gray-700 mb-1">Category*</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="brand" className="block text-gray-700 mb-1">Brand*</label>
              <input
                type="text"
                id="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="price" className="block text-gray-700 mb-1">Price (₹)*</label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                min="0"
                step="0.01"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="launchDate" className="block text-gray-700 mb-1">Launch Date*</label>
              <input
                type="date"
                id="launchDate"
                value={launchDate}
                onChange={(e) => setLaunchDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="description" className="block text-gray-700 mb-1">Description*</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            ></textarea>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-1">Product Images*</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <input
                type="file"
                id="images"
                onChange={handleImageUpload}
                className="hidden"
                accept="image/*"
                multiple
              />
              <label
                htmlFor="images"
                className="cursor-pointer inline-block bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition-colors"
              >
                Upload Images
              </label>
              <p className="mt-2 text-sm text-gray-500">Click to upload multiple images</p>
            </div>
            
            {images.length > 0 && (
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {images.map((img, index) => (
                  <div key={index} className="relative group">
                    <div className="aspect-square relative overflow-hidden rounded-lg border border-gray-200">
                      <Image
                        src={img.preview}
                        alt={`Preview ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="text-right">
            <button
              type="submit"
              className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700 transition-colors"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
