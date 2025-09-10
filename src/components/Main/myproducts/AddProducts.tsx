import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyProducts from "./MyProducts"

const AddProduct: React.FC = () => {
    const navigate = useNavigate();
    const [images, setImages] = useState<string[]>([]);
    const [features, setFeatures] = useState<string[]>([]);
    const [materials, setMaterials] = useState<string[]>([]);
    const [tags, setTags] = useState<string[]>([]);

    const [formData, setFormData] = useState({
        brand: "EcoStyle Living",
        productName: "",
        description: "",
        price: 0,
        sku: "",
        mainCategory: "",
        subCategory: "",
        length: "",
        width: "",
        height: "",
        weight: "",
        productUrl: "",
        stockStatus: "In Stock",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddItem = (list: string[], setList: Function, value: string) => {
        if (value.trim() !== "") {
            setList([...list, value]);
        }
    };

    const handleRemoveItem = (list: string[], setList: Function, index: number) => {
        setList(list.filter((_, i) => i !== index));
    };

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-start py-10">
            <div className="bg-white w-full max-w-5xl shadow rounded-lg p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">My Products</h2>
                    <div className="space-x-2">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                            onClick={() => navigate("/MyProducts")}>
                            Save
                        </button>
                        <button
                            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
                            onClick={() => navigate("/MyProducts")}
                        >
                            Cancel
                        </button>
                    </div>
                </div>

                <h3 className="text-lg font-medium mb-4">Add New Product</h3>

                <div className="space-y-8">
                    {/* Basic Information */}
                    <section>
                        <h4 className="font-semibold mb-2">📋 Basic Information</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="brand"
                                value={formData.brand}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                                placeholder="Brand"
                            />
                            <input
                                type="text"
                                name="productName"
                                value={formData.productName}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                                placeholder="Product Name"
                            />
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="border p-2 rounded col-span-2"
                                placeholder="Product Description"
                            />
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className="border p-2 rounded"
                                placeholder="Price"
                            />
                            <input
                                type="text"
                                name="sku"
                                value={formData.sku}
                                onChange={handleChange}
                                className="border p-2 rounded"
                                placeholder="SKU"
                            />
                        </div>
                    </section>

                    {/* Categories */}
                    <section>
                        <h4 className="font-semibold mb-2">🏷️ Categories</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="mainCategory"
                                value={formData.mainCategory}
                                onChange={handleChange}
                                className="border p-2 rounded"
                                placeholder="Main Category"
                            />
                            <input
                                type="text"
                                name="subCategory"
                                value={formData.subCategory}
                                onChange={handleChange}
                                className="border p-2 rounded"
                                placeholder="Sub Category"
                            />
                        </div>
                    </section>

                    {/* Product Images */}
                    <section>
                        <h4 className="font-semibold mb-2">🖼️ Product Images</h4>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Add Image URL"
                                className="border p-2 rounded flex-1"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault();
                                        handleAddItem(images, setImages, (e.target as HTMLInputElement).value);
                                        (e.target as HTMLInputElement).value = "";
                                    }
                                }}
                            />
                            <button
                                className="bg-blue-600 text-white px-3 py-2 rounded"
                                onClick={() => {
                                    const input = document.querySelector<HTMLInputElement>(
                                        "input[placeholder='Add Image URL']"
                                    );
                                    if (input && input.value) {
                                        handleAddItem(images, setImages, input.value);
                                        input.value = "";
                                    }
                                }}
                            >
                                + Add
                            </button>
                        </div>
                        <div className="grid grid-cols-4 gap-4 mt-4">
                            {images.length > 0 ? (
                                images.map((url, i) => (
                                    <div key={i} className="relative">
                                        <img src={url} alt="Product" className="w-full h-24 object-cover rounded" />
                                        <button
                                            onClick={() => handleRemoveItem(images, setImages, i)}
                                            className="absolute top-1 right-1 bg-red-500 text-white px-2 py-1 text-xs rounded"
                                        >
                                            X
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-400 text-sm">No images added yet.</p>
                            )}
                        </div>
                    </section>

                    {/* Product Features */}
                    <section>
                        <h4 className="font-semibold mb-2">⚡ Product Features</h4>
                        <input
                            type="text"
                            placeholder="Enter product feature"
                            className="border p-2 rounded w-full"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    handleAddItem(features, setFeatures, (e.target as HTMLInputElement).value);
                                    (e.target as HTMLInputElement).value = "";
                                }
                            }}
                        />
                        <ul className="mt-2">
                            {features.map((f, i) => (
                                <li key={i} className="flex justify-between items-center border p-2 rounded mt-1">
                                    {f}
                                    <button
                                        onClick={() => handleRemoveItem(features, setFeatures, i)}
                                        className="text-red-500"
                                    >
                                        ✕
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Product Dimensions */}
                    <section>
                        <h4 className="font-semibold mb-2">📏 Product Dimensions</h4>
                        <div className="grid grid-cols-4 gap-4">
                            {["length", "width", "height", "weight"].map((dim) => (
                                <input
                                    key={dim}
                                    type="text"
                                    name={dim}
                                    value={(formData as any)[dim]}
                                    onChange={handleChange}
                                    className="border p-2 rounded"
                                    placeholder={dim}
                                />
                            ))}
                        </div>
                    </section>

                    {/* Materials */}
                    <section>
                        <h4 className="font-semibold mb-2">🪵 Materials</h4>
                        <input
                            type="text"
                            placeholder="Enter material"
                            className="border p-2 rounded w-full"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    handleAddItem(materials, setMaterials, (e.target as HTMLInputElement).value);
                                    (e.target as HTMLInputElement).value = "";
                                }
                            }}
                        />
                        <ul className="mt-2">
                            {materials.map((m, i) => (
                                <li key={i} className="flex justify-between items-center border p-2 rounded mt-1">
                                    {m}
                                    <button
                                        onClick={() => handleRemoveItem(materials, setMaterials, i)}
                                        className="text-red-500"
                                    >
                                        ✕
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Additional Info */}
                    <section>
                        <h4 className="font-semibold mb-2">ℹ️ Additional Information</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="productUrl"
                                value={formData.productUrl}
                                onChange={handleChange}
                                className="border p-2 rounded"
                                placeholder="Product URL"
                            />
                            <div className="flex items-center gap-4">
                                <label>
                                    <input
                                        type="radio"
                                        name="stockStatus"
                                        value="In Stock"
                                        checked={formData.stockStatus === "In Stock"}
                                        onChange={handleChange}
                                    />{" "}
                                    In Stock
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="stockStatus"
                                        value="Out of Stock"
                                        checked={formData.stockStatus === "Out of Stock"}
                                        onChange={handleChange}
                                    />{" "}
                                    Out of Stock
                                </label>
                            </div>
                        </div>
                    </section>

                    {/* Product Tags */}
                    <section>
                        <h4 className="font-semibold mb-2">🏷️ Product Tags</h4>
                        <input
                            type="text"
                            placeholder="Enter tag"
                            className="border p-2 rounded w-full"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    handleAddItem(tags, setTags, (e.target as HTMLInputElement).value);
                                    (e.target as HTMLInputElement).value = "";
                                }
                            }}
                        />
                        <div className="flex flex-wrap gap-2 mt-2">
                            {tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="bg-gray-200 px-3 py-1 rounded-full flex items-center gap-2"
                                >
                                    {tag}
                                    <button
                                        onClick={() => handleRemoveItem(tags, setTags, i)}
                                        className="text-red-500"
                                    >
                                        ✕
                                    </button>
                                </span>
                            ))}
                        </div>
                    </section>
                    <MyProducts />
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
