import React from 'react';

const IndustrySolutions = () => {
    const industries = [
        {
            name: 'Fashion & Apparel',
            description: 'Specialized content optimized for fashion & apparel products',
            icon: (
                <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
            ),
            iconBg: 'bg-pink-100'
        },
        {
            name: 'Beauty & Cosmetics',
            description: 'Specialized content optimized for beauty & cosmetics products',
            icon: (
                <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                </svg>
            ),
            iconBg: 'bg-purple-100'
        },
        {
            name: 'Home & Furniture',
            description: 'Specialized content optimized for home & furniture products',
            icon: (
                <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
            ),
            iconBg: 'bg-yellow-100'
        },
        {
            name: 'Electronics',
            description: 'Specialized content optimized for electronics products',
            icon: (
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z" />
                </svg>
            ),
            iconBg: 'bg-blue-100'
        },
        {
            name: 'Food & Beverage',
            description: 'Specialized content optimized for food & beverage products',
            icon: (
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 10h-2V6h2c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1zM10 4h4v2h-4V4zM4 10h2V6H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1zm0 4h2v2H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2v-2h4v2h4v-2h2v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1h-2v-2h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1h-2V6h2c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-2V2H9.5c-.28 0-.5.22-.5.5s.22.5.5.5h3v2h-3v-2H9c-.28 0-.5.22-.5.5s.22.5.5.5h3v2h-3v-2H6.5c-.28 0-.5.22-.5.5s.22.5.5.5h3v2h-3v-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-2zm-1 2h-2v2H9V6H7v2H5V6H4v12h16V6H19z" />
                </svg>
            ),
            iconBg: 'bg-green-100'
        },
        {
            name: 'Fitness & Wellness',
            description: 'Specialized content optimized for fitness & wellness products',
            icon: (
                <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm0-4h-2V7h2v8z" />
                </svg>
            ),
            iconBg: 'bg-red-100'
        },
        {
            name: 'Jewelry & Accessories',
            description: 'Specialized content optimized for jewelry & accessories products',
            icon: (
                <svg className="w-8 h-8 text-indigo-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
            ),
            iconBg: 'bg-indigo-100'
        },
        {
            name: 'B2B Products',
            description: 'Specialized content optimized for b2b products',
            icon: (
                <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 22h20L12 2zm0 17L5 7h14l-7 12z" />
                </svg>
            ),
            iconBg: 'bg-gray-100'
        },
    ];

    return (
        <section className="bg-white py-16 md:py-24 lg:py-16">
            <div className="container mx-auto px-4 text-center">
                {/* Section Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Solutions for Every Industry
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                    Tailored product content generation for your specific industry needs
                </p>

                {/* Industry Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industries.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 text-center flex flex-col items-center">
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${item.iconBg}`}>
                                {item.icon}
                            </div>
                            <h3 className="font-semibold text-xl text-gray-900 mb-1">
                                {item.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustrySolutions;
