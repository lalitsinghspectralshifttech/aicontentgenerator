import React from "react";
import { IoClose } from 'react-icons/io5';

interface TwitterConnectModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TwitterConnectModal: React.FC<TwitterConnectModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            onClick={handleBackdropClick}>
            <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 relative">
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-900"
                    onClick={onClose}
                    aria-label="Close"
                >
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-blue-400 transition-colors">
                        <IoClose className="h-6 w-6" />
                    </button>
                </button>
                <div className="flex flex-col items-center">
                    <div className="bg-blue-50 p-3 rounded-full mb-3">
                        <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-400" fill="currentColor">
                            <path d="M19.633 7.997c.013.176.013.353.013.53 0 5.386-4.098 11.603-11.603 11.603-2.307 0-4.454-.678-6.259-1.85.323.038.646.063.97.063 1.916 0 3.68-.654 5.087-1.751a4.1 4.1 0 0 1-3.828-2.842c.254.038.484.063.749.063.353 0 .707-.05 1.035-.135a4.092 4.092 0 0 1-3.287-4.017v-.051a4.138 4.138 0 0 0 1.85.52 4.09 4.09 0 0 1-1.825-3.404c0-.749.202-1.445.56-2.046a11.618 11.618 0 0 0 8.428 4.284 4.62 4.62 0 0 1-.102-.937c0-2.287 1.859-4.146 4.146-4.146 1.194 0 2.272.504 3.03 1.32a8.26 8.26 0 0 0 2.605-.996 4.09 4.09 0 0 1-1.813 2.275 8.291 8.291 0 0 0 2.367-.634 8.802 8.802 0 0 1-2.041 2.115z" />
                        </svg>
                    </div>
                    <h2 className="text-lg font-semibold mb-2">Connect to Twitter</h2>
                    <p className="text-gray-600 mb-4 text-center">
                        Log in to your Twitter account to connect it with SocialForge.
                    </p>
                    <form className="w-full flex flex-col gap-4">
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1 block">Email or Username</label>
                            <input
                                type="text"
                                placeholder="Enter your email or username"
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1 block">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="flex items-center text-sm">
                                <input type="checkbox" className="form-checkbox mr-2" />
                                Remember me
                            </label>
                            <button type="button" className="text-blue-600 text-sm hover:underline">
                                Forgot password?
                            </button>
                        </div>
                        <button
                            type="submit"
                            className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
                        >
                            Log In &amp; Connect
                        </button>
                    </form>
                    <p className="text-xs text-gray-400 mt-3 text-center">
                        By connecting your account, you agree to our{" "}
                        <span className="underline">Terms of Service</span> and{" "}
                        <span className="underline">Privacy Policy</span>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TwitterConnectModal;
