var n = 4;
const board = Array(n).fill(0).map(() => Array(n).fill("."));
const res = [];
const cused = Array(n).fill(false);
const d135 = Array(n * 2 - 1).fill(false);
const d45 = Array(n * 2 - 1).fill(false);
const put = (i, j) => {
    const ind135 = i + n - j - 1;
    const ind45 = i + j;
    if (cused[j] || d135[ind135] || d45[ind45]) {
        return;
    }
    board[i][j] = "Q";
    cused[j] = true;
    d135[ind135] = true;
    d45[ind45] = true;
    
    if (i === n - 1) {
        res.push(board.map(row => [row.join("")]));
        return;
    } 
    else {
        for (let k = 0; k < n; k++) {
            put(i + 1, k);
        }
    }
    board[i][j] = ".";
    cused[j] = false;
    d135[ind135] = false;
    d45[ind45] = false;
}
    for (let k = 0; k < n; k++) {
        put(0,k);
    }
for(i of res){
    for(j of i){
        console.log(j);
    }
}
