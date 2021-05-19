let r=0;
export const Print = (boardSize, board) => {
    let abc =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let ans = new Array()
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++){
            if(board[i][j]===-1){
                ans.push(abc[j]+(i+1))
            }
        }
    }
    r++
    //console.log(r+ans)
    return(r+" "+ans)
}