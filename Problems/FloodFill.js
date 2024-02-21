// var floodFill = (row,col,image,ans,newColor,initialColor,dx,dy)=>{
//     ans[row][col] = newColor;
//     let r = ans.length
//     let c = ans[0].length
//     for( let i=0;i<4;i++ ){
//         let newRow = row+dx[i];
//         let newCol = col+dy[i];
//         if(newRow>=0 && newRow<r && newCol>=0 && newCol<c && ans[newRow][newCol]===initialColor){
//             floodFill(newRow,newCol,image,ans,newColor,initialColor,dx,dy)
//         }
//     }
// }
function dfs(row, col, image, ans, newColor, initialColor, dx, dy){
    const stack = [];
    const r = ans.length;
    const c = ans[0].length;
    
    stack.push([row, col]);

    while (stack.length) {
        const [cr, cc] = stack.pop();
        ans[cr][cc] = newColor;

        for (let i = 0; i < 4; i++) {
            const newRow = cr + dx[i];
            const newCol = cc + dy[i];
            if(newRow>=0 && newRow<r && newCol>=0 && newCol<c && ans[newRow][newCol]===initialColor){
                stack.push([newRow, newCol]);
            }
        }
    }
}
function solve(image,sr,sc,newColor){
    let ans = image
    // console.log(ans)
    let initialColor = ans[sr][sc]
    let dx = [-1,0,1,0]
    let dy = [0,1,0,-1]
    dfs(sr,sc,image,ans,newColor,initialColor,dx,dy)
    return ans;
}


let image = [[1,1,1],[1,1,0],[1,0,1]]

let sr = 1, sc = 1, newColor = 2;
console.log(`Changed color from ${image[sr][sc]} to ${newColor}`)
console.log(solve(image,sr,sc,newColor))