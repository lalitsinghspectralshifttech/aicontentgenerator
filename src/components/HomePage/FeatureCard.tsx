import React from 'react';

// You would replace these with your actual icon components
const ReelsIcon = () => (
  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-100 text-green-500">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  </div>
);

const ImagesIcon = () => (
  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-yellow-100 text-yellow-500">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  </div>
);

const BrandKitIcon = () => (
  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-red-100 text-red-500">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-2.414-2.414A1 1 0 0015.586 6H7a2 2 0 00-2 2v11a2 2 0 002 2z" />
    </svg>
  </div>
);

const AnalyticsIcon = () => (
  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-500">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
    </svg>
  </div>
);

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex-1 min-w-[250px] p-8 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ContentSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Create Content in Minutes, Not Hours
        </h1>
        <p className="text-lg text-gray-600">
          Our AI streamlines your content creation process so you can focus on growing your brand.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl">
        <FeatureCard
          icon={<ReelsIcon />}
          title="Generate Reels"
          description="Create 15-second video reels with AI voiceovers, perfect for product showcases."
        />
        <FeatureCard
          icon={<ImagesIcon />}
          title="Create Images"
          description="Generate Lifestyle product images and carousels optimized for social media."
        />
        <FeatureCard
          icon={<BrandKitIcon />}
          title="Brand Kit"
          description="Apply your brand colors, fonts, and logo to all generated content automatically."
        />
        <FeatureCard
          icon={<AnalyticsIcon />}
          title="Analytics"
          description="Track performance of your content across platforms to optimize your strategy."
        />
      </div>
    </div>
  );
};

export default ContentSection;