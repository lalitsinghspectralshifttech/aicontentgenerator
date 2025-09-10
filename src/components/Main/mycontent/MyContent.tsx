import React, { useState } from "react";

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
  Video: "bg-black/80 text-white",
  Image: "bg-gray-100 text-gray-900",
  Carousel: "bg-gray-100 text-gray-900",
};

const AssetGrid: React.FC = () => {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header with actions */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Generated Assets
          </h2>
          <p className="text-gray-500 text-sm">
            Browse and manage your AI-generated content
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-3 md:mt-0">
          {/* View Toggle */}
          <div className="flex bg-gray-100 rounded-md overflow-hidden">
            <button
              onClick={() => setView("grid")}
              className={`px-3 py-2 flex items-center justify-center text-gray-600 hover:bg-gray-200 ${view === "grid" ? "bg-gray-200 text-gray-900" : ""
                }`}
            >
              {/* Grid Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z"
                />
              </svg>
            </button>
            <button
              onClick={() => setView("list")}
              className={`px-3 py-2 flex items-center justify-center text-gray-600 hover:bg-gray-200 ${view === "list" ? "bg-gray-200 text-gray-900" : ""
                }`}
            >
              {/* List Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Filter Button */}
          <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
              />
            </svg>
            Filter
          </button>
        </div>
      </div>

      {/* Grid/List Layout */}
      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {assets.map((asset) => (
            <div
              key={asset.id}
              className="bg-white rounded-xl shadow border hover:shadow-md transition group"
            >
              <div className="relative">
                <img
                  className="w-full h-44 object-cover rounded-t-xl"
                  src={asset.thumbnail}
                  alt={asset.title}
                />

                {/* Badge for type */}
                <div
                  className={`absolute top-2 right-2 px-2 py-0.5 text-xs font-semibold rounded ${badgeClasses[asset.type]}`}
                >
                  {typeLabels[asset.type]}
                </div>

                {/* Video play button and duration */}
                {asset.type === "Video" && (
                  <>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/70 rounded-full p-3 group-hover:scale-110 transition">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="12"
                            fill="#ffffff"
                            opacity="0.7"
                          />
                          <polygon points="10,8 16,12 10,16" fill="#333" />
                        </svg>
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                      {asset.duration}
                    </span>
                  </>
                )}
              </div>

              {/* Asset details */}
              <div className="px-4 pt-3 pb-2">
                <h3 className="font-medium text-gray-900 text-base truncate">
                  {asset.title}
                </h3>
                <div className="text-xs text-gray-500 mb-2">{asset.created}</div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    {/* Share Icon */}
                    <button className="hover:text-blue-500 p-1">
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M15 8.75V12.5A2.5 2.5 0 0 1 12.5 15h-7A2.5 2.5 0 0 1 3 12.5v-7A2.5 2.5 0 0 1 5.5 3h3.75"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M17 3.75v5.5m0 0h-5.5m5.5 0L10.625 2.875"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </button>

                    {/* Download Icon */}
                    <button className="hover:text-blue-500 p-1">
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M10 2v12m0 0l-4-4m4 4l4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <rect
                          x="3"
                          y="15"
                          width="14"
                          height="2"
                          rx="1"
                          fill="currentColor"
                          className="fill-gray-200"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {assets.map((asset) => (
            <div
              key={asset.id}
              className="flex items-center gap-4 bg-white rounded-lg shadow border p-3 hover:shadow-md transition"
            >
              <img
                src={asset.thumbnail}
                alt={asset.title}
                className="w-28 h-20 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 text-sm truncate">
                  {asset.title}
                </h3>
                <p className="text-xs text-gray-500">{asset.created}</p>
              </div>
              <span
                className={`px-2 py-0.5 rounded text-xs font-semibold ${badgeClasses[asset.type]}`}
              >
                {typeLabels[asset.type]}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AssetGrid;








