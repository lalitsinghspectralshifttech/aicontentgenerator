import React from 'react';
import LatestBlogs from './LatestBlogs';
import Webinars from './Webinars';
import PersonalizedHelp from './PersonalizedHelp';

const ResourcesAndLearning = () => {
    const categories = [
        {
            title: 'Blog',
            description: 'Latest articles, tips, and insights on product marketing',
            link: '#',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-500">
                    <path d="M19 4h-14c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 6h16v12h-16V6z" />
                    <path d="M6 8h12v2H6zm0 4h12v2H6zm0 4h7v2H6z" />
                </svg>
            ),
        },
        {
            title: 'Help Center',
            description: 'Detailed guides and answers to common questions',
            link: '#',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                    <path d="M11 15h2v2h-2zm0-8h2v6h-2z" />
                </svg>
            ),
        },
        {
            title: 'Video Tutorials',
            description: 'Step-by-step video guides to using our platform',
            link: '#',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500">
                    <path d="M16 11.166V6c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-5.166l5 4V7.166l-5 4z" />
                </svg>
            ),
        },
        {
            title: 'Documentation',
            description: 'Comprehensive technical documentation and API guides',
            link: '#',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-purple-500">
                    <path d="M19 4h-14c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 6h16v12h-16V6z" />
                    <path d="M6 8h12v2H6zm0 4h12v2H6z" />
                </svg>
            ),
        },
        {
            title: 'Academy',
            description: 'Free courses on product marketing and content creation',
            link: '#',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                    <path d="M11 15h2v2h-2zm0-8h2v6h-2z" />
                </svg>
            ),
        },
        {
            title: 'Community',
            description: 'Join discussions with other product marketers',
            link: '#',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-indigo-500">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                    <path d="M15.5 13.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm-8.5 7h-2.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5h2.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5z" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8-8-3.589-8-8z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:tex-3xl font-bold text-gray-900 mb-4 leading-tight">
                    Resources & Learning Center
                </h2>
                <p className="text-lg text-gray-600">
                    Everything you need to master product marketing and get the most out of our platform
                </p>
                <div className="mt-8 flex justify-center">
                    <div className="relative w-full max-w-xl">
                        <input
                            type="text"
                            placeholder="Search resources, tutorials, and articles..."
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-gray-700"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto text-center mb-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Browse Resources by Category</h3>
                <p className="text-base text-gray-500">
                    Find the information and support you need, whenever you need it
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                    <div key={index} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ backgroundColor: 'rgb(243, 232, 255)' }}>
                            <span className="text-2xl">{category.icon}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                        <p className="text-base text-gray-600 mb-4">{category.description}</p>
                        <a href={category.link} className="inline-flex items-center space-x-2 text-blue-600 font-medium hover:underline transition duration-300">
                            <span>Explore {category.title}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
            <LatestBlogs />
            <Webinars />
            <PersonalizedHelp />
        </section>

    );
};

export default ResourcesAndLearning;
