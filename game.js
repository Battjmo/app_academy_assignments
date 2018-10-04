

class Game {
    constructor(ctx) {
    //Canvas
    this.canvasWidth = 700;
    this.canvasHeight = 500;
    this.ctx = ctx;
    this.board = new Board();
    }

    drawBoard(board) {
        this.ctx.beginPath();
        this.ctx.rect(this.canvasWidth / 3 - 10, 0, this.canvasWidth / 3, this.canvasHeight);
        this.ctx.rect(this.canvasWidth * 0.66 - 10, 0, this.canvasWidth * 0.66, this.canvasHeight);
        this.ctx.rect(0, this.canvasHeight / 3 - 10, this.canvasWidth, this.canvasHeight / 3);
        this.ctx.rect(0, this.canvasHeight * 0.66 - 10, this.canvasWidth, this.canvasHeight * 0.66);
        // for(let i = 0; i < this.board.length; i++) {
        //     for (let j = 0; j < this.board[i].length; j++) {
        //         if (this.board[i][j] === 'X') {
        //         this.drawX()
        //         }
        //     }
        // }
    }


}