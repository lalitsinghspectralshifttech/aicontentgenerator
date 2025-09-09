import React from 'react';

const PersonalizedHelp = () => {
  return (
    <section className="bg-teal-500 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
          Need Personalized Help?
        </h2>
        <p className="text-lg text-white text-opacity-80 mb-8">
          Our team of product marketing experts is ready to assist you with any questions or
          challenges.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="inline-flex items-center justify-center space-x-2 bg-white text-teal-600 px-8 py-3 rounded-full font-medium shadow-lg hover:bg-gray-100 transition duration-300">
            <span>Contact Support</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-teal-600 transition duration-300">
            <span>Schedule a Demo</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedHelp;
