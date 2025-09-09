import React from 'react';

const CreateContentSteps = () => {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-6xl text-center px-4">
                {/* Section Heading */}
                <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
                    Create Content in Three Simple Steps
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                    Our AI-powered platform streamlines your content creation process from idea to publishing
                </p>

                {/* Three-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Step 1: Select Content Type */}
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center">
                        {/* Numbered icon */}
                        <div className="relative mb-6">
                            <div className="w-12 h-12 rounded-lg bg-indigo-600 flex items-center justify-center absolute -top-4 -left-4 shadow-lg">
                                <span className="text-white font-bold text-xl">1</span>
                            </div>
                            <svg className="w-20 h-20 text-indigo-500 opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5l-5-5 1.41-1.41L11 14.67l7.09-7.09L19.5 8.5l-8.5 8.5z" />
                            </svg>
                        </div>
                        {/* Content for step 1 */}
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                            Select Your Content Type
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Choose from posts, stories, reels, carousels, or videos for any social platform you need.
                        </p>
                        {/* Content buttons */}
                        <div className="flex flex-wrap justify-center gap-2">
                            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 text-sm font-medium hover:bg-gray-100 transition">Post</button>
                            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 text-sm font-medium hover:bg-gray-100 transition">Story</button>
                            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 text-sm font-medium hover:bg-gray-100 transition">Reel</button>
                            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 text-sm font-medium hover:bg-gray-100 transition">Carousel</button>
                            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 text-sm font-medium hover:bg-gray-100 transition">Video</button>
                        </div>
                    </div>

                    {/* Step 2: Customize Your Content */}
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center">
                        {/* Numbered icon */}
                        <div className="relative mb-6">
                            <div className="w-12 h-12 rounded-lg bg-indigo-600 flex items-center justify-center absolute -top-4 -left-4 shadow-lg">
                                <span className="text-white font-bold text-xl">2</span>
                            </div>
                            <svg className="w-20 h-20 text-indigo-500 opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 19V5h14l.01 14H5zm2-3h10v2H7v-2zm-2-2h14l.01-14H5v14z" />
                            </svg>
                        </div>
                        {/* Content for step 2 */}
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                            Customize Your Content
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Input your brand details, upload images, or let our AI generate visuals and copy for you.
                        </p>
                        {/* Placeholder images */}
                        <div className="grid grid-cols-3 gap-2 w-full max-w-sm">
                            <div className="h-20 bg-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-500">
                                Content<br />example 1
                            </div>
                            <div className="h-20 bg-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-500">
                                Content<br />example 2
                            </div>
                            <div className="h-20 bg-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-500">
                                Content<br />example 3
                            </div>
                        </div>
                    </div>

                    {/* Step 3: Generate & Publish */}
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center">
                        {/* Numbered icon */}
                        <div className="relative mb-6">
                            <div className="w-12 h-12 rounded-lg bg-indigo-600 flex items-center justify-center absolute -top-4 -left-4 shadow-lg">
                                <span className="text-white font-bold text-xl">3</span>
                            </div>
                            <svg className="w-20 h-20 text-indigo-500 opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1-12.293L13.707 15 15 13.707l-3-3-3 3 1.293 1.293L11 9.707V19h2v-9.293z" />
                            </svg>
                        </div>
                        {/* Content for step 3 */}
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                            Generate & Publish
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Our AI generates your content in seconds. Review, edit if needed, and publish directly to your platforms.
                        </p>
                        {/* Social media icons */}
                        <div className="flex flex-wrap justify-center space-x-4 mb-4">
                            <a href="#" className="text-gray-400 hover:text-gray-900 transition">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2.163c3.204 0 3.584.012 4.851.07 1.17.055 1.805.249 2.227.481.685.394 1.127.876 1.547 1.296.42.42.82.841 1.24 1.526.233.42.425 1.056.48 2.225.059 1.267.07 1.647.07 4.851s-.012 3.584-.07 4.851c-.055 1.17-.249 1.805-.481 2.227-.394.685-.876 1.127-1.296 1.547-.42.42-.841.82-1.526 1.24-.42.233-1.056.425-2.225.48-.654.028-1.312.064-2.001.07-1.267.058-1.647.07-4.851.07s-3.584-.012-4.851-.07c-1.17-.055-1.805-.249-2.227-.481-.685-.394-1.127-.876-1.547-1.296-.42-.42-.82-.841-1.526-1.24-.42-.233-1.056-.425-2.225-.48-.058-1.267-.07-1.647-.07-4.851s.012-3.584.07-4.851c.055-1.17.249-1.805.481-2.227.394-.685.876-1.127 1.296-1.547.42-.42.841-.82 1.526-1.24.42-.233 1.056-.425 2.225-.48 1.267-.059 1.647-.07 4.851-.07zm0-2.163c-3.25 0-3.668.014-4.942.074-1.34.061-2.075.29-2.748.653-.787.42-.787 1.109-1.564 1.887-1.563 1.563-1.563 4.098-1.563 6.958 0 2.86 0 5.395 1.563 6.958 0 0 .777.777 1.564 1.887.673.363 1.408.592 2.748.653 1.274.06 1.692.074 4.942.074s3.668-.014 4.942-.074c1.34-.061 2.075-.29 2.748-.653.787-.42 1.171-1.264 1.564-1.887 1.563-1.563 1.563-4.098 1.563-6.958 0-2.86 0-5.395-1.563-6.958-.393-.623-.777-1.467-1.564-1.887-.673-.363-1.408-.592-2.748-.653-1.274-.06-1.692-.074-4.942-.074zm0 5.867c-3.111 0-5.633 2.522-5.633 5.633s2.522 5.633 5.633 5.633 5.633-2.522 5.633-5.633-2.522-5.633-5.633-5.633zm0 9.163c-1.942 0-3.53-1.588-3.53-3.53s1.588-3.53 3.53-3.53 3.53 1.588 3.53 3.53-1.588 3.53-3.53 3.53zm6.657-11.854c-.675 0-1.222.547-1.222 1.222s.547 1.222 1.222 1.222 1.222-.547 1.222-1.222-.547-1.222-1.222-1.222z" /></svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-900 transition">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.37-.83.5-1.75.85-2.73 1.05-.78-.83-1.89-1.35-3.13-1.35-2.36 0-4.28 1.92-4.28 4.28 0 .34.04.67.11.99-3.56-.18-6.72-1.89-8.84-4.48-.37.64-.58 1.38-.58 2.18 0 1.48.75 2.79 1.9 3.56-.7-.02-1.35-.21-1.92-.53v.05c0 2.08 1.48 3.82 3.44 4.21-.36.1-.73.15-1.12.15-.27 0-.53-.03-.79-.08.55 1.7 2.15 2.94 4.05 2.97-1.48 1.16-3.35 1.85-5.38 1.85-.35 0-.7-.02-1.05-.06 1.9 1.22 4.15 1.93 6.6 1.93 7.92 0 12.26-6.55 12.26-12.26 0-.19-.01-.38-.01-.57.84-.61 1.56-1.36 2.14-2.22z" /></svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-900 transition">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.988h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                            </a>
                        </div>
                        <a href="#" className="flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition">
                            <span className="mr-1">One-click publish</span>
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 4l-1.41 1.41L14.17 9H4v2h10.17l-3.58 3.59L12 16l6-6-6-6z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateContentSteps;
