// import React, { useState } from 'react';

// const SideMenu: React.FC = () => {
//   const [activeItem, setActiveItem] = useState('dashboard');

//   const mainMenuItems = [
//     {
//       key: 'dashboard',
//       label: 'Dashboard',
//       icon: (
//         <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0-10h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1z" />
//         </svg>
//       ),
//     },
//     {
//       key: 'BrandProfile',
//       label: 'Content Generator',
//       icon: (
//         <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
//         </svg>
//       ),
//     },
//     {
//       key: 'my-brands',
//       label: 'My Brands',
//       icon: (
//         <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
//         </svg>
//       ),
//     },
//     {
//       key: 'my-products',
//       label: 'My Products',
//       icon: (
//         <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M11 9H9V2H7v7H5V2H3v7c0 2.21 1.79 4 4 4h4v7h2v-7h4c2.21 0 4-1.79 4-4V2h-2v7h-4V2h-2v7z" />
//         </svg>
//       ),
//     },
//     {
//       key: 'my-content',
//       label: 'My Content',
//       icon: (
//         <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" />
//         </svg>
//       ),
//     },
//     {
//       key: 'social-channels',
//       label: 'Social Channels',
//       icon: (
//         <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
//         </svg>
//       ),
//     },
//     {
//       key: 'settings',
//       label: 'Settings',
//       icon: (
//         <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.39-1.07-.75-1.67-1.03L15 2h-4l-.45 3.6c-.6.28-1.15.64-1.67 1.03l-2.49-1c-.22-.08-.49 0-.61.22l-2 3.46c-.12.22-.07.49.12.64l2.11 1.65c-.04.32-.07.64-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.39 1.07.75 1.67 1.03L11 22h4l.45-3.6c.6-.28 1.15-.64 1.67-1.03l2.49 1c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
//         </svg>
//       ),
//     },
//     {
//       key: 'api-keys',
//       label: 'API Keys',
//       icon: (
//         <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M16 11.5c-1.33 0-4-1.17-4-3.5S14.67 4.5 16 4.5s4 1.17 4 3.5-2.67 3.5-4 3.5zm-4 0c-1.33 0-4-1.17-4-3.5S8.67 4.5 10 4.5s4 1.17 4 3.5-2.67 3.5-4 3.5zm8 0c-1.33 0-4-1.17-4-3.5S16.67 4.5 18 4.5s4 1.17 4 3.5-2.67 3.5-4 3.5zM13 13c-1.33 0-4-1.17-4-3.5S11.67 5.5 13 5.5s4 1.17 4 3.5-2.67 3.5-4 3.5zm-2 2c-1.33 0-4-1.17-4-3.5S9.67 7.5 11 7.5s4 1.17 4 3.5-2.67 3.5-4 3.5zm0 2c-1.33 0-4-1.17-4-3.5S9.67 9.5 11 9.5s4 1.17 4 3.5-2.67 3.5-4 3.5z" />
//         </svg>
//       ),
//     },
//   ];

//   const supportMenuItems = [
//     {
//       key: 'upgrade-plan',
//       label: 'Upgrade Plan',
//       icon: (
//         <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-1 16.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm.5-8.5v3h2v-3h-2zm0 4v2h2v-2h-2z" />
//         </svg>
//       ),
//     },
//     {
//       key: 'help-support',
//       label: 'Help & Support',
//       icon: (
//         <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 15h2v2h-2zm0-8h2v6h-2z" />
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <div className="flex flex-col h-screen bg-white text-black  w-64 p-6 border-r">
//       {/* Top logo section */}
//       <div className="flex items-center mb-6">
//         <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-white font-bold text-lg">
//           SF
//         </div>
//         <span className="ml-2 font-semibold text-black">SocialForge</span>
//       </div>

//       {/* Main Menu Section */}
//       <div className="flex-grow">
//         <h3 className="uppercase text-xs font-bold text-gray-400 mb-4">Main</h3>
//         <nav className="space-y-2">
//           {mainMenuItems.map((item) => (
//             <a
//               key={item.key}
//               href="#"
//               onClick={() => setActiveItem(item.key)}
//               className={`flex items-center space-x-3 p-1 rounded-md transition duration-200 ${activeItem === item.key
//                 ? 'bg-teal-400 text-white shadow-lg'
//                 : 'text-slate-800 hover:bg-slate-200'
//                 }`}
//             >
//               {item.icon}
//               <span className="font-medium">{item.label}</span>
//             </a>
//           ))}
//         </nav>

//         {/* Support Menu Section */}
//         <h3 className="uppercase text-xs font-bold text-gray-400 mt-8 mb-4">Support</h3>
//         <nav className="space-y-2">
//           {supportMenuItems.map((item) => (
//             <a
//               key={item.key}
//               href="#"
//               onClick={() => setActiveItem(item.key)}
//               className={`flex items-center space-x-3 p-1 rounded-md transition duration-200 ${activeItem === item.key
//                 ? 'bg-gray-800 text-white shadow-lg'
//                 : 'text-slate-800 hover:bg-slate-200'
//                 }`}
//             >
//               {item.icon}
//               <span className="font-medium">{item.label}</span>
//             </a>
//           ))}
//         </nav>
//       </div>

//       {/* Logout Button */}
//       <div className="mt-auto pt-6 border-t">
//         <a
//           href="#"
//           className="flex items-center space-x-3 p-3 text-slate-800 hover:bg-slate-200 rounded-md transition duration-200"
//         >
//           <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//             <path d="M16 9v-4l-12 12h11v4l5-5-5-5z" />
//           </svg>
//           <span className="font-medium">Log out</span>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default SideMenu;






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
    { key: "api-keys", label: "API Keys", path: "/APIKeys", icon: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-4.18c-.41-.33-.91-.5-1.42-.5s-1.01.17-1.42.5H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zM5 21V5h2v2h2V5h6v2h2V5h2v16H5zm2-14h2v2H7V7zm4 0h2v2h-2V7z" /></svg> },
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
