import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react";

interface Asset {
  id: number;
  title: string;
  type: "Video" | "Image" | "Carousel";
  thumbnail: string;
  created: string;
  duration?: string; // for video
}

const assets: Asset[] = [
  {
    id: 2,
    title: "Hyaluronic Acid Benefits Carousel",
    type: "Carousel",
    thumbnail: "/OIP (3).webp",
    created: "Created 1 week ago",
  },
  {
    id: 3,
    title: "Night Cream Product Shots",
    type: "Image",
    thumbnail:
      "/11-Best-Night-Creams-And-Gels-For-Combination-Skin-Available-In-India.jpg",
    created: "Created 2 weeks ago",
  },
  {
    id: 5,
    title: "Moisturizer Benefits Carousel",
    type: "Carousel",
    thumbnail: "/1697636077.jpg",
    created: "Created 5 days ago",
  },
  {
    id: 1,
    title: "Vitamin C Serum Product Video",
    type: "Video",
    thumbnail: "/best-vitamin-c-serum.webp",
    created: "Created 2 days ago",
    duration: "0:18",
  },
  {
    id: 2,
    title: "Hyaluronic Acid Benefits Carousel",
    type: "Carousel",
    thumbnail: "/OIP (3).webp",
    created: "Created 1 week ago",
  },
  {
    id: 3,
    title: "Night Cream Product Shots",
    type: "Image",
    thumbnail:
      "/11-Best-Night-Creams-And-Gels-For-Combination-Skin-Available-In-India.jpg",
    created: "Created 2 weeks ago",
  },
  {
    id: 4,
    title: "Retinol Serum Launch Video",
    type: "Video",
    thumbnail: "/29.eye_cream_anti_aging_.jpg",
    created: "Created 3 days ago",
    duration: "0:16",
  },
  {
    id: 5,
    title: "Moisturizer Benefits Carousel",
    type: "Carousel",
    thumbnail: "/1697636077.jpg",
    created: "Created 5 days ago",
  },
  {
    id: 6,
    title: "Eye Cream Lifestyle Shot",
    type: "Image",
    thumbnail: "/photo-1598440947619-2c35fc9aa908.avif",
    created: "Created 1 week ago",
  },
  {
    id: 7,
    title: "Morning Skincare Routine",
    type: "Video",
    thumbnail: "280.webp",
    created: "Created 4 days ago",
    duration: "0:22",
  },
  {
    id: 8,
    title: "Before & After Results",
    type: "Video",
    thumbnail: "/c32017071c38f1837fc7330062cc6ed7.jpg",
    created: "Created 1 week ago",
    duration: "0:19",
  },
  {
    id: 9,
    title: "Ingredient Spotlight",
    type: "Image",
    thumbnail: "/71EzNUU4m5L._UF1000,1000_QL80_.jpg",
    created: "Created 1 week ago",
  },
];

const typeLabels: Record<string, string> = {
  Video: "Video",
  Image: "Image",
  Carousel: "Carousel",
};

const badgeClasses: Record<string, string> = {
  Video: "bg-black/80 text-white",
  Image: "bg-gray-100 text-gray-900",
  Carousel: "bg-gray-100 text-gray-900",
};

// ✅ Modal Component
const BenefitsCarouselModal: React.FC<{
  asset: Asset | null;
  onClose: () => void;
}> = ({ asset, onClose }) => {
  if (!asset) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-[900px] max-w-full shadow-lg flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h2 className="text-lg font-semibold">{asset.title}</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-600 hover:text-black" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row">
          {/* Left Image */}
          <div className="flex-1 p-4">
            <img
              src={asset.thumbnail}
              alt={asset.title}
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
                📸 Share to Instagram
              </button>
              <button className="w-full py-2 rounded-lg border flex items-center justify-center gap-2 hover:bg-blue-50 text-sm">
                📘 Share to Facebook
              </button>
              <button className="w-full py-2 rounded-lg border flex items-center justify-center gap-2 hover:bg-gray-50 text-sm">
                🎵 Share to TikTok
              </button>
            </div>
          </div>
        </div>

        {/* Caption + Footer */}
        <div className="border-t px-4 py-3 text-sm text-gray-700">
          <p>
            Swipe to discover the amazing benefits of our Hyaluronic Acid serum!
            💧
          </p>
        </div>

        <div className="flex justify-between border-t px-4 py-3">
          <button
            onClick={onClose}
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

// ✅ Main Grid Component
const AssetGrid: React.FC = () => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Generated Assets
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {assets.map((asset) => (
          <div
            key={asset.id}
            className="bg-white rounded-xl shadow border hover:shadow-md transition cursor-pointer"
            onClick={() => setSelectedAsset(asset)} // ✅ Click to open modal
          >
            <div className="relative">
              <img
                className="w-full h-44 object-cover rounded-t-xl"
                src={asset.thumbnail}
                alt={asset.title}
              />
              <div
                className={`absolute top-2 right-2 px-2 py-0.5 text-xs font-semibold rounded ${badgeClasses[asset.type]}`}
              >
                {typeLabels[asset.type]}
              </div>
            </div>
            <div className="px-4 pt-3 pb-2">
              <h3 className="font-medium text-gray-900 text-base truncate">
                {asset.title}
              </h3>
              <div className="text-xs text-gray-500 mb-2">{asset.created}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedAsset && (
        <BenefitsCarouselModal
          asset={selectedAsset}
          onClose={() => setSelectedAsset(null)}
        />
      )}
    </div>
  );
};

export default AssetGrid;
