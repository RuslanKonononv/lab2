import {Solve} from "./solve.js";

export const Queens = (boardSize, queensQuantity) => {
    let board = new Array()
    for (let i = 0; i < boardSize; i++) {
        board[i] = new Array();
        for (let j = 0; j < boardSize; j++) {
            board[i][j] = 0
        }
    }
    let answers = new Array()
    return Solve(0,boardSize,board,queensQuantity,answers)

}