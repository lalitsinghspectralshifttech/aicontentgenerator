import React from 'react';

const StatsBanner: React.FC = () => {
    return (
        <div className="bg-[#00ADB5] text-white py-16 px-4 text-center">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-4xl font-bold">10,000+</h3>
                    <p className="text-base">Active Users</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold">250,000+</h3>
                    <p className="text-base">Pieces of Content Generated</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold">6+</h3>
                    <p className="text-base">Social Platforms Supported</p>
                </div>
            </div>
        </div>
    );
};

export default StatsBanner;