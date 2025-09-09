import React from "react";

const Dashboard = () => {
    const contentItems = [
        {
            title: "Vitamin C Serum Launch",
            type: "Video",
            imageUrl: "photo-1556229010-6c3f2c9ca5f8.avif",
            created: "2 days ago",
            progress: 87,
            trend: "+87%",
            tag: "Video",
        },
        {
            title: "Hyaluronic Acid Benefits",
            type: "Carousel",
            imageUrl: "photo-1598440947619-2c35fc9aa908.avif",
            created: "1 week ago",
            progress: 92,
            trend: "+92%",
            tag: "Carousel",
        },
        {
            title: "Night Cream Product Shots",
            type: "Image",
            imageUrl: "photo-1571781926291-c477ebfd024b.avif",
            created: "2 weeks ago",
            progress: 75,
            trend: "+75%",
            tag: "Image",
        },
    ];

    const dataCards = [
        {
            title: "Generated This Month",
            value: "219",
            change: "+12%",
            changeColor: "text-green-500",
            icon: (
                <svg className="w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.3L22 12V6h-6z" />
                </svg>
            ),
        },
        {
            title: "Engagement Rate",
            value: "4.8%",
            change: "+0.6%",
            changeColor: "text-green-500",
            icon: (
                <svg className="w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.3L22 12V6h-6z" />
                </svg>
            ),
        },
        {
            title: "Avg. Generation Time",
            value: "3.2m",
            change: "-0.5m",
            changeColor: "text-green-500",
            icon: (
                <svg className="w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.3L22 12V6h-6z" />
                </svg>
            ),
        },
    ];

    const contentSummary = [
        {
            label: "Videos",
            count: 24,
            icon: (
                <svg className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 15V6l6.5 6-6.5 6z" />
                </svg>
            ),
        },
        {
            label: "Images",
            count: 78,
            icon: (
                <svg className="w-6 h-6 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 19V5H3v14h18zm2-16c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H1c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h22z" />
                </svg>
            ),
        },
        {
            label: "Carousels",
            count: 15,
            icon: (
                <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                    <rect width="18" height="18" x="3" y="3" rx="3" />
                </svg>
            ),
        },
        {
            label: "Captions",
            count: 102,
            icon: (
                <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                </svg>
            ),
        },
    ];

    return (
        <div className="bg-[#f7f8fa] min-h-screen px-4 md:px-32 lg:px-20 py-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-900 mb-1">
                    Welcome back, Demo User
                </h1>
                <p className="text-gray-500 text-base">
                    Create and manage AI-powered content for PCG Skin
                </p>
            </div>

            {/* Data Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4 mb-8">
                {dataCards.map((card, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl shadow p-6 flex flex-col gap-1"
                    >
                        <div className="text-sm font-medium text-gray-400">
                            {card.title}
                        </div>
                        <div className="flex items-center mt-3">
                            <span className="text-2xl font-bold text-gray-900">
                                {card.value}
                            </span>
                            <div className="flex items-center ml-auto">
                                {card.icon}
                                <span className={`text-xs ml-1 font-medium ${card.changeColor}`}>
                                    {card.change}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Content Overview */}
            <div className="mb-8">
                <div className="text-lg font-semibold mb-4 text-gray-900">
                    Content Overview
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {contentSummary.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl p-5 flex flex-col items-center shadow"
                        >
                            <div className="mb-2">{item.icon}</div>
                            <div className="text-lg font-bold text-gray-900">{item.count}</div>
                            <div className="text-sm text-gray-400">{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Content */}
            <div>
                <div className="flex justify-between items-center mb-4">
                    <div className="text-lg font-semibold text-gray-900">
                        Recent Content
                    </div>
                    <a href="#" className="text-sm text-blue-600 font-medium hover:underline">
                        View all
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {contentItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl shadow object-contain flex flex-col"
                        >
                            <div className="relative aspect-[16/9]">
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="w-full h-56 object-cover"
                                />
                                <span className="absolute top-2 right-2 bg-gray-900 bg-opacity-80 text-white text-xs px-3 py-1 rounded-md font-medium capitalize">
                                    {item.tag}
                                </span>
                            </div>
                            <div className="p-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                                    <div className="text-xs text-gray-400 mt-1">
                                        Created {item.created}
                                    </div>
                                </div>
                                <div className="mt-3 flex items-center justify-between">
                                    <div className="text-green-500 text-xs font-medium">
                                        {item.trend}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-4 w-full text-sm text-gray-500">
                                    <span className="hover:text-gray-900 cursor-pointer">
                                        Preview
                                    </span>
                                    <span className="hover:text-gray-900 flex items-center gap-1 cursor-pointer">
                                        <svg
                                            className="w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M8.293 17.293l1.414 1.414a1 1 0 001.414 0l6-6a1 1 0 000-1.414l-6-6a1 1 0 00-1.414 0l-1.414 1.414z" />
                                        </svg>
                                        Download
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
