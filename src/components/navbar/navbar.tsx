import React from "react";
import { Outlet, Link } from "react-router-dom";
import MobileNavbar from "./mobileNavbar";
import DesktopNavbar from "./desktopNavbar";

const Navbar: React.FC = () => {
    return (
        <>
            <nav className="flex h-24 px-6">
                <Link
                    className="w-min self-center font-title text-2xl font-semibold uppercase text-slate-200 transition-all duration-150 ease-in hover:border-b-2 hover:border-slate-200 hover:pt-[2px] sm:ml-[8%] sm:text-3xl md:mx-[12%] md:text-4xl lg:mx-auto xl:text-5xl 5xl:ml-1"
                    to="/"
                >
                    imagetoascii.art
                </Link>
                <MobileNavbar />
                <DesktopNavbar />
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;
