"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin } from 'lucide-react';

export default function Hero() {
  const [address, setAddress] = useState('');

  return (
    <section className="relative bg-gradient-to-r from-purple-600 to-purple-800 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Groceries delivered in <span className="text-yellow-300">10 minutes</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Order your daily essentials and get them delivered to your doorstep in minutes.
            </p>
            
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <p className="text-gray-700 font-medium mb-2">Enter your delivery address</p>
              <div className="flex">
                <div className="relative flex-grow">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input 
                    type="text" 
                    placeholder="Enter your full address" 
                    className="w-full pl-10 border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <Button className="ml-2 bg-purple-600 hover:bg-purple-700">
                  Find Food
                </Button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center">
                <div className="bg-white rounded-full p-1">
                  <div className="bg-green-500 rounded-full h-3 w-3"></div>
                </div>
                <span className="ml-2">10 min delivery</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white rounded-full p-1">
                  <div className="bg-green-500 rounded-full h-3 w-3"></div>
                </div>
                <span className="ml-2">Best prices & offers</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white rounded-full p-1">
                  <div className="bg-green-500 rounded-full h-3 w-3"></div>
                </div>
                <span className="ml-2">Wide assortment</span>
              </div>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="relative h-[400px] w-full">
              <Image 
                src="https://images.unsplash.com/photo-1543168256-418811576931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Grocery delivery"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}