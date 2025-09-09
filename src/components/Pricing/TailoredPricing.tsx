import React from 'react';

const TailoredPricing = () => {
  return (
    <section className="bg-white md:py-12 lg:py-20 flex items-start justify-center min-h-full">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Tailored Pricing for Your Business Needs
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          We offer customized pricing plans designed to fit your specific product marketing
          requirements
        </p>
        <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-medium shadow-sm">
          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v6h-2v-6zm0 8h2v2h-2v-2z" />
          </svg>
          <span className="text-sm md:text-base">All plans include a 14-day free trial, no credit card required</span>
        </div>
      </div>
    </section>
  );
};

export default TailoredPricing;
