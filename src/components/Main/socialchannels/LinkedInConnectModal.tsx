import React from "react";
import { IoClose } from 'react-icons/io5';

interface LinkedInConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LinkedInConnectModal: React.FC<LinkedInConnectModalProps> = ({ isOpen, onClose }) => {
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
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          <button onClick={onClose} className="p-1 rounded-full hover:bg-blue-500 transition-colors">
            <IoClose className="h-6 w-6" />
          </button>
        </button>
        <div className="flex flex-col items-center">
          <div className="bg-blue-100 p-3 rounded-full mb-3">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-blue-700" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="12" fill="currentColor" className="text-blue-700" />
              <path d="M17 17V13.5C17 12.3954 16.1046 11.5 15 11.5C13.8954 11.5 13 12.3954 13 13.5V17M9 17V10M9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9C7 9.55228 7.44772 10 8 10C8.55228 10 9 9.55228 9 9Z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold mb-2 text-blue-800">Connect to LinkedIn</h2>
          <p className="text-gray-600 mb-4 text-center">
            Log in to your LinkedIn account to connect it with SocialForge.
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
              <button type="button" className="text-blue-700 text-sm hover:underline">
                Forgot password?
              </button>
            </div>
            <button
              type="submit"
              className="w-full mt-2 bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg font-semibold"
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

export default LinkedInConnectModal;
