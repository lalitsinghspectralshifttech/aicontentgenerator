// import React from "react";
// import { Outlet } from "react-router-dom";
// import SideMenu from "../Sidebar/Sidemenu";

// const DashboardLayout: React.FC = () => {
//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <SideMenu />

//       {/* Dashboard content */}
//       <div className="flex-1 p-4">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;


import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "../Sidebar/Sidemenu";

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 text-white">
        <SideMenu />
      </div>

      {/* Dashboard content */}
      <div className="flex-1 p-4 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
