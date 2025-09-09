import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

type MenuItem = { label: string; link: string };

const Header: React.FC = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const navigate = useNavigate();

    const cancelClose = () => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
    };

    const openMenu = (name: string) => {
        cancelClose();
        setActiveDropdown(name);
    };

    const scheduleClose = () => {
        cancelClose();
        closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
    };

    const go = (link: string) => {
        navigate(link);
        setActiveDropdown(null);
    };

    const renderDropdown = (menuName: string, items: MenuItem[]) => (
        <div className="relative">
            {/* Trigger Button */}
            <button
                type="button"
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                onMouseEnter={() => openMenu(menuName)}
                onMouseLeave={scheduleClose}
            >
                <span>{menuName}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === menuName ? "rotate-180" : ""
                        }`}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown Menu */}
            <div
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
                className={`absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md border py-1 z-50 transform transition-all duration-300 ease-in-out origin-top ${activeDropdown === menuName
                    ? "opacity-100 scale-y-100 translate-y-0"
                    : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                    }`}
            >
                {items.map((item) => (
                    <button
                        key={item.link}
                        type="button"
                        onClick={() => go(item.link)}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    );

    return (
        <header className="w-full bg-white shadow-sm">
            <nav className="container mx-auto flex items-center justify-between px-6 py-3 relative">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="bg-[#00ADB5] p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9-4 9 4-9 4-9-4zm0 6l9 4 9-4m-9 4v7" />
                        </svg>
                    </div>
                    <button className="font-semibold text-lg text-black"
                        onClick={() => go("/")}>AI Content Generator</button>
                </div>

                {/* Nav Links */}
                <div className="hidden md:flex items-center space-x-6 text-slate text-sm font-semibold">
                    <button onClick={() => go("/")} className="text-gray-700 hover:text-blue-600" type="button">
                        Home
                    </button>

                    {renderDropdown("Features", [
                        { label: "AI Content Generator", link: "/CoreFeatures" },
                        { label: "Image Creation", link: "/HowItWorks" },
                        { label: "Video Creation", link: "/SocialContentSection" },
                        { label: "Analytics & Insights", link: "/SpecificContent" },
                    ])}

                    {renderDropdown("Platforms", [
                        { label: "Instagram", link: "/TailoredPricing" },
                        { label: "Twitter/X", link: "/Twitter" },
                        { label: "Facebook", link: "/Facebook" },
                        { label: "Youtube", link: "/Youtube" },
                        { label: "LinkedIn", link: "/LinkedIn" },
                    ])}

                    <button onClick={() => go("/Pricing")} className="text-gray-700 hover:text-blue-600" type="button">
                        Price
                    </button>

                    <button onClick={() => go("/ResourcesPage")} className="text-gray-700 hover:text-blue-600" type="button">
                        Resources
                    </button>
                    <button onClick={() => go("/GetInTouch")} className="text-gray-700 hover:text-blue-600" type="button">
                        Contact
                    </button>
                </div>

                {/* CTA */}
                <div className="gap-4 hidden md:flex">
                    <button className="bg-[#00ADB5] text-white px-5 py-2 rounded-lg hover:bg-teal-600 transition"
                        onClick={() => go("/Login")}>
                        Login
                    </button>
                    <button className="bg-[#00ADB5] text-white px-5 py-2 rounded-lg hover:bg-teal-600 transition"
                        onClick={() => go("/Register")}>
                        Sign up free
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
