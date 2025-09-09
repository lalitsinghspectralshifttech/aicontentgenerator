import React, { useState } from "react";

const navItems = [
  { label: "Profile", icon: (
    <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M3 21v-1a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v1"/></svg>
  )},
  { label: "Notifications", icon: (
    <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6.002 6.002 0 0 0-4-5.659V4a2 2 0 0 0-4 0v1.341C7.67 7.165 6 9.388 6 12v2.159c0 .538-.214 1.055-.595 1.436L4 17h11zm-2 2a2 2 0 1 0 4 0h-4z"/></svg>
  )},
  { label: "Appearance", icon: (
    <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="5"/></svg>
  )},
  { label: "Security", icon: (
    <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="10" x="2" y="8" rx="2"/><path d="M16 2a4 4 0 0 1 4 4v4"/><path d="M8 2a4 4 0 0 0-4 4v4"/></svg>
  )}
];

export default function SettingsPage() {
  const [selected, setSelected] = useState(0);
  const [profile, setProfile] = useState({
    name: "Demo User",
    email: "lalitkrishn9482@gmail.com",
    company: "Your Company",
    job: "Marketing Manager",
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-gray-500 mb-8">Manage your account preferences and settings</p>
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64">
            <div className="bg-white rounded-xl border border-gray-200 shadow">
              {navItems.map((item, i) => (
                <button
                  key={item.label}
                  className={`w-full flex items-center px-5 py-3 text-left hover:bg-blue-50 focus:outline-none rounded-xl mb-1
                    ${i === selected ? "bg-blue-50 font-medium text-blue-600" : "text-gray-900"}
                  `}
                  onClick={() => setSelected(i)}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          {/* Main Pane */}
          <div className="flex-1">
            <div className="bg-white rounded-xl border border-gray-200 shadow px-10 py-8">
              <h2 className="text-lg font-semibold mb-6">Profile Settings</h2>
              <form className="space-y-6 max-w-2xl">
                <div className="flex items-center mb-8">
                  <div className="flex items-center justify-center w-14 h-14 bg-blue-50 rounded-full mr-5">
                    <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M3 21v-1a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v1"/></svg>
                  </div>
                  <button
                    type="button"
                    className="border border-blue-200 text-blue-700 bg-blue-50 px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-100"
                  >
                    Change avatar
                  </button>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                    value={profile.name}
                    onChange={e => setProfile({ ...profile, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                    value={profile.email}
                    onChange={e => setProfile({ ...profile, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                    value={profile.company}
                    onChange={e => setProfile({ ...profile, company: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                  <input
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                    value={profile.job}
                    onChange={e => setProfile({ ...profile, job: e.target.value })}
                  />
                </div>
                <div className="flex justify-end mt-8">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
