import React from "react";
import { useNavigate } from "react-router-dom";

const Results: React.FC = () => {
    const Navigate = useNavigate();
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
                    ${index < 6 ? "bg-teal-500" : "bg-gray-300"}
                  `}
                                >
                                    {index + 1}
                                </div>
                                <span
                                    className={`ml-2 text-sm ${index <= 5 ? "text-teal-600 font-medium" : "text-gray-400"
                                        }`}
                                >
                                    {step}
                                </span>
                            </div>
                        )
                    )}
                </div>

                {/* Generate Content Section */}
                <div className="mt-10 bg-white border rounded-xl p-8 flex flex-col items-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-6">
                        Generate Content for
                    </h3>

                    <div className="w-full sm:w-2/3 bg-teal-50 border border-teal-200 rounded-lg p-5 text-center">
                        <p className="text-teal-700 font-medium flex items-center justify-center gap-2">
                            ✨ Ready to Generate
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                            We’ll create content for <span className="font-medium">your brand</span>.
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                            This process typically takes 1–2 minutes depending on the number of platforms
                            and content types selected.
                        </p>
                    </div>

                    {/* Generate Button */}
                    <button className="mt-6 px-6 py-2 rounded-lg text-white font-medium bg-teal-500 hover:bg-teal-600 flex items-center gap-2">
                        ✨ Generate Content
                    </button>
                </div>

                {/* Footer Buttons */}
                <div className="mt-6 flex justify-start">
                    <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
                        onClick={() => Navigate("/details")}>
                        ← Previous
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Results;