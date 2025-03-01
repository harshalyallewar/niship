import Image from 'next/image';

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: 'Place your order',
      description: 'Choose from a wide range of daily essentials',
      icon: '📱',
    },
    {
      id: 2,
      title: 'We pick & pack',
      description: 'Our team carefully selects the freshest items for you',
      icon: '🛒',
    },
    {
      id: 3,
      title: 'Delivery in minutes',
      description: 'Get your order delivered in 10 minutes or less',
      icon: '🚚',
    },
    {
      id: 4,
      title: 'Enjoy your items',
      description: 'Satisfaction guaranteed or get a refund',
      icon: '😊',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How Zepto Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We deliver your groceries in minutes. It's that simple.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              <div className="bg-purple-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">{step.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-purple-50 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Download the Zepto app
              </h3>
              <p className="text-gray-600 mb-6">
                Get a better experience and more offers when you use our mobile app
              </p>
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
            <div className="relative h-64 md:h-auto">
              <Image 
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                alt="Zepto mobile app"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}