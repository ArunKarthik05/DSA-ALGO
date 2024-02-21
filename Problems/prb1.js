function findMissing(arr){
    arr = arr.sort((a,b)=>a-b);
    console.log(arr)
    let i=0,j=1;
    while(i<arr.length-2){
        console.log("Current i el:"+arr[i] );
        console.log("Current j el:"+arr[j] );
        if( arr[j]-arr[i] !==1){
            // break;
            return arr[i]+1;
        }
        i++;
        j++;
    }
}

let arr = [12,8,7,6,5,1];
console.log("The missing element is :"+findMissing(arr));