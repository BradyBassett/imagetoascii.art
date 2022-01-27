import React from "react";

interface ContentProp {
    content: React.ReactNode;
    title: string;
}

const Container: React.FC<ContentProp> = (props) => {
    const { content, title } = props;
    return (
        <main className="mx-auto my-5 h-auto w-[85%] rounded-sm bg-slate-200 p-4 text-lg outline-dotted outline-2 outline-offset-2 outline-slate-200 drop-shadow-container lg:w-3/4 3xl:w-[60%] 5xl:my-16 5xl:w-1/2 5xl:outline-offset-4 7xl:w-[40%] 9xl:w-[35%]">
            <h1 className="mb-2 text-center text-3xl">{title}</h1>
            {content}
        </main>
    );
};

export default Container;
