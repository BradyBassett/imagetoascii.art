import React from "react";

interface ContentProp {
    content: React.ReactNode;
    title: string;
}

const Container: React.FC<ContentProp> = (props) => {
    const { content, title } = props;
    return (
        <main className="bg-slate-200 w-[85%] h-auto mx-auto my-5 p-4 rounded-sm outline-2 outline-dotted outline-slate-200 outline-offset-2 text-lg lg:w-3/4 3xl:w-[60%] 5xl:w-1/2 7xl:w-[40%] 9xl:w-[35%] 5xl:my-16 5xl:outline-offset-4">
            <h1 className="text-center text-3xl mb-2">{title}</h1>
            {content}
        </main>
    );
};

export default Container;
