import React from "react";

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
    thumbnail: "/11-Best-Night-Creams-And-Gels-For-Combination-Skin-Available-In-India.jpg",
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
    thumbnail: "/29.eye_cream_anti_aging_.jpg",
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
  Video: "bg-gray-900 text-white",
  Image: "bg-gray-100 text-gray-900",
  Carousel: "bg-gray-100 text-gray-900",
};

const AssetGrid: React.FC = () => (
  <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
  {/* <div className="bg-[#f7f8fa] min-h-screen px-4 md:px-32 lg:px-20 py-8"> */}
    <div className="mb-2">
      <h2 className="text-xl font-semibold">Generated Assets</h2>
      <p className="text-gray-500 text-sm">Browse and manage your AI-generated content</p>
    </div>

    {/* Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
      {assets.map((asset) => (
        <div
          key={asset.id}
          className="bg-white rounded-xl shadow border border-gray-100 hover:shadow-lg transition group"
        >
          <div className="relative">
            <img
              className="w-full h-40 object-cover rounded-t-xl"
              src={asset.thumbnail}
              alt={asset.title}
            />
            {/* Badge for type */}
            <div className={`absolute top-2 right-2 px-2 py-0.5 text-xs font-semibold rounded ${badgeClasses[asset.type]}`}>
              {typeLabels[asset.type]}
            </div>
            {/* Video play button and duration */}
            {asset.type === "Video" && (
              <>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/70 rounded-full p-2 group-hover:scale-110 transition">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="12" fill="#ffffff" opacity="0.7" />
                      <polygon points="10,8 16,12 10,16" fill="#333" />
                    </svg>
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded">
                  {asset.duration}
                </span>
              </>
            )}
            {/* Carousel label */}
            {asset.type === "Carousel" && (
              <div className="absolute top-2 right-2 bg-gray-100 text-gray-900 text-xs font-semibold px-2 py-0.5 rounded">
                Carousel
              </div>
            )}
          </div>
          {/* Asset details */}
          <div className="px-4 pt-3 pb-2">
            <h3 className="font-medium text-gray-900 text-base truncate">{asset.title}</h3>
            <div className="text-xs text-gray-500 mb-2">{asset.created}</div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                {/* Share Icon */}
                <button className="hover:text-blue-500 p-1">
                  <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                    <path d="M15 8.75V12.5A2.5 2.5 0 0 1 12.5 15h-7A2.5 2.5 0 0 1 3 12.5v-7A2.5 2.5 0 0 1 5.5 3h3.75" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M17 3.75v5.5m0 0h-5.5m5.5 0L10.625 2.875" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
                {/* Download Icon */}
                <button className="hover:text-blue-500 p-1">
                  <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                    <path d="M10 2v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="3" y="15" width="14" height="2" rx="1" fill="currentColor" className="fill-gray-200" />
                  </svg>
                </button>
              </div>
              {/* Placeholder for other actions */}
              {/* Add more buttons if needed */}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AssetGrid;
