function hash(arr){
    let n=arr.length;
    let hash=0;
    for(let i of arr){
        hash+=(i.charCodeAt(0)*(26**(n-1)));
        n--;
    }
    return hash;
}
let s="xyxabba";
let pt="ab"
let pthash=hash(pt);

for(let i=0;i<=s.length-pt.length;i++){
    if(hash( s.slice(i,i+pt.length)) === pthash ){
        console.log(`"${pt}" found at ${i}`);
    }
}
