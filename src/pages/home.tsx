import React from "react";

const Home: React.FC = () => {
    return (
        <main className="mx-auto w-[90%] 5xl:mt-16 sm: sm:w-[80%] md:w-3/4 lg:w-[60%] xl:w-1/2 2xl:w-[40%] 4xl:w-[30%] 6xl:w-1/4">
            <div className="my-8">
                <h1 className="hidden font-title font-semibold text-center text-slate-200 text-5xl uppercase 5xl:block">
                    imagetoascii.art
                </h1>
                <h2 className="text-center text-xl text-slate-200">
                    Select and upload an image to convert it to ASCII
                </h2>
            </div>
            <div className="bg-slate-200 rounded-xl h-auto">
                <h2 className="font-semibold text-center text-xl py-4">Upload an Image</h2>
                <div className="w-3/4 mx-auto pb-12 cursor-pointer">
                    <h3 className="text-lg text-center border-2 border-blue-400 border-dotted rounded-xl py-5 px-8 hover:border-blue-600 5xl:py-10 5xl:px-16">
                        Click to browse, or drag a file here
                    </h3>
                </div>
            </div>
        </main>
    );
};

export default Home;
