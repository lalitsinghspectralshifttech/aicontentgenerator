import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            {/* Page Content */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Always visible */}
            <Footer />
        </div>
    );
};

export default Layout;
