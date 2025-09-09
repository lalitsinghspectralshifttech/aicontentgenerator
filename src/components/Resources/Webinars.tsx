import React from 'react';

const webinars = [
    {
        title: 'Mastering AI-Generated Product Content',
        date: 'June 15, 2023',
        time: '11:00 AM PST',
        speaker: 'Sarah Johnson, Head of Product Marketing',
    },
    {
        title: 'Increasing Conversion Rates with Better Product Visuals',
        date: 'June 22, 2023',
        time: '2:00 PM PST',
        speaker: 'Michael Chen, E-commerce Strategist',
    },
];

const UpcomingWebinars = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    Upcoming Webinars
                </h2>
                <p className="text-lg text-gray-600">
                    Join our live sessions with product marketing experts
                </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {webinars.map((webinar, index) => (
                    <div key={index} className="bg-white rounded-lg p-8 shadow-md border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{webinar.title}</h3>
                        <div className="space-y-3 text-gray-600">
                            <div className="flex items-center space-x-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-gray-500"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                                <span>{webinar.date}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-gray-500"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <span>{webinar.time}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-gray-500"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                                <span>{webinar.speaker}</span>
                            </div>
                        </div>
                        <button className="mt-6 w-full inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-blue-700 transition duration-300">
                            <span>Register Now</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a href="#" className="inline-flex items-center space-x-2 text-blue-600 font-medium hover:underline transition duration-300">
                    <span>View all upcoming webinars</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default UpcomingWebinars;
