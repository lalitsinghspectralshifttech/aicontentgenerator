import React from 'react';

const SocialPlatformOptimized = () => {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-10">
      <div className="container mx-auto px-4 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Optimized for Every Social Platform
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Generate product content specifically designed for each social media platform's
          unique requirements
        </p>

        {/* Three-column layout for social platform cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Instagram Card */}
          <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-start text-left">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.851.07 1.17.055 1.805.249 2.227.481.685.394 1.127.876 1.547 1.296.42.42.82.841 1.24 1.526.233.42.425 1.056.48 2.225.059 1.267.07 1.647.07 4.851s-.012 3.584-.07 4.851c-.055 1.17-.249 1.805-.481 2.227-.394.685-.876 1.127-1.296 1.547-.42.42-.841.82-1.526 1.24-.42.233-1.056.425-2.225.48-.058 1.267-.07 1.647-.07 4.851s.012 3.584.07 4.851c.055 1.17.249 1.805.481 2.227.394.685.876 1.127 1.296 1.547.42.42.841.82 1.526 1.24.42.233 1.056.425 2.225.48 1.267.059 1.647.07 4.851.07zm0-2.163c-3.25 0-3.668.014-4.942.074-1.34.061-2.075.29-2.748.653-.787.42-1.171 1.264-1.564 1.887-1.563 1.563-1.563 4.098-1.563 6.958 0 2.86 0 5.395 1.563 6.958 0 0 .777.777 1.564 1.887.673.363 1.408.592 2.748.653 1.274.06 1.692.074 4.942.074s3.668-.014 4.942-.074c1.34-.061 2.075-.29 2.748-.653.787-.42 1.171-1.264 1.564-1.887 1.563-1.563 1.563-4.098 1.563-6.958 0-2.86 0-5.395-1.563-6.958-.393-.623-.777-1.467-1.564-1.887-.673-.363-1.408-.592-2.748-.653-1.274-.06-1.692-.074-4.942-.074zm0 5.867c-3.111 0-5.633 2.522-5.633 5.633s2.522 5.633 5.633 5.633 5.633-2.522 5.633-5.633-2.522-5.633-5.633-5.633zm0 9.163c-1.942 0-3.53-1.588-3.53-3.53s1.588-3.53 3.53-3.53 3.53 1.588 3.53 3.53-1.588 3.53-3.53 3.53zm6.657-11.854c-.675 0-1.222.547-1.222 1.222s.547 1.222 1.222 1.222 1.222-.547 1.222-1.222-.547-1.222-1.222-1.222z" />
                </svg>
              </div>
              <span className="text-gray-900 font-semibold">Instagram</span>
            </div>
            <img
              src="280.webp"
              alt="Instagram Post"
              className="w-full aspect-square rounded-2xl mb-4 "
            />
            <p className="text-gray-600 text-sm mb-2">
              Introducing our new eco-friendly water bottle. Keeps drinks cool for 24 hours. 🌎 #SustainableLiving #HydrationGoals
            </p>
            <div className="flex items-center text-gray-400 text-xs">
              <span className="mr-4">👍 2.3K</span>
              <span className="mr-4">💬 187</span>
              <span>🔗 452</span>
            </div>
          </div>

          {/* Facebook Card */}
          <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-start text-left">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.988h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </div>
              <span className="text-gray-900 font-semibold">Facebook</span>
            </div>
            <div className="relative w-full mb-4">
              <img
                src="photo-1556227702-d1e4e7b5c232.avif"
                alt="Facebook Carousel"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs font-bold rounded-full px-2 py-1">
                1/2
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-2">
              Our new spring collection has arrived! Swipe to see the full range of colors. Use code SPRING20 for 20% off your first purchase.
            </p>
            <div className="flex items-center text-gray-400 text-xs">
              <span className="mr-4">👍 859</span>
              <span className="mr-4">💬 154</span>
              <span>🔗 67</span>
            </div>
          </div>

          {/* TikTok Card */}
          <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-start text-left">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm0-4h-2V7h2v8z" />
                </svg>
              </div>
              <span className="text-gray-900 font-semibold">Youtube</span>
            </div>
            <div className="relative w-full mb-4">
              <img
                src="photo-1611162616475-46b635cb6868.avif"
                alt="TikTok Video"
                className="w-full rounded-2xl mb-4 "
              />
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div> */}
            </div>
            <p className="text-gray-900 text-sm font-semibold mb-1">
              Watch how our stain-resistant fabric works in real time! #ProductDemo #CleanTok #HomeHacks
            </p>
            <div className="flex items-center text-gray-400 text-xs">
              <span className="mr-4">▶️ 34K</span>
              <span className="mr-4">❤️ 58.2K</span>
              <span>💬 1.4M</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialPlatformOptimized;
