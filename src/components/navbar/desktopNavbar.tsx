import React from "react";
import { Outlet, Link } from "react-router-dom";
import { navList } from "../../data";

const DesktopNavbar: React.FC = () => {
    return (
        <>
            <ul className="hidden self-center text-slate-200 5xl:flex">
                {navList.map((link, index) => {
                    const { path, text } = link;
                    return (
                        <li className="px-5 text-2xl 6xl:text-3xl 7xl:px-8" key={index}>
                            <Link
                                className="transition-all ease-in duration-200 hover:border-b-2 hover:border-slate-200"
                                to={path}
                            >
                                {text}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <Outlet />
        </>
    );
};

export default DesktopNavbar;
