const recursion = (i, j, rows, cols, ans, move, vis, maze, dx, dy, maxJumps) => {
    console.log("called i: " + i + ", called j: " + j)
    if (i === rows - 1 && j === cols - 1) {
        ans[0] = move;
        return true;
    }
    let dir = "DRUL";
    for (let k = 0; k < 4; k++) {
        for (let step = maxJumps; step >= 0; step--) {
            console.log('Cur steps: ' + step)
            console.log('before:'+i,j) // Loop through the number of steps
            let nexti = i + (step * dx[k]);
            let nextj = j + (step * dy[k]);
            console.log(i,"+",step,"*",dx[k]+"="+nexti);
            console.log(j,"+",step,"*",dy[k]+"="+nextj);
            console.log(`After:${nexti},${nextj}`)
            if (nexti >= 0 && nextj >= 0 && nexti < rows && nextj < cols && !vis[nexti][nextj] && maze[nexti][nextj]) {
                console.log("Inside")
                console.log(nexti,nextj)
                vis[nexti][nextj] = 1;
                if (recursion(nexti, nextj, rows, cols, ans, move + dir[k], vis, maze, dx, dy, maxJumps))
                    return true;
                vis[nexti][nextj] = 0;
            }
        }
    }
    return false;
};

const solve = (maze, maxJumps) => {
    let rows = maze.length;
    let cols = maze[0].length;
    let ans = [""];
    let vis = [];
    for (let i = 0; i < rows; i++) {
        let temp = [];
        for (let j = 0; j < cols; j++) {
            temp.push(0);
        }
        vis.push(temp);
    }
    let dx = [1, 0,-1,0];
    let dy = [0, 1,0,-1];
    //let dir = "DRUL";
    if (maze[0][0] && recursion(0, 0, rows, cols, ans, "", vis, maze, dx, dy, maxJumps)) {
        return ans[0];
    } else {
        return "No solution found";
    }
};

let maze = [
    [1, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [0, 1, 1, 1]
];
const maxJumps = 4;
console.log(`ans:${solve(maze, maxJumps)}`);
