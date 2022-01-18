import { asciiCharacters } from "../../data";

export default class Character {
    public value: string;
    public y: number;
    public alpha: number;
    public decay: number;

    constructor(public x: number, public velocityX: number, public velocityY: number) {
        this.x = x;
        this.y = -8;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
        this.value = this.getAsciiChar();
        this.alpha = Math.random();
        this.decay = 0.002;
    }

    getAsciiChar(): string {
        return asciiCharacters[Math.floor(Math.random() * asciiCharacters.length)];
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = "#e2e8f0";
        ctx.fillText(this.value, this.x, this.y);
    }

    update(ctx: CanvasRenderingContext2D): void {
        this.velocityX - 0.01;
        this.velocityY - 0.01;
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.alpha -= this.decay;
        this.draw(ctx);
    }
}
