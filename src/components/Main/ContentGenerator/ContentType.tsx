import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type ContentType = "Social Media Posts" | "Reels & Short Videos" | "Stories" | "Ad Copy";

const ContentGenerator: React.FC = () => {
    const Navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<ContentType | null>(null);

  const contentTypes: { title: ContentType; description: string }[] = [
    { title: "Social Media Posts", description: "Static images with captions" },
    { title: "Reels & Short Videos", description: "Short-form video content" },
    { title: "Stories", description: "Vertical format for 24-hour content" },
    { title: "Ad Copy", description: "Paid advertising content" },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50 py-10">
      {/* Header */}
      <div className="w-11/12 max-w-5xl bg-white rounded-xl shadow p-6">
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
                    ${index < 2 ? "bg-teal-500" : index === 2 ? "bg-teal-500" : "bg-gray-300"}
                  `}
                >
                  {index + 1}
                </div>
                <span
                  className={`ml-2 text-sm ${
                    index <= 2 ? "text-teal-600 font-medium" : "text-gray-400"
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
            What type of content do you want to generate?
          </h3>
          <p className="text-gray-500 text-sm mb-4">
            Select one or more content types to generate
          </p>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contentTypes.map((item) => (
              <button
                key={item.title}
                onClick={() => setSelectedType(item.title)}
                className={`p-4 border rounded-lg text-left transition-all duration-200 
                  ${
                    selectedType === item.title
                      ? "border-teal-500 bg-teal-50"
                      : "border-gray-200 bg-white hover:border-teal-300"
                  }`}
              >
                <h4 className="font-medium text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="mt-6 flex justify-between">
          <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
          onClick={() => Navigate("/Product")}>
            ← Previous
          </button>
          <button
            disabled={!selectedType}
            className={`px-6 py-2 rounded-lg text-white font-medium 
              ${selectedType ? "bg-teal-500 hover:bg-teal-600" : "bg-gray-300 cursor-not-allowed"}
            `}
          onClick={() => Navigate("/ctplatforms")}>
            Next Step →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentGenerator;
