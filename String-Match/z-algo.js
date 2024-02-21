let string = "abcdefabc"
let pattern = "abc"
let ans = []

for (let i = 0; i <= string.length-pattern.length; i++) {
    if( string.slice(i,i+pattern.length) === pattern ) 
        ans.push(i);
}

console.log(ans);