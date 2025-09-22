import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react";

const BenefitsCarouselModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <div className="p-6">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Open Modal
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-[900px] max-w-full shadow-lg flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h2 className="text-lg font-semibold">
            Hyaluronic Acid Benefits Carousel
          </h2>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-5 h-5 text-gray-600 hover:text-black" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row">
          {/* Left Image */}
          <div className="flex-1 p-4">
            <img
              src="/skincare.jpg"
              alt="carousel"
              className="rounded-lg w-full object-cover"
            />
          </div>

          {/* Right Panel */}
          <div className="w-full md:w-80 border-l p-4 space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Download Options
            </h3>

            {/* Tabs */}
            <div className="flex border-b">
              <button className="flex-1 text-sm py-2 border-b-2 border-transparent hover:border-blue-500">
                Instagram
              </button>
              <button className="flex-1 text-sm py-2 border-b-2 border-green-500 font-medium text-green-600">
                TikTok
              </button>
              <button className="flex-1 text-sm py-2 border-b-2 border-transparent hover:border-blue-500">
                Facebook
              </button>
            </div>

            {/* Download TikTok Video */}
            <div className="flex items-center justify-between border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
              <span className="text-sm">TikTok Video</span>
              <Download className="w-4 h-4 text-gray-600" />
            </div>

            {/* Share Buttons */}
            <div className="space-y-2">
              <button className="w-full py-2 rounded-lg border flex items-center justify-center gap-2 hover:bg-pink-50 text-sm">
                <span className="text-pink-500">📸</span> Share to Instagram
              </button>
              <button className="w-full py-2 rounded-lg border flex items-center justify-center gap-2 hover:bg-blue-50 text-sm">
                <span className="text-blue-600">📘</span> Share to Facebook
              </button>
              <button className="w-full py-2 rounded-lg border flex items-center justify-center gap-2 hover:bg-gray-50 text-sm">
                <span className="text-black">🎵</span> Share to TikTok
              </button>
            </div>
          </div>
        </div>

        {/* Caption + Footer */}
        <div className="border-t px-4 py-3 text-sm text-gray-700">
          <p>
            Swipe to discover the amazing benefits of our Hyaluronic Acid serum! 💧
          </p>
        </div>

        <div className="flex justify-between border-t px-4 py-3">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-100"
          >
            Close
          </button>
          <button className="px-4 py-2 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600">
            Download
          </button>
        </div>
      </div>

      {/* Left / Right Arrows */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2">
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default BenefitsCarouselModal;
