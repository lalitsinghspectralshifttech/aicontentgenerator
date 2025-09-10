import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Correct import

const EditBrand: React.FC = () => {
    const navigate = useNavigate(); // ✅ Now works
    const [formData, setFormData] = useState({
        brandName: "EcoStyle Living",
        industry: "Home & Furniture",
        logoUrl:
            "https://images.unsplash.com/photo-1560693512-ece0971ebb53?ixlib=rb-1.2.1&auto=format&fit=",
        website: "www.ecostyleliving.com",
        description:
            "Sustainable home goods and furniture for eco-conscious consumers.",
        primaryFont: "Montserrat",
        secondaryFont: "Roboto",
        primaryColor: "#4CAF50",
        secondaryColor: "#8BC34A",
        accentColor: "#FFC107",
        textColor: "#263238",
        targetAudience:
            "Environmentally conscious homeowners; 25-45 years old, middle to upper-middle income, values sustainability and modern design.",
        brandVoice:
            "Friendly, educational, inspiring, and passionate about sustainability.",
        socialProfiles: {
            instagram: "ecostyle_living",
            twitter: "EcoStyleLiving",
            facebook: "EcoStyleLiving",
            linkedin: "ecostyle-living",
        },
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-start py-10">
            <div className="bg-white w-full max-w-5xl shadow rounded-lg p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">My Brands</h2>
                    <div className="space-x-2">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                            onClick={() => navigate("/CreateBrandForm")}>
                            Save
                        </button>
                        <button
                            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
                            onClick={() => navigate("/CreateBrandForm")} // ✅ works now
                        >
                            Cancel
                        </button>
                    </div>
                </div>

                <h3 className="text-lg font-medium mb-4">Edit Brand</h3>

                <div className="space-y-8">
                    {/* Basic Information */}
                    <section>
                        <h4 className="font-semibold mb-2">📋 Basic Information</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="brandName"
                                value={formData.brandName}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                                placeholder="Brand Name"
                            />
                            <input
                                type="text"
                                name="industry"
                                value={formData.industry}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                                placeholder="Industry"
                            />
                            <input
                                type="text"
                                name="logoUrl"
                                value={formData.logoUrl}
                                onChange={handleChange}
                                className="border p-2 rounded col-span-2"
                                placeholder="Logo URL"
                            />
                            <input
                                type="text"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                className="border p-2 rounded col-span-2"
                                placeholder="Website"
                            />
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="border p-2 rounded col-span-2"
                                placeholder="Brand Description"
                            />
                        </div>
                    </section>

                    {/* Typography */}
                    <section>
                        <h4 className="font-semibold mb-2">🔠 Typography</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="primaryFont"
                                value={formData.primaryFont}
                                onChange={handleChange}
                                className="border p-2 rounded"
                                placeholder="Primary Font"
                            />
                            <input
                                type="text"
                                name="secondaryFont"
                                value={formData.secondaryFont}
                                onChange={handleChange}
                                className="border p-2 rounded"
                                placeholder="Secondary Font"
                            />
                        </div>
                    </section>

                    {/* Brand Colors */}
                    <section>
                        <h4 className="font-semibold mb-2">🎨 Brand Colors</h4>
                        <div className="grid grid-cols-4 gap-4">
                            {["primaryColor", "secondaryColor", "accentColor", "textColor"].map(
                                (colorKey) => (
                                    <div key={colorKey}>
                                        <input
                                            type="color"
                                            name={colorKey}
                                            value={(formData as any)[colorKey]}
                                            onChange={handleChange}
                                            className="w-12 h-12 border rounded"
                                        />
                                        <input
                                            type="text"
                                            name={colorKey}
                                            value={(formData as any)[colorKey]}
                                            onChange={handleChange}
                                            className="border p-2 rounded w-full mt-1"
                                        />
                                    </div>
                                )
                            )}
                        </div>
                    </section>

                    {/* Target Audience */}
                    <section>
                        <h4 className="font-semibold mb-2">🎯 Target Audience</h4>
                        <textarea
                            name="targetAudience"
                            value={formData.targetAudience}
                            onChange={handleChange}
                            className="border p-2 rounded w-full"
                        />
                    </section>

                    {/* Brand Voice & Tone */}
                    <section>
                        <h4 className="font-semibold mb-2">💬 Brand Voice & Tone</h4>
                        <textarea
                            name="brandVoice"
                            value={formData.brandVoice}
                            onChange={handleChange}
                            className="border p-2 rounded w-full"
                        />
                    </section>

                    {/* Social Media Profiles */}
                    <section>
                        <h4 className="font-semibold mb-2">🔗 Social Media Profiles</h4>
                        <div className="grid grid-cols-2 gap-4">
                            {Object.entries(formData.socialProfiles).map(([key, value]) => (
                                <input
                                    key={key}
                                    type="text"
                                    name={key}
                                    value={value}
                                    onChange={(e) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            socialProfiles: {
                                                ...prev.socialProfiles,
                                                [key]: e.target.value,
                                            },
                                        }))
                                    }
                                    className="border p-2 rounded"
                                    placeholder={key}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default EditBrand;
