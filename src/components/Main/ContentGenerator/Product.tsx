import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
const steps = ["Brand", "Product", "Content Type", "Platforms", "Details", "Results"];

const products = [
    {
        name: "Vitamin C Serum",
        image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8",
    },
    {
        name: "Retinol Night Cream",
        image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908",
    },
    {
        name: "Hyaluronic Acid Moisturizer",
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b",
    },
];

const ContentGenerator: React.FC = () => {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(2); // Product step
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center py-8 px-4">
            <div className="bg-white rounded-xl shadow max-w-5xl w-full p-6">
                {/* Header */}
                <h1 className="text-xl font-semibold text-gray-800">Content Generator</h1>
                <p className="text-gray-500 mb-6">
                    Generate AI-powered content for your products and brands
                </p>

                {/* Stepper */}
                <div className="flex items-center justify-between mb-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="flex-1 flex items-center">
                            <div
                                className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${idx + 1 <= activeStep
                                    ? "bg-teal-500 text-white"
                                    : "border-2 border-gray-300 text-gray-400"
                                    }`}
                            >
                                {idx + 1}
                            </div>
                            <span
                                className={`ml-2 text-sm font-medium ${idx + 1 <= activeStep ? "text-gray-800" : "text-gray-400"
                                    }`}
                            >
                                {step}
                            </span>
                            {idx < steps.length - 1 && (
                                <div className="flex-1 h-px bg-gray-300 mx-3"></div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Product Selection */}
                <h2 className="text-lg font-medium text-gray-700 mb-4">
                    Select a product from PCG Skin
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {products.map((product) => (
                        <div
                            key={product.name}
                            onClick={() => setSelectedProduct(product.name)}
                            className={`border rounded-lg cursor-pointer overflow-hidden ${selectedProduct === product.name
                                ? "border-teal-500 ring-2 ring-teal-300"
                                : "border-gray-200 hover:shadow-md"
                                }`}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-3 text-center font-medium text-gray-700">
                                {product.name}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation */}
                <div className="flex justify-between">
                    <button className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-600 hover:bg-gray-50"
                        onClick={() => navigate("/Brands")}>
                        ← Previous
                    </button>
                    <button className="px-6 py-2 rounded-md bg-teal-500 text-white font-medium hover:bg-teal-600"
                        onClick={() => navigate("/ContentType")}>
                        Next Step →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContentGenerator;
