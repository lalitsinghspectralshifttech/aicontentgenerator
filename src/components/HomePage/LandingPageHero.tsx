import React from "react";

const HeroSection: React.FC = () => {

  const companyLogos = [
    { src: "/pngtree-creative-company-logo-png-image_1197025.jpg", alt: "Company logo 1" },
    { src: "/real-estate-logo-design-template-35565e72ee2d02776a1e00b3edcfe535_screen.jpg", alt: "Company logo 2" },
    { src: "/pngtree-bird-and-fly-company-logo-and-symbol-png-image_3777052.jpg", alt: "Company logo 3" },
    { src: "/Company-logo-on-3d-glass-window-scaled.jpg", alt: "Company logo 4" },
    { src: "/a-logo-design_-company-logo-template-7246ba946d6686a9a5b984a1e4380b1b_screen.jpg", alt: "Company logo 5" },
  ];
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 text-center">
      {/* Heading */}
      <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-600 rounded-full mb-4">
        🚀 AI Powered Product Content
      </span>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Transform Your{" "}
        <span className="text-blue-600">Products</span> Into <br />
        Scroll-Stopping Social Media Ads
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-6">
        Generate stunning product photos, videos, and ad content for all your
        social platforms with our AI-powered marketing studio.
      </p>

      {/* CTA Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button className="px-6 py-3 rounded-xl bg-[#00ADB5] text-white font-medium hover:bg-[#009da5] transition">
          Start Creating Free →
        </button>
        <button className="px-6 py-3 rounded-xl border border-gray-300 font-medium hover:bg-gray-100 transition">
          ▶ See How It Works
        </button>
      </div>

      {/* Sub-text */}
      <div className="text-sm text-gray-500 flex justify-center gap-6 mb-12">
        <span>✔ No credit card required</span>
        <span>✔ 14 day free trial</span>
        <span>✔ Cancel anytime</span>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg group">
          <img
            src="photo-1583209814683-c023dd293cc6.avif"
            alt="Product Photography"
            className="w-full h-72 object-cover group-hover:scale-105 transition"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent text-left p-4">
            <span className="text-sm bg-blue-600 text-white px-2 py-1 rounded-md">
              Product Photography
            </span>
            <p className="text-white text-sm mt-2">
              Professional grade product shots with customizable backgrounds,
              angles, and lighting.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg group">
          <img
            src="photo-1586023492125-27b2c045efd7.avif"
            alt="Lifestyle Content"
            className="w-full h-64 object-cover group-hover:scale-105 transition"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent text-left p-4">
            <span className="text-sm bg-pink-600 text-white px-2 py-1 rounded-md">
              Lifestyle Content
            </span>
            <p className="text-white text-sm mt-2">
              Showcase your products in real-life scenarios and modern spaces.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg group">
          <img
            src="photo-1567721913486-6585f069b332.avif"
            alt="Video Content"
            className="w-full h-64 object-cover group-hover:scale-105 transition"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent text-left p-4">
            <span className="text-sm bg-purple-600 text-white px-2 py-1 rounded-md">
              Video Content
            </span>
            <p className="text-white text-sm mt-2">
              Create dynamic product videos to capture audience attention.
            </p>
          </div>
        </div>
      </div>

      {/* Trusted Brands */}
      <div className="mt-16 text-gray-500 text-sm">
        <p className="mb-4">TRUSTED BY LEADING BRANDS</p>
        <div className="flex justify-center items-center gap-8 rounded-full mb-16 flex-wrap">
          {companyLogos.map((logo, idx) => (
            <img
              key={idx}
              src={logo.src}
              alt={logo.alt}
              className="w-16 h-16 cursor-pointer rounded-full object-cover border border-gray-300 shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
