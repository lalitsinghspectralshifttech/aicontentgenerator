import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const SideMenu: React.FC = () => {
  const [activeItem, setActiveItem] = useState("");
  // const navigate = useNavigate();
  const mainMenuItems = [
    { key: "dashboard", label: "Dashboard", path: "/dashboard", icon: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" /></svg> },
    { key: "BrandProfile", label: "Content Generator", path: "/Brands", icon: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg> },
    { key: "my-brands", label: "My Brands", path: "/BrandProfile", icon: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M10 4v4h4V4h-4zm6 0v4h4V4h-4zM2 4v4h4V4H2zm8 6v4h4v-4h-4zm6 0v4h4v-4h-4zM2 10v4h4v-4H2zm8 6v4h4v-4h-4zm6 0v4h4v-4h-4zM2 16v4h4v-4H2z" /></svg> },
    { key: "my-products", label: "My Products", path: "/MyProducts", icon: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 18l-8-16h16l-8 16z" /></svg> },
    { key: "my-content", label: "My Content", path: "/MyContent", icon: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M22 6.92l-5.69 5.68L19.23 15h-2.16l-2.91-2.92L8.76 19.34l-2.47-2.47-4.25 4.25-1.42-1.42 4.24-4.24 2.47 2.47L17.07 8.76 19 6.83 22 6.92z" /></svg> },
    { key: "social-channels", label: "Social Channels", path: "/SocialChannels", icon: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M22 6h-3.01v14H22V6zm-5.01 0h-3.01v14h3.01V6zm-5.01 0h-3.01v14h3.01V6zm-5.01 0H2v14h3.01V6z" /></svg> },
    { key: "settings", label: "Settings", path: "/Settings", icon: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.25l-2.49.88c-.5-.38-1.03-.7-1.62-.94L14.4 2.1c-.02-.21-.21-.35-.42-.35h-4c-.21 0-.4.14-.42.35l-.47 2.64c-.59.24-1.12.56-1.62.94L3.68 4.79c-.22-.06-.49.03-.61.25l-2 3.46c-.12.22-.07.49.12.64l2.11 1.65c-.04.32-.07.64-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.31.61.25l2.49-.88c.5.38 1.03.7 1.62.94l.47 2.64c.02.21.21.35.42.35h4c.21 0 .4-.14.42-.35l.47-2.64c.59-.24 1.12-.56 1.62-.94l2.49.88c.22.06.49-.03.61-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" /></svg> },
    { key: "api-keys", label: "Content Generate", path: "/GeminiImageGenerator", icon: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-4.18c-.41-.33-.91-.5-1.42-.5s-1.01.17-1.42.5H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zM5 21V5h2v2h2V5h6v2h2V5h2v16H5zm2-14h2v2H7V7zm4 0h2v2h-2V7z" /></svg> },
    // { key: "api-keys", label: "API Keys", path: "/APIKeys", icon: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-4.18c-.41-.33-.91-.5-1.42-.5s-1.01.17-1.42.5H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zM5 21V5h2v2h2V5h6v2h2V5h2v16H5zm2-14h2v2H7V7zm4 0h2v2h-2V7z" /></svg> },

  ];

  const supportMenuItems = [
    { key: "upgrade-plan", label: "Upgrade Plan", path: "/UpgradePlan", icon: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l-5 5h10l-5-5zM4 11l-2 2h4l2-2h-4zm16 0l-2 2h4l2-2h-4zM8 15l-3 3h6l3-3h-6zm8 0l-3 3h6l3-3h-6zm-4-4l-3 3h6l3-3h-6z" /></svg> },
    { key: "help-support", label: "Help & Support", path: "/HelpSupportPage", icon: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg> },
  ];

  return (
    <div className="flex flex-col h-screen bg-white text-black w-64 p-6 border-r border-t">
      {/* Logo */}
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white font-bold text-lg">
          UST
        </div>
        <div className="ml-2 flex flex-col">
          <span className="font-semibold text-black">UST Global</span>
          <span className="text-gray-600 text-sm">AI Content Platform</span>
        </div>
      </div>

      {/* Main Menu */}
      <div className="flex-grow">
        <h3 className="uppercase text-xs font-bold text-gray-400 mb-4">Main</h3>
        <nav className="space-y-2">
          {mainMenuItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.path}
              onClick={() => setActiveItem(item.key)}
              className={({ isActive }) =>
                `flex items-center space-x-3 p-1 rounded-md transition duration-200 ${isActive || activeItem === item.key
                  ? "bg-teal-400 text-white shadow-lg"
                  : "text-slate-800 hover:bg-slate-200"
                }`
              }
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Support Menu */}
        <h3 className="uppercase text-xs font-bold text-gray-400 mt-6 mb-4">Support</h3>
        <nav className="space-y-2">
          {supportMenuItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.path}
              onClick={() => setActiveItem(item.key)}
              className={({ isActive }) =>
                `flex items-center space-x-3 p-1 rounded-md transition duration-200 ${isActive || activeItem === item.key
                  ? "bg-teal-400 text-white shadow-lg"
                  : "text-slate-800 hover:bg-slate-200"
                }`
              }
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="pt-4 border-t mt-2">
          <NavLink
            to="/Dashboard"
            className="flex items-center space-x-3 text-slate-800 hover:bg-slate-200 rounded-md transition duration-200"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M16 9v-4l-12 12h11v4l5-5-5-5z" />
            </svg>
            <span className="font-medium">Log out</span>
          </NavLink>
        </div>

      </div>


    </div>
  );
};

export default SideMenu;
