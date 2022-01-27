import React, { useState, useRef, FormEvent, ChangeEvent } from "react";

const Feedback: React.FC = () => {
    return (
        <>
            <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quisquam adipisci
                aliquid. Quae, totam voluptas! Cumque expedita pariatur quae ratione unde autem
                recusandae fugit ea dolor! Eum odit officia est?
            </p>
            <form className="mt-4 grid w-full grid-cols-1 gap-2">
                <textarea
                    className="mx-auto w-full rounded-lg border-2 border-blue-400 bg-slate-200 focus:border-blue-600 active:border-blue-600 md:w-3/4 lg:w-1/2"
                    rows={5}
                ></textarea>
                <input
                    className="mx-auto w-full rounded-lg border-2 border-blue-400 bg-slate-200 focus:border-blue-600 active:border-blue-600 md:w-3/4 lg:w-1/2"
                    type="text"
                />
                <button className="mx-auto w-min rounded-xl border-2 border-transparent bg-blue-600 p-2 text-xl text-slate-200 transition-all duration-150 ease-out hover:bg-blue-500 active:border-blue-600 active:bg-transparent active:text-blue-600">
                    Submit
                </button>
            </form>
        </>
    );
};

export default Feedback;
