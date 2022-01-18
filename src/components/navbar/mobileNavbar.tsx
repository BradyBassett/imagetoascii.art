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
                className="fixed right-6 w-10 h-10 bg-slate-200 rounded-xl self-center border-blue-600 border-2 z-20 sm:h-12 xl:h-16 sm:w-12 xl:w-16 sm:rounded-2xl 5xl:hidden"
            >
                <div className="w-min mx-auto align-middle">
                    <div
                        className={`bg-blue-600 w-6 h-1 rounded-md my-1 transition-all ease-in duration-200 sm:w-8 xl:w-10${
                            isOpen ? " transform rotate-45 translate-y-2" : ""
                        }`}
                    ></div>
                    <div
                        className={`bg-blue-600 w-6 h-1 rounded-md my-1 transition-all ease-out duration-300 sm:w-8 xl:w-10${
                            isOpen ? " transform translate-x-5 opacity-0" : ""
                        }`}
                    ></div>
                    <div
                        className={`bg-blue-600 w-6 h-1 rounded-md my-1 transition-all ease-in duration-200 sm:w-8 xl:w-10${
                            isOpen ? " transform -rotate-45 -translate-y-2" : ""
                        }`}
                    ></div>
                </div>
            </button>
            <div
                className={`fixed left-0 top-0 bg-slate-200 w-screen h-screen z-10 transition-all ease-in-out duration-500 5xl:hidden${
                    !isOpen ? " transform translate-x-full" : ""
                }`}
            >
                <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {navList.map((link, index) => {
                        const { path, text } = link;
                        const delay = "delay-" + (index * 250 + 250);
                        return (
                            <li
                                key={index}
                                className={`text-blue-600 text-2xl my-16 text-center transition-all ease-out ${delay} sm:text-3xl md:text-4xl duration-300 ${
                                    !isOpen ? " opacity-0 -translate-y-6" : ""
                                }`}
                            >
                                <Link
                                    className="transition-all ease-in duration-200 hover:border-b-2 hover:border-blue-600"
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
