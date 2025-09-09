import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  category: string;
  image: string;
}

const brands = ["All Brands", "EcoStyle Living", "TechFusion"];

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Bamboo Dining Table",
    brand: "EcoStyle Living",
    price: 499.99,
    category: "Furniture",
    image: "71EzNUU4m5L._UF1000,1000_QL80_.jpg", // Replace with your image path or URL
  },
  {
    id: 2,
    name: "Recycled Cotton Throw Pillows (Set of 2)",
    brand: "EcoStyle Living",
    price: 39.99,
    category: "Home Decor",
    image: "photo-1598440947619-2c35fc9aa908.avif",
  },
  {
    id: 3,
    name: "Smart Home Hub",
    brand: "TechFusion",
    price: 129.99,
    category: "Smart Home",
    image: "photo-1611162616475-46b635cb6868.avif",
  },
  {
    id: 4,
    name: "Wireless Charging Pad",
    brand: "TechFusion",
    price: 49.99,
    category: "Electronics",
    image: "istockphoto-1362120018-612x612.jpg",
  },
];

const ProductDashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [brandFilter, setBrandFilter] = useState<string>("All Brands");
  const [search, setSearch] = useState<string>("");

  const filteredProducts = products.filter(
    (p) =>
      (brandFilter === "All Brands" || p.brand === brandFilter) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    // <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
   <div className="bg-[#f7f8fa] min-h-screen px-4 md:px-32 lg:px-20 py-8"> 
      <h2 className="text-lg font-semibold mb-4">My Products</h2>

      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded border border-gray-300 px-3 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <select
          value={brandFilter}
          onChange={(e) => setBrandFilter(e.target.value)}
          className="rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          {brands.map((brand) => (
            <option key={brand}>{brand}</option>
          ))}
        </select>

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Add Product
        </button>
      </div>

      <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
        {filteredProducts.length === 0 ? (
          <div className="p-4 text-center text-gray-500">No products found</div>
        ) : (
          filteredProducts.map((p) => (
            <div
              key={p.id}
              className="flex items-center p-4 hover:bg-blue-50 cursor-pointer gap-4"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-gray-900 truncate">{p.name}</div>
                <div className="text-gray-500 text-sm truncate">
                  {p.brand} • ${p.price.toFixed(2)} • {p.category}
                </div>
              </div>
              <div className="flex gap-2">
                <button className="text-blue-600 hover:text-blue-900 focus:outline-none">
                  &#9998;
                </button>
                <button
                  className="text-red-600 hover:text-red-900 focus:outline-none"
                  onClick={() => handleDelete(p.id)}
                >
                  &#128465;
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductDashboard;
