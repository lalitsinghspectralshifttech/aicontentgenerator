import React from 'react';

// You'll need to create or get SVG icons for each feature. 
// For this example, I'll assume you have them as React components.
// Example: import { Sparkles, Image, Video, BarChart, Palette, Calendar } from 'lucide-react';
// Replace these with your actual icon components.
const SparklesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6 text-purple-600"
  >
    {/* SVG path for a sparkle icon */}
  </svg>
);
const ImageIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6 text-blue-600"
  >
    {/* SVG path for an image icon */}
  </svg>
);
const VideoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6 text-pink-600"
  >
    {/* SVG path for a video icon */}
  </svg>
);
const BarChartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6 text-green-600"
  >
    {/* SVG path for a bar chart icon */}
  </svg>
);
const PaletteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6 text-orange-600"
  >
    {/* SVG path for a palette icon */}
  </svg>
);
const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6 text-red-600"
  >
    {/* SVG path for a calendar icon */}
  </svg>
);
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4 w-4 text-green-500"
  >
    <path
      fillRule="evenodd"
      d="M19.916 4.626a.75.75 0 0 1 .206 1.05l-8.755 8.755a.75.75 0 0 1-1.05-.206L4.626 9.916a.75.75 0 0 1 1.05-1.05L10.5 13.95l8.196-8.196a.75.75 0 0 1 1.05-.206Z"
      clipRule="evenodd"
    />
  </svg>
);

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  iconBgColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, features, iconBgColor }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-md ${iconBgColor}`}>
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mb-4 text-sm text-gray-600">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-700">
            <CheckIcon />
            <span className="ml-2">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          Powerful Features to Supercharge Your Content
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
          Everything you need to create, manage, and optimize your social media presence
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* AI Content Generation Card */}
          <FeatureCard
            icon={<img
              src="/freepik__a-vibrant-and-dynamic-logo-for-ai-content-generati__39554.png"   // replace with your image path
              alt="Visual Content Creator"
              className="w-10 h-10 rounded-full object-cover"
            />}
            title="AI Content Generation"
            description="Create engaging captions, hashtags, and content ideas tailored to your brand voice and audience."
            features={['Smart captions', 'Hashtag recommendations', 'Content ideas']}
            iconBgColor="bg-purple-100/50"
          />

          <FeatureCard
            icon={
              <img
                src="/freepik__logo-design-for-a-visual-content-creator-featuring__39553.png"   // replace with your image path
                alt="Visual Content Creator"
                className="w-10 h-10 rounded-full object-cover"
              />
            }
            title="Visual Content Creator"
            description="Generate professional images, graphics, and videos that match your brand's aesthetic."
            features={['Product showcases', 'Branded templates', 'Image enhancement']}
            iconBgColor="bg-blue-100/50"
          />


          {/* Video Generation Card */}
          <FeatureCard
            icon={<img
              src="/freepik__a-slowmotion-video-of-a-hummingbird-feeding-on-nec__39555.png"   // replace with your image path
              alt="Visual Content Creator"
              className="w-10 h-10 rounded-full object-cover"
            />}
            title="Video Generation"
            description="Create short-form videos, reels, and stories with professional transitions and effects."
            features={['15-second reels', 'Product demonstrations', 'Text animations']}
            iconBgColor="bg-pink-100/50"
          />

          {/* Analytics Dashboard Card */}
          <FeatureCard
            icon={<img
              src="/freepik__the-style-is-candid-image-photography-with-natural__39556.png"   // replace with your image path
              alt="Visual Content Creator"
              className="w-10 h-10 rounded-full object-cover"
            />}
            title="Analytics Dashboard"
            description="Track performance metrics across all platforms and optimize your content strategy."
            features={['Engagement tracking', 'Audience insights', 'Performance reports']}
            iconBgColor="bg-green-100/50"
          />

          {/* Brand Kit Integration Card */}
          <FeatureCard
            icon={<img
              src="/freepik__brand-kit-integration-illustrated-as-a-physical-to__39557.png"   // replace with your image path
              alt="Visual Content Creator"
              className="w-10 h-10 rounded-full object-cover"
            />}
            title="Brand Kit Integration"
            description="Maintain consistent branding across all content with your custom colors, fonts, and logos."
            features={['Brand presets', 'Logo placement', 'Color schemes']}
            iconBgColor="bg-orange-100/50"
          />

          {/* Content Calendar Card */}
          <FeatureCard
            icon={<img
              src="/freepik__the-style-is-candid-image-photography-with-natural__39556.png"   // replace with your image path
              alt="Visual Content Creator"
              className="w-10 h-10 rounded-full object-cover"
            />}
            title="Content Calendar"
            description="Schedule and automate your content publishing across all platforms from one dashboard."
            features={['Drag-and-drop planning', 'Automated posting', 'Content recycling']}
            iconBgColor="bg-red-100/50"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;