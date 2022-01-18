import React, { useState, useRef, FormEvent, ChangeEvent } from "react";

const Feedback: React.FC = () => {
    return (
        <>
            <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quisquam adipisci
                aliquid. Quae, totam voluptas! Cumque expedita pariatur quae ratione unde autem
                recusandae fugit ea dolor! Eum odit officia est?
            </p>
            <form className="grid grid-cols-1 gap-2 mt-4 w-full">
                <textarea
                    className="bg-slate-200 border-blue-400 border-2 rounded-lg w-full mx-auto focus:border-blue-600 active:border-blue-600 md:w-3/4 lg:w-1/2"
                    rows={5}
                ></textarea>
                <input
                    className="bg-slate-200 border-blue-400 border-2 rounded-lg w-full mx-auto focus:border-blue-600 active:border-blue-600 md:w-3/4 lg:w-1/2"
                    type="text"
                />
                <button className="text-slate-200 text-xl rounded-xl mx-auto border-2 border-transparent bg-blue-600 w-min p-2 transition-all ease-out duration-150 hover:bg-blue-500 active:border-blue-600 active:bg-transparent active:text-blue-600">
                    Submit
                </button>
            </form>
        </>
    );
};

export default Feedback;
