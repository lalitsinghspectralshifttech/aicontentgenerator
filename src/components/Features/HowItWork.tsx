// src/components/HowItWorks.tsx
import React from "react";
import { Package, Sparkles, Zap } from "lucide-react";

type Step = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Upload Your Product",
    description:
      "Upload product images or 3D models, or simply describe your product in detail. Our AI will understand your product’s features and styling.",
    icon: <Package className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 2,
    title: "Select Content Type",
    description:
      "Choose from product photos, lifestyle shots, video ads, or social media posts. Customize settings for your target platforms.",
    icon: <Sparkles className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 3,
    title: "Generate & Publish",
    description:
      "Our AI generates professional product content in seconds. Review, edit if needed, and publish directly to your platforms.",
    icon: <Zap className="w-6 h-6 text-blue-600" />,
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
        <p className="mt-2 text-gray-600">
          Our AI-powered platform streamlines your product content creation from concept
          to publishing
        </p>

        {/* Steps Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white rounded-xl border shadow-sm p-6 text-left"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-semibold shadow-md">
                  {step.id}
                </div>
              </div>

              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
