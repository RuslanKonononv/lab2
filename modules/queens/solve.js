import {SetQueens} from "./setQueen.js";
import {Print} from "./Print.js";
import {RemoveQueens} from "./removeQueen.js";


export const Solve = (i, boardSize, board,queensQuantity, answers) => {
    for (let j = 0; j < boardSize; j++) {
        if(board[i][j]===0){
            board = SetQueens(i,j,boardSize,board)
            if(i===queensQuantity-1) {
                answers.push(Print(boardSize, board))
            }
            else
                Solve(i+1,boardSize,board,queensQuantity,answers)
            board = RemoveQueens(i,j,boardSize,board)
        }
    }
    return answers || "None";
}