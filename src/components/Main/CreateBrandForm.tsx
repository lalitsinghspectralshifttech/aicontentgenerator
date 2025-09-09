import React from "react";

const CreateBrandForm: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md p-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3 mb-4">
          <h2 className="text-xl font-semibold">My Brands</h2>
          <div className="space-x-2">
            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Save
            </button>
            <button className="px-4 py-2 text-sm bg-gray-200 rounded-lg hover:bg-gray-300">
              Cancel
            </button>
          </div>
        </div>

        {/* Basic Information */}
        <section className="mb-6">
          <h3 className="font-medium mb-3">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Brand Name"
              className="border rounded-lg p-2 w-full"
            />
            <select className="border rounded-lg p-2 w-full">
              <option>Select Industry</option>
              <option>Technology</option>
              <option>Fashion</option>
              <option>Food</option>
            </select>
            <input
              type="text"
              placeholder="Logo URL https://example.com/logo.png"
              className="border rounded-lg p-2 w-full"
            />
            <input
              type="text"
              placeholder="Website www.example.com"
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <textarea
            placeholder="Brand Description"
            className="border rounded-lg p-2 w-full mt-3"
            rows={3}
          />
        </section>

        {/* Typography */}
        <section className="mb-6">
          <h3 className="font-medium mb-3">Typography</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Primary Font e.g., Montserrat"
              className="border rounded-lg p-2 w-full"
            />
            <input
              type="text"
              placeholder="Secondary Font e.g., Roboto"
              className="border rounded-lg p-2 w-full"
            />
          </div>
        </section>

        {/* Brand Colors */}
        <section className="mb-6">
          <h3 className="font-medium mb-3">Brand Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm mb-1">Primary Color</label>
              <input type="color" className="w-full h-10 border rounded" />
            </div>
            <div>
              <label className="block text-sm mb-1">Secondary Color</label>
              <input type="color" className="w-full h-10 border rounded" />
            </div>
            <div>
              <label className="block text-sm mb-1">Accent Color</label>
              <input type="color" className="w-full h-10 border rounded" />
            </div>
            <div>
              <label className="block text-sm mb-1">Text Color</label>
              <input type="color" className="w-full h-10 border rounded" />
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="mb-6">
          <h3 className="font-medium mb-3">Target Audience</h3>
          <textarea
            placeholder="Describe your target audience including demographics, interests, and behaviors"
            className="border rounded-lg p-2 w-full"
            rows={3}
          />
        </section>

        {/* Brand Voice & Tone */}
        <section className="mb-6">
          <h3 className="font-medium mb-3">Brand Voice & Tone</h3>
          <textarea
            placeholder="Describe your brand's voice and tone (e.g., professional, friendly, authoritative)"
            className="border rounded-lg p-2 w-full"
            rows={3}
          />
        </section>

        {/* Social Media Profiles */}
        <section>
          <h3 className="font-medium mb-3">Social Media Profiles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Instagram handle (without @)"
              className="border rounded-lg p-2 w-full"
            />
            <input
              type="text"
              placeholder="Twitter handle (without @)"
              className="border rounded-lg p-2 w-full"
            />
            <input
              type="text"
              placeholder="Facebook page name"
              className="border rounded-lg p-2 w-full"
            />
            <input
              type="text"
              placeholder="LinkedIn handle"
              className="border rounded-lg p-2 w-full"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CreateBrandForm;
