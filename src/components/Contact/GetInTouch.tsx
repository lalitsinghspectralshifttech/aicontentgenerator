import React from 'react';
import FAQSection from '../Pricing/FAQSection';
import VisitOurOffice from './VisitOurOffice';

const GetInTouch = () => {
    return (
        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    Get in Touch
                </h2>
                <p className="text-lg text-gray-600">
                    Have questions about SocialForge? Our team is here to help you with anything you need.
                </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
                {/* Contact Form */}
                <div className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                Company (Optional)
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                Subject
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            >
                                <option>Select a subject</option>
                                <option>General Inquiry</option>
                                <option>Technical Support</option>
                                <option>Billing Question</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full inline-flex items-center justify-center space-x-2 bg-teal-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-teal-600 transition duration-300"
                        >
                            <span>Send Message</span>
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="bg-gray-900 text-white p-8 space-y-8">
                    <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                    <div>
                        <p className="font-semibold">Our Office</p>
                        <p className="text-gray-400">123 Product Lane</p>
                        <p className="text-gray-400">San Francisco, CA 94107</p>
                        <p className="text-gray-400">United States</p>
                    </div>
                    <div>
                        <p className="font-semibold">Email Us</p>
                        <p className="text-teal-400 hover:underline">info@socialforge.com</p>
                        <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
                    </div>
                    <div>
                        <p className="font-semibold">Call Us</p>
                        <p className="text-gray-400">+1 (555) 123-4567</p>
                        <p className="text-gray-400 text-sm">Mon-Fri from 9am to 5pm EST</p>
                    </div>
                    <div>
                        <p className="font-semibold mb-2">Follow Us</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-twitter"
                                >
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 11.5-13.3 10.4 5.4 1.1 10.6-5.8 10-10.9-4.8-.4-9.4-1.5-13.6-3.5 2.5 7.4 9.9 11.2 16.5 10.2l.6-1.5" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-instagram"
                                >
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" x2="17.5" y1="6.5" y2="6.5" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-youtube"
                                >
                                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10l5.85-2.22A2 2 0 0 1 11 6.55V8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v1.45a2 2 0 0 1-2.65 1.77L2.5 17z" />
                                    <path d="M21.5 17a24.12 24.12 0 0 0 0-10l-5.85-2.22A2 2 0 0 0 13 6.55V8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2v1.45a2 2 0 0 0 2.65 1.77L21.5 17z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-linkedin"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <FAQSection />
            <VisitOurOffice />
        </section>
    );
};

export default GetInTouch;
