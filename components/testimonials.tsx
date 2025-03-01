"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'Zepto has changed the way I shop for groceries. The delivery is super fast, and the products are always fresh. I love the convenience!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 2,
    name: 'Rahul Patel',
    location: 'Bangalore',
    rating: 4,
    text: 'I was skeptical about the 10-minute delivery claim, but they actually deliver within that time! The app is easy to use, and customer service is excellent.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 3,
    name: 'Ananya Gupta',
    location: 'Delhi',
    rating: 5,
    text: 'The quality of products is consistently good. I appreciate the wide selection and competitive prices. Zepto has become my go-to for all grocery needs.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    location: 'Hyderabad',
    rating: 5,
    text: 'Zepto delivers on its promise of quick delivery. The app is intuitive, and I love the real-time tracking feature. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
];

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = window?.innerWidth >= 1024 ? 3 : window?.innerWidth >= 768 ? 2 : 1;
  
  const nextSlide = () => {
    setStartIndex((prevIndex) => 
      prevIndex + itemsToShow >= testimonials.length ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setStartIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, testimonials.length - itemsToShow) : prevIndex - 1
    );
  };
  
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + itemsToShow);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">What Our Customers Say</h2>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-600">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}