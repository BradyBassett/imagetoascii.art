import React from "react";

const Home: React.FC = () => {
    return (
        <main className="mx-auto w-[90%] sm:w-[80%] md:w-3/4 lg:w-[60%] xl:w-1/2 2xl:w-[40%] 4xl:w-[30%] 5xl:mt-16 6xl:w-1/4">
            <div className="my-8">
                <h1 className="hidden text-center font-title text-5xl font-semibold uppercase text-slate-200 5xl:block">
                    imagetoascii.art
                </h1>
                <h2 className="text-center text-xl text-slate-200">
                    Select and upload an image to convert it to ASCII
                </h2>
            </div>
            <div className="h-auto rounded-xl bg-slate-200 drop-shadow-container">
                <h2 className="py-4 text-center text-xl font-semibold">Upload an Image</h2>
                <div className="mx-auto w-3/4 pb-12">
                    <h3 className="cursor-pointer rounded-xl border-2 border-dotted border-blue-400 py-12 px-8 text-center text-lg hover:border-blue-600 5xl:px-16">
                        Click to browse, or drag a file here
                    </h3>
                </div>
            </div>
        </main>
    );
};

export default Home;
