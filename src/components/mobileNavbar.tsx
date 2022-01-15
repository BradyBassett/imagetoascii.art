import React, { useState } from "react";

const MobileNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="h-24 px-6 flex">
            <h1 className="uppercase text-slate-200 self-center w-min mx-16 text-4xl font-semibold font-title">
                imagetoascii.art
            </h1>
            <ul className="absolute right-6 w-16 h-16 bg-slate-200 rounded-3xl self-center">
                <div className="">
                    <li className="bg-blue-600 w-12 h-2 rounded-md"></li>
                    <li className="bg-blue-600 w-12 h-2 rounded-md"></li>
                    <li className="bg-blue-600 w-12 h-2 rounded-md"></li>
                </div>
            </ul>
        </nav>
    );
};

export default MobileNavbar;
