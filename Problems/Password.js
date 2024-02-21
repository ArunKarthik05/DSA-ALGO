let matrix = []
let val =1;
for( let i=0;i<3;i++){
    let array = [];
    for( let j=0;j<3;j++){
        array.push(val);
        val++;
    }
    matrix.push(array);
}

function checkAdjacent( v1,v2 ){
    if( 
        ( Math.abs(v1-v2)===1 && 
        !( (v1%3===0 || v2%3===0) && (v1%3==1 || v2%3===1) )
        ) 
        || Math.abs(v1-v2)===3
    )
        return true;
    return false;
}
function checkPassword(password){
    if(password.length === 1)   return 1;
    let ans =1,i=1,prev=10;
    while( i<password.length ){
        console.log("current i:"+i)
        console.log("current el:"+password[i])
        console.log("----------------------")
        if( password[1] === password[0]){
            ans--;
        }
        if( password[i] === password[i+1]){
            prev = password[i];
            ans += 1;
            console.log(`${password[i]} is equal to ${password[i+1]}`)
            console.log("ans:"+ans)
            console.log("i:" +i);
            while(password[i]===password[i+1]){
                i++;
            }
            i++;
            console.log("i value after i++:"+i)
        }
        else if( checkAdjacent(password[i], password[i-1]) ){
            ans += 1;
            console.log(`${password[i]} is adjacent to ${password[i-1]}`)
            console.log("ans:"+ans)
            i++;
        }else{
            i++;
            ans += 2;
            console.log("Cond 3 ans:"+ans)
        }
    }


    return ans;
}
let password=[1,2,3,1,4,4]
console.log(checkPassword(password))
//console.log(matrix)