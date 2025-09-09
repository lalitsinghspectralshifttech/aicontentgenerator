import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type Platform = "Instagram" | "Facebook" | "Twitter" | "LinkedIn";

const PlatformSelector: React.FC = () => {
  const Navigate = useNavigate();
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>([]);

  const platforms: { name: Platform; icon: string }[] = [
    { name: "Instagram", icon: "📸" },
    { name: "Facebook", icon: "📘" },
    { name: "Twitter", icon: "🐦" },
    { name: "LinkedIn", icon: "💼" },
  ];

  const togglePlatform = (platform: Platform) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50 py-10">
      <div className="w-11/12 max-w-5xl bg-white rounded-xl shadow p-6">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-gray-900">Content Generator</h2>
        <p className="text-gray-500 text-sm">
          Generate AI-powered content for your products and brands
        </p>

        {/* Stepper */}
        <div className="flex items-center justify-center mt-6 space-x-6">
          {["Brand", "Product", "Content Type", "Platforms", "Details", "Results"].map(
            (step, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-white font-semibold
                    ${index < 3 ? "bg-teal-500" : index === 3 ? "bg-teal-500" : "bg-gray-300"}
                  `}
                >
                  {index + 1}
                </div>
                <span
                  className={`ml-2 text-sm ${index <= 3 ? "text-teal-600 font-medium" : "text-gray-400"
                    }`}
                >
                  {step}
                </span>
              </div>
            )
          )}
        </div>

        {/* Question */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800">
            Select your target platforms
          </h3>
          <p className="text-gray-500 text-sm mb-4">
            Select one or more platforms where you want to publish content
          </p>

          {/* Platform Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {platforms.map((platform) => (
              <button
                key={platform.name}
                onClick={() => togglePlatform(platform.name)}
                className={`flex flex-col items-center justify-center p-6 border rounded-lg transition-all duration-200
                  ${selectedPlatforms.includes(platform.name)
                    ? "border-teal-500 bg-teal-50"
                    : "border-gray-200 bg-white hover:border-teal-300"
                  }`}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 mb-2 text-lg">
                  {platform.icon}
                </div>
                <span className="font-medium text-gray-900">{platform.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="mt-6 flex justify-between">
          <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => Navigate("/ContentType")}>
            ← Previous
          </button>
          <button
            disabled={selectedPlatforms.length === 0}
            className={`px-6 py-2 rounded-lg text-white font-medium 
              ${selectedPlatforms.length > 0
                ? "bg-teal-500 hover:bg-teal-600"
                : "bg-gray-300 cursor-not-allowed"
              }`}
            onClick={() => Navigate("/details")}>
            Next Step →
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlatformSelector;
