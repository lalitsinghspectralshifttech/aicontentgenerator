import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ProductFeature {
  id: number;
  text: string;
}

interface ProductImage {
  id: number;
  url: string;
}

interface ProductTag {
  id: number;
  text: string;
}

const EditProduct: React.FC = () => {
  const navigate = useNavigate();
  const [features, setFeatures] = useState<ProductFeature[]>([
    { id: 1, text: "Sustainably sourced bamboo" },
    { id: 2, text: "Natural finish" },
    { id: 3, text: "Seats up to 6 people" },
  ]);

  const [images, setImages] = useState<ProductImage[]>([
    { id: 1, url: "/photo-1604578762246-41134e37f9cc.avif" },
    { id: 2, url: "/photo-1592078615290-033ee584e267.avif" },
    { id: 3, url: "/photo-1533090481720-856c6e3c1fdc.avif" },
  ]);

  const [tags, setTags] = useState<ProductTag[]>([
    { id: 1, text: "sustainable" },
    { id: 2, text: "eco friendly" },
    { id: 3, text: "dining" },
  ]);

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Edit Product</h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded bg-gray-200"
              onClick={() => navigate("/MyProducts")}>Cancel</button>
            <button className="px-4 py-2 rounded bg-blue-600 text-white"
              onClick={() => navigate("/MyProducts")}>Save</button>
          </div>
        </div>

        {/* Basic Information */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Basic Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Brand</label>
              <input
                type="text"
                className="w-full border rounded p-2"
                value="EcoStyle Living"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Product Name</label>
              <input
                type="text"
                className="w-full border rounded p-2"
                value="Bamboo Dining Table"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-1">Product Description</label>
              <textarea className="w-full border rounded p-2" rows={3}>
                Sustainable dining table made from 100% bamboo. Elegant design with natural finish that complements any dining room.
              </textarea>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Price</label>
              <input type="text" className="w-full border rounded p-2" value="$499.99" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">SKU</label>
              <input type="text" className="w-full border rounded p-2" value="ECO-BDT-001" />
            </div>
          </div>
        </div>

        {/* Product Images */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Product Images</h3>
          <div className="flex gap-4 justify-center">
            {images.map((img) => (
              <img
                key={img.id}
                src={img.url}
                alt="product"
                className="w-full h-80 object-cover rounded border"
              />
            ))}
          </div>
          <button className="mt-3 px-3 py-1 bg-blue-600 text-white rounded">+ Add</button>
        </div>

        {/* Product Features */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Product Features</h3>
          <ul className="space-y-2">
            {features.map((f) => (
              <li
                key={f.id}
                className="flex justify-between items-center border p-2 rounded"
              >
                <span>{f.text}</span>
                <button className="text-red-500">✕</button>
              </li>
            ))}
          </ul>
          <button className="mt-3 px-3 py-1 bg-blue-600 text-white rounded">+ Add Feature</button>
        </div>

        {/* Product Dimensions */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Product Dimensions</h3>
          <div className="grid grid-cols-4 gap-4">
            <input type="text" className="border rounded p-2" value="160 cm" />
            <input type="text" className="border rounded p-2" value="80 cm" />
            <input type="text" className="border rounded p-2" value="75 cm" />
            <input type="text" className="border rounded p-2" value="35 kg" />
          </div>
        </div>

        {/* Materials */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Materials</h3>
          <div className="flex gap-2">
            <span className="border rounded px-3 py-1">Bamboo</span>
            <span className="border rounded px-3 py-1">Eco-friendly varnish</span>
          </div>
          <button className="mt-3 px-3 py-1 bg-blue-600 text-white rounded">+ Add Material</button>
        </div>

        {/* Additional Info */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Additional Information</h3>
          <input
            type="text"
            className="w-full border rounded p-2"
            value="https://ecostyleliving.com/product/bamboo-dining-table"
          />
          <div className="flex gap-4 mt-3">
            <label className="flex items-center gap-2">
              <input type="radio" name="stock" defaultChecked />
              In Stock
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="stock" />
              Out of Stock
            </label>
          </div>
        </div>

        {/* Product Tags */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Product Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="bg-gray-100 border px-3 py-1 rounded-full text-sm flex items-center gap-2"
              >
                {tag.text}
                <button className="text-red-500">✕</button>
              </span>
            ))}
          </div>
          <button className="mt-3 px-3 py-1 bg-blue-600 text-white rounded">+ Add Tag</button>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
