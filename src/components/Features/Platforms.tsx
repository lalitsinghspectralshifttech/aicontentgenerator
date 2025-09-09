import React from 'react';

const SocialPlatformOptimized = () => {
  const socialPlatforms = [
    {
      name: 'Instagram',
      icon: (
        <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.851.07 1.17.055 1.805.249 2.227.481.685.394 1.127.876 1.547 1.296.42.42.82.841 1.24 1.526.233.42.425 1.056.48 2.225.059 1.267.07 1.647.07 4.851s-.012 3.584-.07 4.851c-.055 1.17-.249 1.805-.481 2.227-.394.685-.876 1.127-1.296 1.547-.42.42-.841.82-1.526 1.24-.42.233-1.056.425-2.225.48-.058 1.267-.07 1.647-.07 4.851s.012 3.584.07 4.851c.055 1.17.249 1.805.481 2.227.394.685.876 1.127 1.296 1.547.42.42.841.82 1.526 1.24.42.233 1.056.425 2.225.48 1.267.059 1.647.07 4.851.07zm0-2.163c-3.25 0-3.668.014-4.942.074-1.34.061-2.075.29-2.748.653-.787.42-1.171 1.264-1.564 1.887-1.563 1.563-1.563 4.098-1.563 6.958 0 2.86 0 5.395 1.563 6.958 0 0 .777.777 1.564 1.887.673.363 1.408.592 2.748.653 1.274.06 1.692.074 4.942.074s3.668-.014 4.942-.074c1.34-.061 2.075-.29 2.748-.653.787-.42 1.171-1.264 1.564-1.887 1.563-1.563 1.563-4.098 1.563-6.958 0-2.86 0-5.395-1.563-6.958-.393-.623-.777-1.467-1.564-1.887-.673-.363-1.408-.592-2.748-.653-1.274-.06-1.692-.074-4.942-.074zm0 5.867c-3.111 0-5.633 2.522-5.633 5.633s2.522 5.633 5.633 5.633 5.633-2.522 5.633-5.633-2.522-5.633-5.633-5.633zm0 9.163c-1.942 0-3.53-1.588-3.53-3.53s1.588-3.53 3.53-3.53 3.53 1.588 3.53 3.53-1.588 3.53-3.53 3.53zm6.657-11.854c-.675 0-1.222.547-1.222 1.222s.547 1.222 1.222 1.222 1.222-.547 1.222-1.222-.547-1.222-1.222-1.222z"/>
        </svg>
      ),
      contentTypes: ['Posts', 'Stories', 'Reels', 'Carousels']
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.988h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
        </svg>
      ),
      contentTypes: ['Feed Posts', 'Stories', 'Marketplace', 'Ads']
    },
    {
      name: 'Twitter/X',
      icon: (
        <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 4.02c-.7.38-1.4.64-2.1.8-.7-.47-1.5-.77-2.4-.9C16.8 3.2 16 3 15 3c-2.4 0-4.3 1.9-4.3 4.3 0 .34.04.67.1 1s-.25.5-.5.7-1.4.7-2.3.7c-1.9 0-3.4-1.5-3.4-3.4S5.2 2 7.1 2c.4 0 .7.07 1.1.2.6-.4 1.4-.7 2.2-.7 2.1 0 3.8 1.7 3.8 3.8 0 .4-.06.7-.1 1.1.9.1 1.7-.1 2.5-.4.8-.4 1.6-.9 2.4-1.5.3.3.6.7.9 1.1-.3.1-.7.2-1.1.2zm-5.4 12c-1.6 1.5-3.7 2.4-5.9 2.4-2.1 0-4.2-.9-5.9-2.4-1.6-1.5-2.4-3.7-2.4-5.9 0-2.2.8-4.4 2.4-5.9 1.7-1.5 3.8-2.4 5.9-2.4 2.1 0 4.2.9 5.9 2.4 1.6 1.5 2.4 3.7 2.4 5.9s-.8 4.4-2.4 5.9z"/>
        </svg>
      ),
      contentTypes: ['Tweets', 'Images', 'Videos', 'Carousels']
    },
    {
      name: 'YouTube',
      icon: (
        <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.46 6.014c-.218-.881-.88-1.542-1.76-1.76-1.54-.418-7.73-.418-7.73-.418s-6.19 0-7.73.418c-.88.218-1.542.88-1.76 1.76-.418 1.54-.418 4.796-.418 4.796s0 3.256.418 4.796c.218.88.88 1.542 1.76 1.76 1.54.418 7.73.418 7.73.418s6.19 0 7.73-.418c.88-.218 1.542-.88 1.76-1.76.418-1.54.418-4.796.418-4.796s0-3.256-.418-4.796zM9.54 14.931V9.069l4.98 2.931-4.98 2.931z"/>
        </svg>
      ),
      contentTypes: ['Shorts', 'Video Ads', 'Thumbnails', 'End Cards']
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6 text-blue-800" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3h-14c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-14c0-1.103-.897-2-2-2zm-12 15h-2v-8h2v8zm-2-9.25c0-.966.784-1.75 1.75-1.75s1.75.784 1.75 1.75-.784 1.75-1.75 1.75-1.75-.784-1.75-1.75zm13.5 9.25h-2.148v-3.52c0-.82-.016-1.87-.96-2.91s-2.316-1.228-3.64-1.228c-1.84 0-3.15 1.096-3.15 2.766v4.892h-2.148v-8h1.996l.115 1.71h.063c.277-.42.95-.918 1.96-1.077 1.01-.16 2.19.11 2.87.54l.034.025c.78.43 1.3 1.026 1.56 1.74l.006.012v-1.39h2.148l.004 8.006z"/>
        </svg>
      ),
      contentTypes: ['Posts', 'Articles', 'Product Ads', 'Carousels']
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Optimized for Every Social Platform
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Generate product content specifically designed for each social media platform's
          unique requirements
        </p>

        {/* Social Platforms Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {socialPlatforms.map((platform, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-6 rounded-3xl shadow-lg border border-gray-100 w-full sm:w-64">
              <div className="flex items-center space-x-2 mb-4">
                {platform.icon}
                <span className="text-gray-900 font-semibold">{platform.name}</span>
              </div>
              <ul className="text-left space-y-2">
                {platform.contentTypes.map((type, typeIndex) => (
                  <li key={typeIndex} className="text-gray-600 text-sm">
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialPlatformOptimized;
