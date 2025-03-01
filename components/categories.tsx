"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  { id: 1, name: 'Fruits & Vegetables', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
  { id: 2, name: 'Dairy & Breakfast', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
  { id: 3, name: 'Snacks & Munchies', image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
  { id: 4, name: 'Instant & Frozen Food', image: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
  { id: 5, name: 'Tea, Coffee & Drinks', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80' },
  { id: 6, name: 'Atta, Rice & Dal', image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
  { id: 7, name: 'Personal Care', image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
  { id: 8, name: 'Home & Cleaning', image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
];

export default function Categories() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 6;
  
  const nextSlide = () => {
    setStartIndex((prevIndex) => 
      prevIndex + itemsToShow >= categories.length ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setStartIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, categories.length - itemsToShow) : prevIndex - 1
    );
  };
  
  const visibleCategories = categories.slice(startIndex, startIndex + itemsToShow);
  
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Shop by Category</h2>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {visibleCategories.map((category) => (
            <Card key={category.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative h-32 w-full">
                  <Image 
                    src={category.image} 
                    alt={category.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-medium text-sm">{category.name}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}