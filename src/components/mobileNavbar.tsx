import React, { useState } from "react";

const MobileNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="h-24 px-6 flex">
            <h1 className="uppercase text-slate-200 self-center w-min mx-16 text-4xl font-semibold font-title">
                imagetoascii.art
            </h1>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="absolute right-6 w-12 h-12 bg-slate-200 rounded-2xl self-center"
            >
                <div className="w-min mx-auto align-middle">
                    <div
                        className={`bg-blue-600 w-8 h-1 rounded-md my-1 transition-all ease-in duration-200 ${
                            isOpen && "transform rotate-45 translate-y-2"
                        }`}
                    ></div>
                    <div
                        className={`bg-blue-600 w-8 h-1 rounded-md my-1 transition-all ease-out duration-300 ${
                            isOpen && "transform translate-x-5 opacity-0"
                        }`}
                    ></div>
                    <div
                        className={`bg-blue-600 w-8 h-1 rounded-md my-1 transition-all ease-in duration-200 ${
                            isOpen && "transform -rotate-45 -translate-y-2"
                        }`}
                    ></div>
                </div>
            </button>
        </nav>
    );
};

export default MobileNavbar;
