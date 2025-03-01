import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function AppDownload() {
  return (
    <section className="py-16 bg-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="relative h-[500px] w-full">
              <Image 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Zepto mobile app"
                fill
                style={{ objectFit: 'contain' }}
                className="object-left"
              />
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Download the Zepto App
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Get groceries delivered in minutes. Enjoy exclusive app-only offers and a seamless shopping experience.
            </p>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-white rounded-full p-2 mr-4">
                  <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>10-minute delivery</span>
              </div>
              <div className="flex items-center mb-4">
                <div className="bg-white rounded-full p-2 mr-4">
                  <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Exclusive app-only offers</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white rounded-full p-2 mr-4">
                  <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Real-time order tracking</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative h-12 w-40">
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="relative h-12 w-40">
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on the App Store"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}