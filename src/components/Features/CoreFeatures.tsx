// src/components/FeaturesSection.tsx
import React from "react";
import { Camera, Video, Layers, FileText, BarChart3, Palette, Check } from "lucide-react";

type Feature = {
    title: string;
    description: string;
    icon: React.ReactNode;
    points: string[];
};

const features: Feature[] = [
    {
        title: "AI Product Photography",
        description:
            "Generate professional product images with customizable backgrounds, angles, and lighting.",
        icon: <Camera className="w-6 h-6 text-blue-600" />,
        points: [
            "White background & commerce shots",
            "Lifestyle/contextual images",
            "Detail close-ups and angles",
            "Consistent brand aesthetics",
        ],
    },
    {
        title: "Video Ad Generator",
        description:
            "Create professional product videos and ads with motion graphics, text overlays, and effects.",
        icon: <Video className="w-6 h-6 text-pink-600" />,
        points: [
            "15-60 second product ads",
            "Animated feature highlights",
            "Platform-optimized formats",
            "Custom branding and text overlays",
        ],
    },
    {
        title: "Multi-format Generator",
        description:
            "Create content in multiple formats simultaneously, perfectly sized for each platform.",
        icon: <Layers className="w-6 h-6 text-rose-600" />,
        points: [
            "Platform specific sizing",
            "Format variations",
            "Batch creation",
            "Cross-platform consistency",
        ],
    },
    {
        title: "Product Copy Generator",
        description:
            "Generate compelling product descriptions, captions, and ad copy that drives conversions.",
        icon: <FileText className="w-6 h-6 text-yellow-600" />,
        points: [
            "Benefit-focused copy",
            "SEO optimization",
            "Platform specific tone",
            "Multilingual support",
        ],
    },
    {
        title: "Performance Analytics",
        description:
            "Track how your product content performs across platforms and optimize for conversions.",
        icon: <BarChart3 className="w-6 h-6 text-green-600" />,
        points: [
            "Engagement metrics",
            "Conversion tracking",
            "A/B testing",
            "Performance insights",
        ],
    },
    {
        title: "Brand Kit Integration",
        description:
            "Ensure all product content matches your brand guidelines with custom colors, fonts, and logos.",
        icon: <Palette className="w-6 h-6 text-purple-600" />,
        points: [
            "Brand style enforcement",
            "Logo placement",
            "Color consistency",
            "Typography management",
        ],
    },
];

const FeaturesSection: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Tag */}
                <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    🚀 AI-Powered Product Marketing
                </span>

                {/* Heading */}
                <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
                    Powerful Features to Transform Your <br />
                    <span className="text-blue-600">Product Marketing</span>
                </h2>

                {/* Subheading */}
                <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                    Our comprehensive suite of AI-powered tools helps you create stunning product
                    content that converts across all social platforms
                </p>

                {/* CTA */}
                <div className="mt-6">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                        Start Creating Free →
                    </button>
                </div>

                {/* Features Grid */}
                <h3 className="mt-16 text-xl font-semibold text-gray-800">Core Features</h3>
                <p className="text-gray-500 mb-10">
                    Everything you need to create, manage, and optimize your product content
                </p>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition"
                        >
                            {/* Icon */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 mb-4">
                                {feature.icon}
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900">{feature.title}</h4>
                            <p className="mt-1 text-sm text-gray-600">{feature.description}</p>

                            {/* Points */}
                            <ul className="mt-4 space-y-2 text-sm text-gray-700">
                                {feature.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-green-600 mt-0.5" />
                                        {point}
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

export default FeaturesSection;
