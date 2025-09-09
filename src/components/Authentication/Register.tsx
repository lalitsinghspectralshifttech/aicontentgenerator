import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const App: React.FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="bg-[#f0f4f9] min-h-screen flex items-center justify-center p-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-0 bg-white shadow-xl rounded-xl overflow-hidden font-sans">
                {/* Left Side: Login Form */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center text-center">
                    <div className="flex items-center justify-center text-center space-x-2 mb-6">
                        {/* SocialForge Logo/Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 22h20L12 2zm0 4.1L19.4 20h-14.8L12 6.1zM11 10h2v5h-2v-5zm0 6h2v2h-2v-2z" />
                        </svg>
                        <span className="font-bold text-2xl text-gray-900">AI Content Generator</span>
                    </div>
                    <h1 className="text-xl md:text-2xl font-bold  text-gray-900 mb-2">Create your account</h1>
                    <p className="text-gray-500 mb-8">Start creating AI-powered product content</p>

                    <div className="space-y-4 mb-8">
                        <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition">
                            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google logo" className="w-5 h-5 mr-2" />
                            Continue with Google
                        </button>
                        <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition">
                            <img src="https://img.icons8.com/fluency/48/000000/mac-os.png" alt="Apple logo" className="w-5 h-5 mr-2" />
                            Continue with Apple
                        </button>
                    </div>

                    <div className="flex items-center mb-8">
                        <hr className="flex-grow border-t border-gray-300" />
                        <span className="mx-4 text-sm text-gray-500">Or continue with</span>
                        <hr className="flex-grow border-t border-gray-300" />
                    </div>

                    <form className="space-y-6 text-left">
                        <div className=''>
                            <span>Full Name</span>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="your name"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <span>Email Address</span>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="relative">
                            <span>Password</span>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                placeholder="Create a password"
                                className="w-full p-3 border border-gray-300 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />


                            <span
                                className="absolute right-3 top-1/2 translate-y-1/5 text-gray-400 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {/* SVG for eye icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    {showPassword ? (
                                        <path d="M12 4.5c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                                    ) : (
                                        <path d="M12 4.5c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                                    )}
                                </svg>
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                            </div>
                            <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition"
                            onClick={() => navigate('/Dashboard')}
                        >
                            Create account
                        </button>
                    </form>
                    <div className="mt-6 text-center text-sm text-gray-500">
                        Already have an account?
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Sign in</a>
                    </div>
                    <p className="mt-8 text-center text-xs text-gray-400">
                        By signing up you agree to our
                        <a href="#" className="underline text-teal-500">Terms of Service</a> and <a href="#" className="underline text-teal-500">Privacy Policy</a>.
                    </p>
                </div>

                {/* Right Side: Content Preview */}
                <div className="relative bg-gray-900 p-8 md:p-12 lg:p-16 hidden lg:block">
                    <div className="relative z-10">
                        <div className="flex items-center space-x-2 text-gray-400 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
                                <path d="M14 2v6h6"></path>
                                <path d="M10 10l-2 2 2 2"></path>
                                <path d="M14 10l2 2-2 2"></path>
                            </svg>
                            <span className="font-medium">AI-Powered Content</span>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-xl shadow-lg relative">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold text-gray-50">Generated Content</h3>
                                <span className="text-gray-400 text-sm">just now</span>
                            </div>
                            <div className="bg-gray-700 p-4 rounded-lg">
                                <p className="text-gray-200 text-sm mb-4">
                                    Introducing our new Ultra Hydration Serum 💧✨
                                </p>
                                <p className="text-gray-300 text-sm mb-4">
                                    This lightweight formula delivers intense hydration while helping to repair your skin's moisture barrier.
                                </p>
                                <p className="text-gray-200 text-sm font-semibold mb-2">Key benefits:</p>
                                <ul className="text-sm text-gray-300 space-y-2">
                                    <li className="flex items-center">
                                        <span className="bg-green-500 rounded-full p-0.5 mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                                            </svg>
                                        </span>
                                        72-hour hydration
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-green-500 rounded-full p-0.5 mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                                            </svg>
                                        </span>
                                        Suitable for all skin types
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-green-500 rounded-full p-0.5 mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                                            </svg>
                                        </span>
                                        Non-greasy formula
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className="mt-8 text-gray-400 text-sm relative z-10">
                        Join thousands of product marketers creating AI-powered content that drives sales
                    </p>
                    <div className="flex items-center space-x-2 mt-4 relative z-10">
                        <img src="photo-1581235720704-06d3acfcb36f.avif" alt="Profile 1" className="h-8 w-8 rounded-full border-2 border-gray-600" />
                        <img src="photo-1611162616475-46b635cb6868.avif" alt="Profile 2" className="h-8 w-8 rounded-full border-2 border-gray-600 -ml-2" />
                        <img src="pngtree-creative-company-logo-png-image_1197025.jpg" alt="Profile 3" className="h-8 w-8 rounded-full border-2 border-gray-600 -ml-2" />
                        <img src="freepik__the-style-is-candid-image-photography-with-natural__39556.png" alt="Profile 4" className="h-8 w-8 rounded-full border-2 border-gray-600 -ml-2" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 to-indigo-900 opacity-60 rounded-xl"></div>
                    <div className="absolute inset-0 bg-cover bg-center rounded-xl" style={{ backgroundImage: "url('https://placehold.co/600x800/222222/000000')" }}></div>
                </div>
            </div>
        </div>
    );
};

export default App;
