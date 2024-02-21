/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let ans =[];
    let top=0,bottom =rows-1,left=0 , right = cols-1;
    while( top<=bottom && left<=right){
        console.log(`Top: ${top}, bottom: ${bottom}, right: ${right}, left: ${left}`)
        for( let i=left;i<=right;i++){
            ans.push( matrix[top][i] );
        }
        console.log("Left->Right")
        console.log(ans)
        top++;
        if( top<=bottom){
            for( let i=top;i<=bottom;i++){
                ans.push( matrix[i][right] );
            }
            console.log("Top->Bottom")
            console.log(ans)
            right--;
            for( let i=right;i>=left;i--){
                ans.push( matrix[bottom][i] );
            }
            console.log("Right->Left")
            console.log(ans)
            bottom--;
            if( bottom>top && left<=right){
            for( let i=bottom;i>=top;i--){
                ans.push( matrix[i][left] );
            }
            left++;
            console.log("Bottom->Top")
            console.log(ans)
            }
        }
    }
    //console.log(ans);
    return ans;
};

let matrix =[[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
console.log(spiralOrder(matrix))