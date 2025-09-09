import React from 'react';

const ContentTypes = () => {
  const contentItems = [
    {
      name: 'Product Photos',
      description: 'High-quality product images optimized for each platform',
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21h-18v-18h18v18zm-2-2v-14h-14v14h14zm-4-10c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm-4 4l-4 4v2h12v-6l-4-4z"/>
        </svg>
      ),
      iconBg: 'bg-blue-100'
    },
    {
      name: 'Video Content',
      description: 'Engaging product videos, demos, and ads',
      icon: (
        <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
      ),

      
      iconBg: 'bg-purple-100'
    },
    {
      name: 'Carousel Posts',
      description: 'Multi-slide content that tells your product story',
      icon: (
        <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 17h-14v-14h14v14zM19 19v-16h-16v16h16zm2-18v16h-18v-16h18zm-2 14v-12h-14v12h14z"/>
        </svg>
      ),
      iconBg: 'bg-pink-100'
    },
    {
      name: 'Ad Copy & Captions',
      description: 'Platform-optimized text content for maximum engagement',
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 17H6v-2h12v2zm-4-4H6v-2h8v2zm4-4H6V7h12v2z"/>
        </svg>
      ),
      iconBg: 'bg-yellow-100'
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
          Create Every Type of Platform-Specific Content
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Our AI generates content optimized for each platform's unique specifications and
          audience preferences
        </p>

        {/* Content Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-6 rounded-3xl shadow-lg border border-gray-100 text-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${item.iconBg}`}>
                {item.icon}
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-1">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentTypes;
