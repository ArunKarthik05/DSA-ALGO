const recursion = (i,j,searchIndex,rows,cols,ans,move,vis,maze,word,dx,dy,maxSteps)=>{
    if(searchIndex === word.length) return true;
    if( i===rows-1 && j===cols-1){
        ans[0]= move;
        return false;
    }
    let dir = "DLRU"
    for( let k=0; i<4; k++ ){
        for( let step=1;step<=maxSteps;step++){
        let nexti = i+ step *dx[k];
        let nextj = j+step *dy[k];
            if( nexti>=0 && nextj>=0 && nexti<rows && nextj<cols && !vis[nexti][nextj] && maze[nexti][nextj]===word[searchIndex]){
                searchIndex++;
                console.log(`Next i: ${nexti}, j:${nextj}`)
                vis[nexti][nextj] = 1;
                if(recursion( nexti, nextj, rows, cols, ans, move+dir[k], vis, maze, word, dx, dy ))
                    return true;
                else
                    break;
                vis[nexti][nextj] = 0;
                }
        }
    }
    return false;
}
const solve = (maze,word,maxSteps)=>{
    let rows = maze.length;
    let cols = maze[0].length;
    // console.log(maze)
    // console.log(rows,cols);
    let ans =[""]
    let vis =  [];
    for( let i=0; i<rows; i++){
        let temp =[]
        for( let j=0; j<cols; j++){
            temp.push(0);
        }
        vis.push(temp);
    }
    // console.log(vis)
    let dx = [1, 0, 0, 0];
    let dy = [0, 1, -1, 0];
    if( maze[0][0] && recursion( 0,0,0,rows,cols,ans,"",vis,maze,word,dx,dy,maxSteps)){
        return ans[0]
    }else{
        return "No solution found"
    }
}
let maze = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"],
];
let word = "ABCCE"
let maxSteps = 1;
console.log(`ans:${solve( maze ,word,maxSteps)}`)    