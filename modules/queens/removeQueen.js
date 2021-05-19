export const RemoveQueens = (i, j, boardSize, board) => {
    for (let x = 0; x < boardSize; x++) {
        board[x][j] -= 1
        board[i][x] -= 1
        if (0 <= i + j - x && i + j - x < boardSize) {
            board[i + j - x][x]-=1
        }
        if (0 <= i - j + x && i - j + x  < boardSize) {
            board[i - j + x][x]-=1
        }
    }
    board[i][j]= 0
    return(board)
}