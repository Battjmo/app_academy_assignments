document.addEventListener("DOMContentLoaded", () => {
    const gameCanvas = document.getElementById("gameCanvas");
    const ctx = gameCanvas.getContext("2d");
    const game = new Game(ctx);
    gameCanvas.width = game.canvasWidth;
    gameCanvas.height = game.canvasHeight;
    game.bindKeys();
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
        this.readClick = this.readClick.bind(this);
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
   
    }

    readClick(e) {
        const rect = e.target.getBoundingClientRect();
        const scaleX = e.target.offsetWidth / rect.width;
        const scaleY = e.target.offsetHeight / rect.height;
        const x = (e.clientX - rect.left) * scaleX;
        const y = (e.clientY - rect.top) * scaleY;

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
        else if (x > this.firstColumnLine && x < this.secondColumnLine) {
            if (y < this.firstRowLine) {
                console.log("top middle");
            }
            if (y > this.firstRowLine && y < this.secondRowLine) {
                console.log("dead center");
            }
            if (y > this.secondRowLine) {
                console.log("bottom middle");
            }
        }
        else if (x > this.secondColumnLine) {
            if (y < this.firstRowLine) {
                console.log("top right");
            }
            if (y > this.firstRowLine && y < this.secondRowLine) {
                console.log("middle right");
            }
            if (y > this.secondRowLine) {
                console.log("bottom right");
            }
        }
    }


    bindKeys() {
        document.getElementById("gameCanvas").addEventListener("click", this.readClick.bind(this), false);
    }
}





