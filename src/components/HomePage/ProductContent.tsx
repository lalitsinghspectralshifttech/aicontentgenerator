import React, { useState } from "react";

type Tab = {
  label: string;
  value: string;
};

const tabs: Tab[] = [
  { label: "📸 Product Photos", value: "photos" },
  { label: "🏡 Lifestyle Shots", value: "lifestyle" },
  { label: "🎥 Video Ads", value: "videos" },
  { label: "📑 Carousel Posts", value: "carousel" },
  { label: "🛠 Product Demos", value: "demos" },
];

const cards = [
  {
    id: 1,
    category: "photos",
    title: "Clean Product Shot",
    description:
      "Professional white background product photography perfect for e-commerce listings and product pages.",
    img: "photo-1581235720704-06d3acfcb36f.avif",
  },
  {
    id: 2,
    category: "photos",
    title: "Detail Focus",
    description:
      "Highlight specific product features with close-up detail shots that showcase craftsmanship.",
    img: "photo-1556227702-d1e4e7b5c232.avif",
  },
  {
    id: 3,
    category: "photos",
    title: "Product Collection",
    description:
      "Group shots that display product variations, colors, or complete collections.",
    img: "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=800&q=80",
  },
];

const ProductContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState("photos");

  return (
    <div className="py-16 px-6 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        Every Type of Product Content You Need
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        From professional product photography to engaging video ads, create
        every format you need for successful product marketing.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === tab.value
                ? "bg-blue-100 text-blue-600"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards
          .filter((card) => card.category === activeTab)
          .map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductContent;
