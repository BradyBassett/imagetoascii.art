import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";

const Footer: React.FC = () => {
    return (
        <footer className="relative mx-auto mt-auto py-8 w-min h-8">
            <div className="self-center text-slate-200 w-screen">
                <a
                    href="https://github.com/BradyBassett/imagetoascii.art"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute flex left-4 transition-all ease-in duration-150 hover:border-b-2 hover:border-slate-200 sm:left-6"
                >
                    <AiOutlineStar className="mr-1" />
                    <h1 className="transform -translate-y-1">Github</h1>
                </a>
                <a
                    href="https://bradybassett.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute flex right-4 transition-all ease-in duration-150 hover:border-b-2 hover:border-slate-200 sm:right-6"
                >
                    <BsGlobe2 className="mr-1" />
                    <h1 className="transform -translate-y-1">bradybassett.me</h1>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
