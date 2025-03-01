"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ShoppingCart, Menu, X, MapPin } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useState('Select your location');

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-24 mr-2">
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-purple-600">Zepto</span>
                </div>
              </div>
            </Link>
            
            {/* Location Selector */}
            <div className="hidden md:flex items-center ml-4 text-sm">
              <Button variant="ghost" className="flex items-center gap-1 text-gray-600">
                <MapPin size={16} />
                <span className="max-w-[150px] truncate">{location}</span>
              </Button>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                type="text" 
                placeholder="Search for products..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
          </div>

          {/* Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600">Login</Button>
            <Button variant="outline" className="flex items-center gap-2 text-purple-600 border-purple-600 hover:bg-purple-50">
              <ShoppingCart size={18} />
              <span>Cart</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="mt-4 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              type="text" 
              placeholder="Search for products..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-3">
              <Button variant="ghost" className="flex items-center justify-start gap-2 text-gray-600">
                <MapPin size={18} />
                <span>{location}</span>
              </Button>
              <Button variant="ghost" className="flex items-center justify-start text-gray-600">Login</Button>
              <Button variant="outline" className="flex items-center justify-start gap-2 text-purple-600 border-purple-600">
                <ShoppingCart size={18} />
                <span>Cart</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}