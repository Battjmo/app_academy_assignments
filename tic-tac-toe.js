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
        this.mark1 = "X";
        this.mark2 = "Y";
        this.firstColumnLine = this.canvasWidth / 3;
        this.secondColumnLine = this.canvasWidth * 0.66;
        this.firstRowLine = this.canvasHeight / 3;
        this.secondRowLine = this.canvasHeight * 0.66;
    }

    drawBoard() {
        this.ctx.fillStyle = "#ffffff";
        //first column
        this.ctx.rect(this.firstColumnLine - 10, 0, 10, this.canvasHeight);
        //second column
        this.ctx.rect(this.secondColumnLine - 10, 0, 10, this.canvasHeight);
        this.ctx.rect(0, this.firstRowLine - 10, this.canvasWidth, 10);
        this.ctx.rect(0, this.secondRowLine - 10, this.canvasWidth, 10);
        this.ctx.fill();
        this.bindKeys();
    }

    bindKeys() {
        document.addEventListener("onClick", (e) => {
            console.log("Hi click handler")
            this.readClick(e.clientX, e.clientY);
        });
    }

    readClick(x, y) {
        if (x < this.firstColumnLine) {
            if (y < this.firstRowLine) {
                console.log("top left");
            }
            if (y > this.firstRowLine && y < this.secondRowLine) {
                console.log("middle left");
            }
            if (y > this.secondRowLine) {
                console.log("bottom left");
            }
        }
    }

}

