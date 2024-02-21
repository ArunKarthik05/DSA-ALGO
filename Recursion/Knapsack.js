let val=[120,100,60];
let wt=[1,2,1];
let n=val.length;
let w=3;
let ks=(w,wt,val,n)=>{
    if(n===0 || w===0){
        return 0;
    }
    if(wt[n-1]>w){
        return ks(w,wt,val,n-1);
    }
    else{
        return Math.max((ks(w-wt[n-1],wt,val,n-1)+val[n-1]),ks(w,wt,val,n-1));
    }
}
console.log(ks(w,wt,val,n));