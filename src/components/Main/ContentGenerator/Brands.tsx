import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const steps = [
  "Brand",
  "Product",
  "Content Type",
  "Platforms",
  "Details",
  "Results",
];

const brands = [
  {
    name: "PCG Skin",
    avatar: "/photo-1571781926291-c477ebfd024b.avif",
  },
  {
    name: "Luminous Beauty",
    avatar: "/pngtree-creative-company-logo-png-image_1197025.jpg",
  },
  {
    name: "Nature Glow",
    avatar: "/photo-1598440947619-2c35fc9aa908.avif",
  },
];

export default function ContentGenerator() {
  const navigate = useNavigate();
  const [selectedBrand, setSelectedBrand] = useState<string>(brands[0].name);
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center pt-8">
      <div className="w-[1200px]">
        {/* Header & Stepper container */}
        <div className="bg-[#ededed] rounded p-6">
          <div className="mb-5">
            <h1 className="text-2xl font-bold">Content Generator</h1>
            <p className="text-gray-700">Generate AI-powered content for your products and brands</p>
          </div>
          {/* Stepper */}
          <div className="flex items-center justify-between gap-4 mb-5 w-full">
            {steps.map((step, idx) => (
              <div key={step} className="flex flex-col items-center flex-1">
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full font-semibold text-white mb-1 ${idx === 0
                    ? "bg-teal-500"
                    : "bg-gray-300"
                    }`}
                >
                  {idx + 1}
                </div>
                <span className={`text-xs ${idx === 0 ? "text-teal-700 font-bold" : "text-gray-700"
                  }`}>
                  {step}
                </span>
              </div>
            ))}
          </div>
          {/* Step Card */}
          <div className="bg-white rounded-xl shadow px-10 py-8 mt-3">
            <div className="font-semibold text-lg mb-5">
              For which brand would you like to generate content?
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-7">
              {brands.map(brand => (
                <button
                  key={brand.name}
                  onClick={() => setSelectedBrand(brand.name)}
                  className={`flex items-center px-5 py-4 w-full border rounded-xl text-left bg-white transition
                    ${selectedBrand === brand.name
                      ? "border-teal-500 ring-2 ring-teal-100"
                      : "border-gray-200 hover:border-teal-400"}
                  `}
                  type="button"
                >
                  <img
                    src={brand.avatar}
                    alt={brand.name}
                    className="w-10 h-10 rounded-full object-cover mr-4 border border-gray-200"
                  />
                  <span className="font-medium">{brand.name}</span>
                </button>
              ))}
            </div>
            <div className="flex justify-end">
              <button
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded font-medium flex items-center gap-1"
                type="button"
                onClick={() => navigate("/Product")}
              >
                Next Step
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}


