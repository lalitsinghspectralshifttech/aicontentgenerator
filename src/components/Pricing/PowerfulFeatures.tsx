import React from 'react';
// import { FaBullseye, FaChartLine, FaClipboard, FaLightbulb, FaPalette, FaVideo } from 'react-icons/fa';

const PowerfulFeatures = () => {
  const features = [
    {
      title: 'AI Product Photography',
      description: 'Generate professional product images with customizable backgrounds, angles, and lighting.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-purple-600">
          <path d="M16.5 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM19.5 2h-12c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-12 18V4h12v16H7.5zM12 9c-4.411 0-8 3.589-8 8s3.589 8 8 8c.755 0 1.488-.105 2.18-.302l-.121-2.925a6.002 6.002 0 00-2.059.227c-3.309 0-6-2.691-6-6s2.691-6 6-6c2.518 0 4.707 1.558 5.617 3.868l2.97-1.104C19.006 8.525 15.824 5 12 5c-3.86 0-7 3.14-7 7s3.14 7 7 7c2.812 0 5.253-1.684 6.376-4.148l2.97 1.104C20.65 17.653 16.634 20.001 12 20.001c-4.962 0-9-4.038-9-9s4.038-9 9-9z"/>
        </svg>
      ),
    },
    {
      title: 'Video Ad Generator',
      description: 'Create professional product videos and ads with motion graphics, text overlays, and effects.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-indigo-600">
          <path d="M19 3h-14c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-1 16H6V5h12v14z" />
          <path d="M12 9c-1.621 0-3 1.379-3 3s1.379 3 3 3 3-1.379 3-3-1.379-3-3-3zM12 14c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
          <path d="M16 11h-2V9h-2V7h-2V9h-2V7h-2V9H6v6h2v-2h2v2h2v-2h2v2h2V9z" />
        </svg>
      ),
    },
    {
      title: 'Multi-Format Generator',
      description: 'Create content in multiple formats simultaneously, perfectly sized for each platform.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-pink-600">
          <path d="M21 4H3c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM3 18V6h18l.001 12H3z" />
          <path d="M15 8h-2v2h2V8zM15 11h-2v2h2v-2zM15 14h-2v2h2v-2zM9 8H7v2h2V8zM9 11H7v2h2v-2zM9 14H7v2h2v-2z" />
        </svg>
      ),
    },
    {
      title: 'Product Copy Generator',
      description: 'Generate compelling product descriptions, captions, and ad copy that drives conversions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-600">
          <path d="M19 2h-14c-1.103 0-2 .897-2 2v18l5-3 5 3 5-3 5 3V4c0-1.103-.897-2-2-2zm0 14.536l-3-1.8-3 1.8-3-1.8-3 1.8V4h12v12.536z" />
        </svg>
      ),
    },
    {
      title: 'Performance Analytics',
      description: 'Track how your product content performs across platforms and optimize for conversions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-emerald-600">
          <path d="M20 2H4c-1.103 0-2 .897-2 2v18l5-3 5 3 5-3 5 3V4c0-1.103-.897-2-2-2zm-12 5h8v2h-8V7zm-2 4h12v2H6v-2zm0 4h12v2H6v-2z" />
        </svg>
      ),
    },
    {
      title: 'Brand Kit Integration',
      description: 'Ensure all product content matches your brand guidelines with custom colors, fonts, and logos.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-600">
          <path d="M15.5 13.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm0-2c1.93 0 3.5 1.57 3.5 3.5S17.43 17 15.5 17 12 15.43 12 13.5s1.57-3.5 3.5-3.5zm-8.5 7h-2.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5h2.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5z" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8-8-3.589-8-8z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          All Plans Include These Powerful Features
        </h2>
        <p className="text-lg text-gray-600">
          Every subscription gives you access to our core AI-powered content generation tools
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ backgroundColor: 'rgb(243, 232, 255)' }}>
              <span className="text-2xl">{feature.icon}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-base text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PowerfulFeatures;
