import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-green-50 px-6 py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <span className="text-sm text-green-400 font-medium mb-2 inline-block">
            AI-Powered Content Creation
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Turn Product Images & Text into{" "}
            <span className="text-green-400">Ready-to-Publish</span> Reels and Images
          </h1>
          <p className="text-gray-600 mb-6 max-w-lg">
            Generate 15-second reels and 10+ images instantly with AI – fast, brand-consistent, and engaging.
          </p>
          <div className="flex flex-col sm:flex-row sm:gap-4 justify-center lg:justify-start">
            <button className="bg-green-400 text-white px-6 py-3 rounded-md font-medium hover:bg-green-500 transition">
              Get Started Now
            </button>
            <button className="mt-3 sm:mt-0 border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
              Watch Demo
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            ✔ No credit card required • Trusted by 100+ teams
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative">
          <img
            src="/Firefly_-Two young women sitting together at a modern workspace, smiling while working on cre 364297.jpg" // replace with your uploaded image path
            alt="Hero"
            className="rounded-lg shadow-lg w-full max-w-xl mx-auto"
          />
          <span className="absolute bottom-4 right-4 bg-orange-200 text-orange-800 text-sm px-3 py-1 rounded-full font-medium">
            100% AI-Powered
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;