import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContentDetails: React.FC = () => {
  const [tone, setTone] = useState<string>("Professional");
  const [goal, setGoal] = useState<string>("Brand Awareness");
  const [theme, setTheme] = useState<string>("Summer Sale");
  const [instructions, setInstructions] = useState<string>("");
    const Navigate = useNavigate();

  const tones = ["Professional", "Casual", "Enthusiastic", "Informative"];
  const goals = ["Brand Awareness", "Engagement", "Sales/Conversion"];
  const themes = [
    "Summer Sale",
    "Black Friday",
    "New Year",
    "Valentine's Day",
    "Mother's Day",
    "Christmas",
    "Halloween",
    "Back to School",
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50 py-10">
      <div className="w-11/12 max-w-5xl bg-white rounded-xl shadow p-6">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-gray-900">Content Generator</h2>
        <p className="text-gray-500 text-sm">
          Generate AI-powered content for your products and brands
        </p>

        {/* Stepper */}
        <div className="flex items-center justify-center mt-6 space-x-6 flex-wrap">
          {["Brand", "Product", "Content Type", "Platforms", "Details", "Results"].map(
            (step, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-white font-semibold
                    ${index < 4 ? "bg-teal-500" : index === 4 ? "bg-teal-500" : "bg-gray-300"}
                  `}
                >
                  {index + 1}
                </div>
                <span
                  className={`ml-2 text-sm ${
                    index <= 4 ? "text-teal-600 font-medium" : "text-gray-400"
                  }`}
                >
                  {step}
                </span>
              </div>
            )
          )}
        </div>

        {/* Content Details */}
        <div className="mt-8 space-y-6">
          {/* Content Tone */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Content Tone</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
              {tones.map((item) => (
                <button
                  key={item}
                  onClick={() => setTone(item)}
                  className={`px-4 py-2 border rounded-lg text-sm font-medium transition
                    ${
                      tone === item
                        ? "border-teal-500 bg-teal-50 text-teal-600"
                        : "border-gray-300 hover:border-teal-300 text-gray-700"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Content Goal */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Content Goal</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
              {goals.map((item) => (
                <button
                  key={item}
                  onClick={() => setGoal(item)}
                  className={`px-4 py-2 border rounded-lg text-sm font-medium transition
                    ${
                      goal === item
                        ? "border-teal-500 bg-teal-50 text-teal-600"
                        : "border-gray-300 hover:border-teal-300 text-gray-700"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Content Theme */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Content Theme (Optional)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
              {themes.map((item) => (
                <button
                  key={item}
                  onClick={() => setTheme(item)}
                  className={`px-4 py-2 border rounded-lg text-sm font-medium transition
                    ${
                      theme === item
                        ? "border-teal-500 bg-teal-50 text-teal-600"
                        : "border-gray-300 hover:border-teal-300 text-gray-700"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Instructions */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              Custom Instructions
              <span className="ml-1 text-gray-400 cursor-help">ⓘ</span>
            </h3>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="E.g., Highlight our sustainable packaging, mention our 30-day guarantee, focus on skin hydration benefits..."
              className="w-full mt-2 p-3 border rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              rows={3}
            />
            <p className="text-xs text-gray-500 mt-1">
              The more specific your instructions, the better the results. Include key selling
              points, target audience details, or campaign-specific messaging.
            </p>
          </div>

          {/* Summary */}
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 text-sm text-gray-700">
            <h4 className="font-semibold mb-2">📋 Content Generation Summary</h4>
            <p>Brand: Example Brand</p>
            <p>Product: Example Product</p>
            <p>Content Types: Social Post</p>
            <p>Platforms: Instagram, Facebook</p>
            <p>
              <span className="font-medium">Tone:</span> {tone}
            </p>
            <p>
              <span className="font-medium">Goal:</span> {goal}
            </p>
            <p>
              <span className="font-medium">Theme:</span> {theme}
            </p>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="mt-6 flex justify-between">
          <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
          onClick={() => Navigate("/ctplatforms")}>
            ← Previous
          </button>
          <button className="px-6 py-2 rounded-lg text-white font-medium bg-teal-500 hover:bg-teal-600"
          onClick={() => Navigate("/results")}>
            Next Step →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentDetails;
