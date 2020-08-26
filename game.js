

class Game {
    constructor(ctx) {
    //Canvas
    this.canvasWidth = 10000;
    this.canvasHeight = 500;
    this.ctx = ctx;
    }

    drawBoard() {
        console.log("I'm here")
        this.ctx.beginPath();
        this.ctx.rect(this.canvasWidth / 3 - 10, 0, this.canvasWidth / 3, this.canvasHeight);
        this.ctx.rect(this.canvasWidth * 0.66 - 10, 0, this.canvasWidth * 0.66, this.canvasHeight);
        this.ctx.rect(0, this.canvasHeight / 3 - 10, this.canvasWidth, this.canvasHeight / 3);
        this.ctx.rect(0, this.canvasHeight * 0.66 - 10, this.canvasWidth, this.canvasHeight * 0.66);
    }


}