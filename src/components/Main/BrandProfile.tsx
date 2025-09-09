import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
type BrandInfo = {
  name: string;
  industry: string;
  logoUrl: string;
  website: string;
  description: string;
  primaryFont: string;
  secondaryFont: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
  };
  targetAudience: string;
  brandVoice: string;
  socials: Array<{
    icon: "instagram" | "twitter" | "threads" | "linkedin";
    handle: string;
    url: string;
  }>;
};

const brands: BrandInfo[] = [
  {
    name: "EcoStyle Living",
    industry: "Home & Furniture",
    logoUrl: "https://placehold.co/32x32/33c481/fff?text=EcoS",
    website: "www.ecostyleliving.com",
    description:
      "Sustainable home goods and furniture for eco-conscious consumers.",
    primaryFont: "Montserrat",
    secondaryFont: "Roboto",
    colors: {
      primary: "#4CAF50",
      secondary: "#8BC34A",
      accent: "#FFC107",
      text: "#262338",
    },
    targetAudience:
      "Environmentally conscious homeowners, 25-45 years old, middle to upper-middle income, values sustainability and modern design.",
    brandVoice:
      "Friendly, educational, inspiring, and passionate about sustainability.",
    socials: [
      { icon: "instagram", handle: "@ecostyle_living", url: "#" },
      { icon: "twitter", handle: "@EcoStyleLiving", url: "#" },
      { icon: "threads", handle: "@EcoStyleLiving", url: "#" },
      { icon: "linkedin", handle: "@ecoStyle-living", url: "#" },
    ],
  },
  {
    name: "TechFusion",
    industry: "Tech",
    logoUrl: "https://placehold.co/32x32/3367d6/fff?text=TF",
    website: "www.techfusion.com",
    description: "Innovative technology solutions for businesses worldwide.",
    primaryFont: "Poppins",
    secondaryFont: "Inter",
    colors: {
      primary: "#3F51B5",
      secondary: "#00B0FF",
      accent: "#FF4081",
      text: "#212121",
    },
    targetAudience:
      "Business professionals, startups, enterprises seeking cutting-edge tech.",
    brandVoice: "Expert, dynamic, and customer-focused technology communication.",
    socials: [
      { icon: "instagram", handle: "@techfusion", url: "#" },
      { icon: "twitter", handle: "@TechFusion", url: "#" },
    ],
  },
];

// SVG icon JSX
const socialIcons: Record<
  "instagram" | "twitter" | "threads" | "linkedin",
  React.ReactNode
> = {
  instagram: (
    <svg
      className="w-5 h-5 mr-1"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M7.5 2C4.46 2 2 4.46 2 7.5v9C2 19.54 4.46 22 7.5 22h9c3.04 0 5.5-2.46 5.5-5.5v-9C22 4.46 19.54 2 16.5 2h-9zm0 2h9A3.5 3.5 0 0 1 20 7.5v9A3.5 3.5 0 0 1 16.5 20h-9A3.5 3.5 0 0 1 4 16.5v-9A3.5 3.5 0 0 1 7.5 4zm4.5 2A6.5 6.5 0 1 0 18.5 12 6.5 6.5 0 0 0 12 6zm0 2a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 12 8zm6.5.25a1 1 0 1 1-1-1 1 1 0 0 1 1 1z" />
    </svg>
  ),
  twitter: (
    <svg
      className="w-5 h-5 mr-1"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M23 2.999a10.05 10.05 0 0 1-2.828.775A4.932 4.932 0 0 0 22.338.361c-.917.543-1.934.938-3.018 1.152a4.918 4.918 0 0 0-8.389 4.482A13.979 13.979 0 0 1 1.671 1.149a4.818 4.818 0 0 0 1.525 6.574A4.902 4.902 0 0 1 .962 7.14v.065a4.918 4.918 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.21.085 4.925 4.925 0 0 0 4.6 3.419A9.869 9.869 0 0 1 .96 19.54a13.951 13.951 0 0 0 7.548 2.212c9.058 0 14.008-7.513 14.008-14.009 0-.213-.003-.425-.014-.636A10.025 10.025 0 0 0 23 2.998z" />
    </svg>
  ),
  linkedin: (
    <svg
      className="w-5 h-5 mr-1"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.477-2.236-1.675-2.236-.912 0-1.455.614-1.694 1.207-.087.212-.109.508-.109.805v5.793h-3.555s.047-9.396 0-10.37h3.554v1.47c-.007.011-.018.022-.026.034h.026v-.034c.472-.728 1.314-1.767 3.195-1.767 2.336 0 4.084 1.523 4.084 4.792v6.875zM5.337 7.433c-1.144 0-1.895-.752-1.895-1.741C3.442 4.702 4.215 4 5.375 4c1.16 0 1.895.702 1.903 1.692.007.988-.743 1.741-1.941 1.741zm-1.777 13.019H7.12v-10.37H3.56v10.37z" />
    </svg>
  ),
  threads: (
    <svg
      className="w-5 h-5 mr-1"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
};

const MyBrands: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  const brand = brands[selected];

  return (
    // <div className="bg-[#f7f8fa] min-h-screen px-4 md:px-12 lg:px-24 py-10">
    <div className="bg-[#f7f8fa] min-h-screen px-4 md:px-32 lg:px-20 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">My Brands</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow"
            onClick={() => navigate('/CreateBrandForm')}>
            + Add New Brand
          </button>
        </div>

        {/* Brand Selector */}
        <div className="flex gap-3 mb-6 flex-wrap">
          {brands.map((b, idx) => (
            <button
              key={b.name}
              onClick={() => setSelected(idx)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md border text-sm font-medium ${selected === idx
                ? "bg-white border-blue-400 text-blue-700 shadow-sm"
                : "bg-white border-gray-300 text-gray-700 hover:bg-blue-50"
                }`}
            >
              <img src={b.logoUrl} className="w-6 h-6 rounded" alt={b.name} />
              {b.name}
            </button>
          ))}
        </div>

        {/* Brand Card */}
        <div className="bg-white rounded-xl shadow-lg border p-0 mb-8">
          {/* Header */}
          <div className="flex justify-between items-center p-5 border-b">
            <div className="flex items-center gap-3">
              <img
                src={brand.logoUrl}
                alt={brand.name}
                className="w-12 h-12 rounded"
              />
              <div>
                <div className="font-semibold text-lg text-gray-900">
                  {brand.name}
                </div>
                <div className="text-sm text-gray-400">{brand.industry}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="border border-gray-300 bg-white hover:bg-gray-100 px-4 py-2 text-sm font-medium rounded shadow-sm">
                Edit
              </button>
              <button className="border border-red-200 bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 text-sm font-medium rounded shadow-sm">
                Delete
              </button>
            </div>
          </div>

          {/* Info Sections */}
          <div className="p-5 pt-0 flex flex-col gap-5">
            {/* Basic Info */}
            <div>
              <div className="font-semibold text-gray-900 flex items-center gap-1 mb-2">
                Basic Information
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-gray-50 p-4 rounded-lg border">
                <div>
                  <div className="text-xs text-gray-400">Brand Name</div>
                  <div>{brand.name}</div>

                  <div className="text-xs text-gray-400 mt-2">Description</div>
                  <div>{brand.description}</div>

                  <div className="text-xs text-gray-400 mt-2">Website</div>
                  <div className="flex items-center gap-2">
                    <a
                      className="underline text-sm text-blue-600"
                      href={`https://${brand.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {brand.website}
                    </a>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Industry</div>
                  <div>{brand.industry}</div>
                </div>
              </div>
            </div>

            {/* Brand Identity */}
            <div>
              <div className="font-semibold text-gray-900 mb-2">
                Brand Identity
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {/* Typography */}
                <div className="bg-gray-50 rounded-lg border p-4 h-full">
                  <div className="font-semibold text-gray-700 text-sm mb-1">
                    Typography
                  </div>
                  <div className="text-xs text-gray-400">Primary Font</div>
                  <div className="mb-2">{brand.primaryFont}</div>
                  <div className="text-xs text-gray-400">Secondary Font</div>
                  <div>{brand.secondaryFont}</div>
                </div>

                {/* Color Palette */}
                <div className="bg-gray-50 rounded-lg border p-4 h-full">
                  <div className="font-semibold text-gray-700 text-sm mb-1">
                    Color Palette
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {Object.entries(brand.colors).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-xs text-gray-400 capitalize">
                          {key}
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className="inline-block w-4 h-4 rounded border"
                            style={{ background: value }}
                          ></span>
                          <span>{value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Audience & Brand Voice */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="bg-gray-50 rounded-lg border p-4">
                <div className="font-semibold text-gray-700 text-sm mb-1">
                  Target Audience
                </div>
                <div className="text-sm">{brand.targetAudience}</div>
              </div>
              <div className="bg-gray-50 rounded-lg border p-4">
                <div className="font-semibold text-gray-700 text-sm mb-1">
                  Brand Voice & Tone
                </div>
                <div className="text-sm">{brand.brandVoice}</div>
              </div>
            </div>

            {/* Social Media Profiles */}
            <div>
              <div className="font-semibold text-gray-900 mb-2">
                Social Media Profiles
              </div>
              <div className="bg-gray-50 rounded-lg border p-4 flex flex-wrap gap-5">
                {brand.socials.map((s, i) => (
                  <a
                    href={s.url}
                    key={i}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-700 text-sm"
                  >
                    {socialIcons[s.icon]}
                    <span>{s.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBrands;
