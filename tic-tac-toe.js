document.addEventListener("DOMContentLoaded", () => {
    const gameCanvas = document.getElementById("gameCanvas");
    const ctx = gameCanvas.getContext("2d");
    const game = new Game(ctx);
    gameCanvas.width = game.canvasWidth;
    gameCanvas.height = game.canvasHeight;
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
        this.ctx.fillStyle = "#ffffff";
        this.ctx.rect(this.canvasWidth / 3 - 10, 0, 10, this.canvasHeight);
        this.ctx.rect(this.canvasWidth * 0.66 - 10, 0, 10, this.canvasHeight);
        this.ctx.rect(0, this.canvasHeight / 3 - 10, this.canvasWidth, 10);
        this.ctx.rect(0, this.canvasHeight * 0.66 - 10, this.canvasWidth, 10);
        this.ctx.fill();
    }


}

