import React, { useEffect, useRef } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Character from "./character";

const Canvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { width, height } = useWindowDimensions();

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const canvas = canvasRef.current!;
        canvas.width = width;
        canvas.height = height;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const ctx = canvas.getContext("2d")!;
        ctx.font = "10px BalsamiqSans";
        const characterArray: Character[] = [];
        const characterLimit = Math.floor(width / 10);
        let animationFrameID: number;

        const newCharacter = (): Character => {
            const x = Math.floor(Math.random() * width);
            let randValue = Math.random();
            if (randValue >= 0.5) {
                randValue = -0.5;
            } else {
                randValue = 0.5;
            }

            const velocityX = Math.random() * -randValue;
            const velocityY = Math.random() * 1;

            return new Character(x, velocityX, velocityY);
        };

        const render = (): void => {
            animationFrameID = window.requestAnimationFrame(render);
            ctx.clearRect(0, 0, width, height);
            for (let i = 0; i < characterLimit; i++) {
                if (
                    characterArray[i].alpha <= characterArray[i].decay ||
                    characterArray[i].x < 0 ||
                    characterArray[i].x > width
                ) {
                    characterArray[i] = newCharacter();
                }
                characterArray[i].update(ctx);
            }
        };

        for (let i = 0; i < characterLimit; i++) {
            characterArray.push(newCharacter());
        }
        render();

        return () => window.cancelAnimationFrame(animationFrameID);
    }, [width, height]);

    return <canvas className="absolute z-[-1]" ref={canvasRef}></canvas>;
};

export default Canvas;
