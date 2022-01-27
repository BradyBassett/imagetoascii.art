import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { navList } from "../../data";

interface Ilink {
    id: number;
    value: boolean;
}

const DesktopNavbar: React.FC = () => {
    const [isLinked, setIsLinked] = useState([
        { id: 0, value: true },
        { id: 1, value: false },
        { id: 2, value: false },
        { id: 3, value: false },
    ]);

    const handleSelectedLink = (index: number): void => {
        setIsLinked(
            isLinked.map((link): Ilink => {
                if (link.id === index) {
                    return { ...link, value: true };
                } else {
                    return { ...link, value: false };
                }
            })
        );
    };

    return (
        <>
            <ul className="hidden self-center text-slate-200 5xl:flex">
                {navList.map((link, index) => {
                    const { path, text } = link;
                    return (
                        <li className="px-5 text-2xl 6xl:text-3xl 7xl:px-8" key={index}>
                            <Link
                                className={`transition-all duration-200 ease-in hover:border-b-2 hover:border-slate-200${
                                    isLinked[index].value ? " border-b-2 border-slate-200" : ""
                                }`}
                                to={path}
                                onClick={() => handleSelectedLink(index)}
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
