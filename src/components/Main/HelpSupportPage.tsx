import React from "react";

export default function HelpSupportPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-1">Help & Support</h1>
        <p className="text-gray-500 text-center mb-7">Reach out to our support team for assistance</p>

        {/* Search bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search for help..."
            className="w-full max-w-xl border border-gray-300 bg-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Support grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Support Options */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-xl border border-gray-200 shadow p-5">
              <div className="flex items-start mb-2">
                <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="8"/><path d="M8 15h8M8 11h8"/></svg>
                </span>
                <div>
                  <div className="font-semibold">Live Chat</div>
                  <div className="text-sm text-gray-500">Chat with our support team for immediate assistance with any questions.</div>
                </div>
              </div>
              <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700">Start Chat</button>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow p-5">
              <div className="flex items-start mb-2">
                <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="8"/><path d="M8 12h.01M12 12h.01M16 12h.01"/></svg>
                </span>
                <div>
                  <div className="font-semibold">Email Support</div>
                  <div className="text-sm text-gray-500">Send us an email and we&#39;ll get back to you within 24 hours.</div>
                </div>
              </div>
              <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700">Email Us</button>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow p-5">
              <div className="flex items-start mb-2">
                <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="4" width="12" height="16" rx="2"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="16" y2="16"/></svg>
                </span>
                <div>
                  <div className="font-semibold">Documentation</div>
                  <div className="text-sm text-gray-500">Browse our detailed documentation for in-depth information.</div>
                </div>
              </div>
              <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700">View Docs</button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl border border-gray-200 shadow p-8 mb-8">
              <h2 className="font-semibold mb-4">Contact Our Support Team</h2>
              <form className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">Your Name</label>
                    <input className="w-full border border-gray-300 rounded px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"/>
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">Email Address</label>
                    <input className="w-full border border-gray-300 rounded px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"/>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Subject</label>
                  <input className="w-full border border-gray-300 rounded px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"/>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea rows={5} className="w-full border border-gray-300 rounded px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"/>
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="flex items-center bg-blue-600 text-white px-5 py-2 font-medium rounded hover:bg-blue-700">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 2L11 13" /><path d="M22 2L15 22l-4.5-9-9-4.5L22 2z" /></svg>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            {/* Support Hours */}
            <div className="bg-white rounded-xl border border-gray-200 shadow p-8">
              <h3 className="font-semibold mb-2">Support Hours</h3>
              <div className="text-sm text-gray-700 mb-3">
                Our support team is available to help you during the following hours:
              </div>
              <ul className="mb-3 text-sm text-gray-700">
                <li className="flex items-center justify-between max-w-sm">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 8:00 PM EST</span>
                </li>
                <li className="flex items-center justify-between max-w-sm">
                  <span>Saturday:</span>
                  <span className="font-medium">10:00 AM - 6:00 PM EST</span>
                </li>
                <li className="flex items-center justify-between max-w-sm">
                  <span>Sunday:</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
              <div className="text-sm">
                <span className="font-bold">Emergency Support</span><br/>
                For urgent issues outside of regular hours, premium plan customers can access our emergency support line.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
