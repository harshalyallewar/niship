import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const categories = [
    'Fruits & Vegetables',
    'Dairy & Breakfast',
    'Snacks & Munchies',
    'Instant & Frozen Food',
    'Tea, Coffee & Drinks',
    'Atta, Rice & Dal',
    'Personal Care',
    'Home & Cleaning',
  ];
  
  const cities = [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Hyderabad',
    'Chennai',
    'Kolkata',
    'Pune',
    'Ahmedabad',
  ];
  
  const aboutLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];
  
  const helpLinks = [
    { name: 'FAQs', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Refund Policy', href: '#' },
    { name: 'Shipping Policy', href: '#' },
  ];
  
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">We Deliver To</h3>
            <ul className="space-y-2">
              {cities.map((city, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">About Zepto</h3>
            <ul className="space-y-2">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-600 hover:text-purple-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Help & Support</h3>
            <ul className="space-y-2">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-600 hover:text-purple-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-bold mt-8 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="text-center text-gray-600">
          <p className="mb-4">© 2025 Zepto Clone. All rights reserved.</p>
          <p className="text-sm">
            This is a clone website created for demonstration purposes only. Not affiliated with the original Zepto.
          </p>
        </div>
      </div>
    </footer>
  );
}