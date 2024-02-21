var dfs = function(row, col, grid, vis){
    vis[row][col] = 1;
    let queue = [];
    queue.push([row,col]);
    let i=0,c=grid[row][col];
    let dx = [-1,1,0,0]
    let dy = [ 0,0,-1,1]
    while(queue.length>0) {
        //console.log(queue)
        let currentRow = queue[queue.length-1][0];
        let currentCol = queue[queue.length-1][1];
        queue.pop();
        for( let i=0;i<4;i++){
            let newRow = currentRow+dx[i];
                let newCol = currentCol+dy[i];
                if(newRow>=0 && newRow<grid.length && newCol>=0 && newCol<grid[0].length && grid[newRow][newCol]==="1" &&!vis[newRow][newCol]){
                    queue.push([newRow,newCol]);
                    vis[newRow][newCol] = vis[row][col];
                }
        }
    }
    //console.log(c)
}

var create2dArray = function(rows,cols){
    var array = new Array(rows);
    for( let i=0;i<rows;i++){
       array[i] = new Array(cols).fill(0);
    }
    return array;
}
var numIslands = function(grid) {
    let r = grid.length;
    let c = grid[0].length;
    let cnt = 0;
    let vis = create2dArray(r,c);
    // console.log(vis); 
    for( let i=0;i<r;i++ ){
        for( let j=0;j<c;j++ ){
            if( vis[i][j]===0 && grid[i][j] === "1"){
                //console.log("in")
                dfs(i,j,grid,vis);
                cnt++;
            }
        }
    }
    //console.log(vis)
    return cnt;
};

let grid =  
    [
        ["1","0","1","0","1"],
      ]
console.log(`No of Ailesa islands:${numIslands(grid)}`)