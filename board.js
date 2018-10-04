class Space {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        
    }
}

class Board {
    constructor() {
        this.board = [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
    }

    boardGridGenerator() {
        let board = [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
    }

    updateBoard(board, mark, pos) {
        let row = pos[0];
        let column = pos[1];
        board[row][column] = mark;
    }
}