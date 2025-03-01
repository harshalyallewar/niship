"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Fresh Organic Bananas',
    price: 4.99,
    originalPrice: 5.99,
    discount: '17%',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    weight: '1 kg',
  },
  {
    id: 2,
    name: 'Fresh Red Apples',
    price: 3.99,
    originalPrice: 4.99,
    discount: '20%',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    weight: '500 g',
  },
  {
    id: 3,
    name: 'Whole Milk',
    price: 2.49,
    originalPrice: 2.99,
    discount: '17%',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
    weight: '1 L',
  },
  {
    id: 4,
    name: 'Brown Eggs',
    price: 3.29,
    originalPrice: 3.99,
    discount: '18%',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    weight: '12 pcs',
  },
  {
    id: 5,
    name: 'Avocado',
    price: 2.99,
    originalPrice: 3.49,
    discount: '14%',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80',
    weight: '2 pcs',
  },
  {
    id: 6,
    name: 'Organic Tomatoes',
    price: 1.99,
    originalPrice: 2.49,
    discount: '20%',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    weight: '500 g',
  },
  {
    id: 7,
    name: 'Whole Wheat Bread',
    price: 2.79,
    originalPrice: 3.29,
    discount: '15%',
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    weight: '400 g',
  },
  {
    id: 8,
    name: 'Greek Yogurt',
    price: 3.49,
    originalPrice: 3.99,
    discount: '13%',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    weight: '500 g',
  },
];

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState('bestsellers');
  
  const tabs = [
    { id: 'bestsellers', label: 'Bestsellers' },
    { id: 'offers', label: 'Top Offers' },
    { id: 'new', label: 'New Arrivals' },
  ];
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Products</h2>
        
        <div className="flex overflow-x-auto space-x-2 mb-8 pb-2">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              className={`rounded-full ${activeTab === tab.id ? 'bg-purple-600 hover:bg-purple-700' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-3">
                <div className="relative">
                  <div className="relative h-40 w-full mb-3">
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-md"
                    />
                  </div>
                  <Badge className="absolute top-2 left-2 bg-red-500">{product.discount} OFF</Badge>
                </div>
                
                <div className="flex items-center mb-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm ml-1">{product.rating}</span>
                </div>
                
                <h3 className="font-medium text-sm mb-1 line-clamp-2">{product.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{product.weight}</p>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-bold">₹{product.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">₹{product.originalPrice}</span>
                  </div>
                  <Button size="sm" className="rounded-full h-8 w-8 p-0 bg-purple-600 hover:bg-purple-700">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button variant="outline" className="rounded-full border-purple-600 text-purple-600 hover:bg-purple-50">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}