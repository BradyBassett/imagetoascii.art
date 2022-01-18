import React from "react";
import { Outlet, Link } from "react-router-dom";
import MobileNavbar from "./mobileNavbar";
import DesktopNavbar from "./desktopNavbar";

const Navbar: React.FC = () => {
    return (
        <>
            <nav className="h-24 px-6 flex">
                <Link
                    className="uppercase text-slate-200 self-center w-min text-2xl font-semibold font-title transition-all ease-in duration-150 sm:ml-[8%] md:mx-[12%] lg:mx-auto 5xl:ml-1 sm:text-3xl md:text-4xl xl:text-5xl hover:border-b-2 hover:border-slate-200 hover:pt-[2px]"
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
