import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-36">
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center mr-2">
                                <span className="text-white font-bold">SF</span>
                            </div>
                            <span className="text-white text-xl font-semibold">AI Content Generator</span>
                        </div>
                        <p className="text-base mb-8 min-w-80">
                            Create scroll-stopping social media content with the power of AI. Save time, increase engagement, and grow your brand.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" aria-label="Instagram" className="hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.851.07 1.17.055 1.805.249 2.227.481.685.394 1.127.876 1.547 1.296.42.42.82.841 1.24 1.526.233.42.425 1.056.48 2.225.059 1.267.07 1.647.07 4.851s-.012 3.584-.07 4.851c-.055 1.17-.249 1.805-.481 2.227-.394.685-.876 1.127-1.296 1.547-.42.42-.841.82-1.526 1.24-.42.233-1.056.425-2.225.48-.654.028-1.312.064-2.001.07-1.267.058-1.647.07-4.851.07s-3.584-.012-4.851-.07c-1.17-.055-1.805-.249-2.227-.481-.685-.394-1.127-.876-1.547-1.296-.42-.42-.82-.841-1.526-1.24-.42-.233-1.056-.425-2.225-.48-.058-1.267-.07-1.647-.07-4.851s.012-3.584.07-4.851c.055-1.17.249-1.805.481-2.227.394-.685.876-1.127 1.296-1.547.42-.42.841-.82 1.526-1.24.42-.233 1.056-.425 2.225-.48 1.267-.059 1.647-.07 4.851-.07zm0-2.163c-3.25 0-3.668.014-4.942.074-1.34.061-2.075.29-2.748.653-.787.42-.787 1.109-1.564 1.887-1.563 1.563-1.563 4.098-1.563 6.958 0 2.86 0 5.395 1.563 6.958 0 0 .777.777 1.564 1.887.673.363 1.408.592 2.748.653 1.274.06 1.692.074 4.942.074s3.668-.014 4.942-.074c1.34-.061 2.075-.29 2.748-.653.787-.42 1.171-1.264 1.564-1.887 1.563-1.563 1.563-4.098 1.563-6.958 0-2.86 0-5.395-1.563-6.958-.393-.623-.777-1.467-1.564-1.887-.673-.363-1.408-.592-2.748-.653-1.274-.06-1.692-.074-4.942-.074zm0 5.867c-3.111 0-5.633 2.522-5.633 5.633s2.522 5.633 5.633 5.633 5.633-2.522 5.633-5.633-2.522-5.633-5.633-5.633zm0 9.163c-1.942 0-3.53-1.588-3.53-3.53s1.588-3.53 3.53-3.53 3.53 1.588 3.53 3.53-1.588 3.53-3.53 3.53zm6.657-11.854c-.675 0-1.222.547-1.222 1.222s.547 1.222 1.222 1.222 1.222-.547 1.222-1.222-.547-1.222-1.222-1.222z" /></svg>
                            </a>
                            <a href="#" aria-label="Twitter" className="hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.37-.83.5-1.75.85-2.73 1.05-.78-.83-1.89-1.35-3.13-1.35-2.36 0-4.28 1.92-4.28 4.28 0 .34.04.67.11.99-3.56-.18-6.72-1.89-8.84-4.48-.37.64-.58 1.38-.58 2.18 0 1.48.75 2.79 1.9 3.56-.7-.02-1.35-.21-1.92-.53v.05c0 2.08 1.48 3.82 3.44 4.21-.36.1-.73.15-1.12.15-.27 0-.53-.03-.79-.08.55 1.7 2.15 2.94 4.05 2.97-1.48 1.16-3.35 1.85-5.38 1.85-.35 0-.7-.02-1.05-.06 1.9 1.22 4.15 1.93 6.6 1.93 7.92 0 12.26-6.55 12.26-12.26 0-.19-.01-.38-.01-.57.84-.61 1.56-1.36 2.14-2.22z" /></svg>
                            </a>
                            <a href="#" aria-label="Facebook" className="hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.988h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                            </a>
                            <a href="#" aria-label="LinkedIn" className="hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.528-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-white mb-4">PRODUCT</h3>
                        <ul className="space-y-2 text-base">
                            <li><a href="#" className="hover:text-white">Features</a></li>
                            <li><a href="#" className="hover:text-white">Pricing</a></li>
                            <li><a href="#" className="hover:text-white">Use Cases</a></li>
                            <li><a href="#" className="hover:text-white">Integrations</a></li>
                            <li><a href="#" className="hover:text-white">Updates</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-white mb-4">RESOURCES</h3>
                        <ul className="space-y-2 text-base">
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                            <li><a href="#" className="hover:text-white">Help Center</a></li>
                            <li><a href="#" className="hover:text-white">Tutorials</a></li>
                            <li><a href="#" className="hover:text-white">API Docs</a></li>
                            <li><a href="#" className="hover:text-white">Community</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-white mb-4">COMPANY</h3>
                        <ul className="space-y-2 text-base">
                            <li><a href="#" className="hover:text-white">About</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                            <li><a href="#" className="hover:text-white">Partners</a></li>
                            <li><a href="#" className="hover:text-white">Legal</a></li>
                        </ul>
                    </div>
                </div>
                <hr className="my-10 border-gray-700" />
                <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
                    <p className="mb-4 sm:mb-0">© 2025 AI Content Generator. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
