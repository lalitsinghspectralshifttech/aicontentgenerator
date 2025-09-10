// src/components/FacebookConnectModal.tsx

import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

// Define the props interface for type safety
interface FacebookConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FacebookConnectModal: React.FC<FacebookConnectModalProps> = ({ isOpen, onClose }) => {
  // If the modal is not open, don't render anything
  if (!isOpen) {
    return null;
  }

  // Handle clicks outside the modal to close it
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    // Backdrop container
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      onClick={handleBackdropClick}
    >
      {/* Modal panel */}
      <div className="relative w-full max-w-md rounded-lg bg-white shadow-xl mx-4">
        
        {/* Modal Header */}
        <header className="flex items-center justify-between rounded-t-lg bg-blue-600 p-4 text-white">
          <div className="flex items-center gap-2">
            <FaFacebookF className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Connect to Facebook</h2>
          </div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-blue-700 transition-colors">
            <IoClose className="h-6 w-6" />
          </button>
        </header>

        {/* Modal Body */}
        <main className="p-8">
          <div className="flex justify-center mb-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600">
              <FaFacebookF className="h-10 w-10 text-white" />
            </div>
          </div>

          <p className="mb-6 text-center text-gray-600">
            Log in to your Facebook account to connect it with SocialForge
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              {/* Email or Username Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email or Username
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-md bg-blue-600 px-4 py-3 text-lg font-bold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Log In & Connect
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-gray-500">
            By connecting your account, you agree to our{' '}
            <a href="#" className="font-medium text-blue-600 hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="font-medium text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </main>
      </div>
    </div>
  );
};

export default FacebookConnectModal;