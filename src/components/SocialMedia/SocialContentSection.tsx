import React from 'react';

const InstagramFeature = () => {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-pink-100">
                <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.851.07 1.17.055 1.805.249 2.227.481.685.394 1.127.876 1.547 1.296.42.42.82.841 1.526 1.24.42.233 1.056.425 2.225.48 1.267.059 1.647.07 4.851.07zm0 2.163c-3.25 0-3.668.014-4.942.074-1.34.061-2.075.29-2.748.653-.787.42-1.171 1.264-1.564 1.887-1.563 1.563-1.563 4.098-1.563 6.958 0 2.86 0 5.395 1.563 6.958 0 0 .777.777 1.564 1.887.673.363 1.408.592 2.748.653 1.274.06 1.692.074 4.942.074s3.668-.014 4.942-.074c1.34-.061 2.075-.29 2.748-.653.787-.42 1.171-1.264 1.564-1.887 1.563-1.563 1.563-4.098 1.563-6.958 0-2.86 0-5.395-1.563-6.958-.393-.623-.777-1.467-1.564-1.887-.673-.363-1.408-.592-2.748-.653-1.274-.06-1.692-.074-4.942-.074zm0 5.867c-3.111 0-5.633 2.522-5.633 5.633s2.522 5.633 5.633 5.633 5.633-2.522 5.633-5.633-2.522-5.633-5.633-5.633zm0 9.163c-1.942 0-3.53-1.588-3.53-3.53s1.588-3.53 3.53-3.53 3.53 1.588 3.53 3.53-1.588 3.53-3.53 3.53zm6.657-11.854c-.675 0-1.222.547-1.222 1.222s.547 1.222 1.222 1.222 1.222-.547 1.222-1.222-.547-1.222-1.222-1.222z" />
                </svg>
              </div>
              <h3 className="font-semibold text-2xl text-gray-900">Instagram</h3>
            </div>
            <p className="text-lg text-gray-600 max-w-lg mb-6 mx-auto lg:mx-0">
              Create eye-catching posts, stories, reels, and carousels optimized for Instagram
            </p>
            <h4 className="font-semibold text-gray-900 mb-4">Platform-Specific Features:</h4>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center justify-center lg:justify-start text-gray-600">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Square, portrait, and story-sized content
              </li>
              <li className="flex items-center justify-center lg:justify-start text-gray-600">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Carousel post generator
              </li>
              <li className="flex items-center justify-center lg:justify-start text-gray-600">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Reels-optimized video content
              </li>
              <li className="flex items-center justify-center lg:justify-start text-gray-600">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Instagram-friendly filters and effects
              </li>
              <li className="flex items-center justify-center lg:justify-start text-gray-600">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Caption generator with hashtag recommendations
              </li>
            </ul>
            <div className="flex justify-center lg:justify-start items-center space-x-6 mb-8">
              <div className="text-center">
                <p className="text-sm text-gray-500">Engagement</p>
                <p className="font-semibold text-green-500 flex items-center justify-center">
                  <span className="mr-1">▲</span>+42%
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500">Reach</p>
                <p className="font-semibold text-green-500 flex items-center justify-center">
                  <span className="mr-1">▲</span>+68%
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500">Conversion</p>
                <p className="font-semibold text-green-500 flex items-center justify-center">
                  <span className="mr-1">▲</span>+37%
                </p>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition duration-300 flex items-center mx-auto lg:mx-0">
              Generate Instagram Content
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>

          {/* Image/Video Player */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="instagram-app-icon-social-media-logo-vector-illustration_277909-403.avif"
                alt="Video Content"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeature;
