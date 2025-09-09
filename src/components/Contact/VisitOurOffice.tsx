import React from 'react';

const VisitOurOffice = () => {
    return (
        <section className="bg-white py-20 px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Visit Our Office
                </h2>
                <p className="text-lg text-gray-600">
                    We'd love to meet you in person at our San Francisco headquarters
                </p>
            </div>

            <div className="max-w-3xl mx-auto bg-gray-100 rounded-lg shadow-md p-20 flex flex-col items-center justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin text-teal-500 mb-4"
                >
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
                <p className="text-gray-600 text-sm text-center">
                    Map integration would be displayed here
                </p>
            </div>
        </section>
    );
};

export default VisitOurOffice;
