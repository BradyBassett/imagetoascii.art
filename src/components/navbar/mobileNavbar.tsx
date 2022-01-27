import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { navList } from "../../data";

const MobileNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isOpen]);

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed right-6 z-20 h-10 w-10 self-center rounded-xl border-2 border-blue-600 bg-slate-200 sm:h-12 sm:w-12 sm:rounded-2xl xl:h-16 xl:w-16 5xl:hidden"
            >
                <div className="mx-auto w-min align-middle">
                    <div
                        className={`my-1 h-1 w-6 rounded-md bg-blue-600 transition-all duration-200 ease-in sm:w-8 xl:w-10${
                            isOpen ? " translate-y-2 rotate-45 transform" : ""
                        }`}
                    ></div>
                    <div
                        className={`my-1 h-1 w-6 rounded-md bg-blue-600 transition-all duration-300 ease-out sm:w-8 xl:w-10${
                            isOpen ? " translate-x-5 transform opacity-0" : ""
                        }`}
                    ></div>
                    <div
                        className={`my-1 h-1 w-6 rounded-md bg-blue-600 transition-all duration-200 ease-in sm:w-8 xl:w-10${
                            isOpen ? " -translate-y-2 -rotate-45 transform" : ""
                        }`}
                    ></div>
                </div>
            </button>
            <div
                className={`fixed left-0 top-0 z-10 h-screen w-screen bg-slate-200 transition-all duration-500 ease-in-out 5xl:hidden${
                    !isOpen ? " translate-x-full transform" : ""
                }`}
            >
                <ul className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                    {navList.map((link, index) => {
                        const { path, text } = link;
                        const delay = "delay-" + (index * 250 + 250);
                        return (
                            <li
                                key={index}
                                className={`my-16 text-center text-2xl text-blue-600 transition-all ease-out ${delay} duration-300 sm:text-3xl md:text-4xl ${
                                    !isOpen ? " -translate-y-6 opacity-0" : ""
                                }`}
                            >
                                <Link
                                    className="transition-all duration-200 ease-in hover:border-b-2 hover:border-blue-600"
                                    onClick={() => setIsOpen(false)}
                                    to={path}
                                >
                                    {text}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <Outlet />
        </>
    );
};

export default MobileNavbar;
