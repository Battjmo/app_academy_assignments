document.addEventListener("DOMContentLoaded", () => {
    const gameCanvas = document.getElementById("gameCanvas");
    gameCanvas.width = 500;
    gameCanvas.height = 700;
    const ctx = gameCanvas.getContext("2d");
    const game = new Game(ctx);
    game.drawBoard();
});

class Game {
    constructor(ctx) {
        //Canvas
        this.canvasWidth = 700;
        this.canvasHeight = 500;
        this.ctx = ctx;
    }

    drawBoard() {
        console.log("I'm here");
        console.log(this.ctx)
        this.ctx.beginPath();
        this.ctx.rect(this.canvasWidth / 3 - 10, 0, this.canvasWidth / 3, this.canvasHeight);

        this.ctx.fillStyle = "#ffffff";
        this.ctx.fill();
        this.ctx.closePath();
    }


}