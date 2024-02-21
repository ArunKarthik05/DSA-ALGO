function divide(a,b){
    return function(b){
        if(b===0) 
            throw new Error("Zero division not allowed")
        else
            return a/b;
    }
}

let a = divide(10);
console.log(a(0));