import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";

const Footer: React.FC = () => {
    return (
        <footer className="relative mx-auto mt-auto h-8 w-min py-8">
            <div className="w-screen self-center text-slate-200">
                <a
                    href="https://github.com/BradyBassett/imagetoascii.art"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute left-4 flex transition-all duration-150 ease-in hover:border-b-2 hover:border-slate-200 sm:left-6"
                >
                    <AiOutlineStar className="mr-1" />
                    <h1 className="-translate-y-1 transform">Github</h1>
                </a>
                <a
                    href="https://bradybassett.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-4 flex transition-all duration-150 ease-in hover:border-b-2 hover:border-slate-200 sm:right-6"
                >
                    <BsGlobe2 className="mr-1" />
                    <h1 className="-translate-y-1 transform">bradybassett.me</h1>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
