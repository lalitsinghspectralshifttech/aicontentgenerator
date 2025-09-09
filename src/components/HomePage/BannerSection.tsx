import React from 'react';

const BannerSection: React.FC = () => {
  return (
    <div className="bg-[#222831] text-white py-12 px-4 text-center">
      <h2 className="text-3xl font-bold">Ready to Transform Your Social Media Content?</h2>
      <p className="mt-4 text-lg">Join thousands of creators and brands using our platform to create scroll-stopping content in seconds.</p>
      <div className="mt-6 flex justify-center space-x-4">
        <button className="bg-[#00ADB5] text-white font-semibold py-2 px-4 rounded-lg hover:text-white">
          Start Your Free Trial <span>&rarr;</span>
        </button>
        <button className="border border-white text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#00ADB5] hover:text-white">
          Request a Demo
        </button>
      </div>
      <p className="mt-4 text-sm">No credit card required. 14-day free trial.</p>
    </div>
  );
};

export default BannerSection;