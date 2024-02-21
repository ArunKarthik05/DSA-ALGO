let array = [[1,4],[5,9],[2,5],[2,7],[10,11],[1,2],[3,4],[5,6],[4,5]];
let ans =[]
let no_of_values = [0,0];

array.sort((a,b)=> {
    if(a[0] === b[0]) return a[1] - b[1];
    return a[0]-b[0]
})
console.log(array)
ans.push( array[0])

for( let i = 1; i < array.length; i++){
    let index = ans[ans.length-1][1];
    console.log(`Tracking el: ${array[no_of_values[0]]} count: ${no_of_values[1]}`)
    console.log(`Ans:${ans}`)
    if( array[i][1] < index){
        no_of_values[1]++;
        no_of_values[0] = i;
    }
    if( no_of_values[1] >1){
        let pop= ans.pop();
        console.log(`Popped ${pop}`)
        ans.push(array[no_of_values[0]])
        console.log(`Inserted ${array[no_of_values[0]]}`)
    }
    if( array[i][0] >= index){
        index = array[i][1];
        ans.push( array[i])
        no_of_values[0] = i;
        no_of_values[1] = 1;
    }
}

console.log(ans)