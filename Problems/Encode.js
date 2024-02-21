const printStr = (ans) =>{
    let str = "";
    for( let i=0;i<ans.length;i++ ){
        for( let j=0;j<ans[i].length;j++){
            if( ans[i][j] == " ")
                str += "*"
            else
                str += ans[i][j];
        }
    }
    return str;
}
const EncodeString = (str,rows)=>{
    let ans = [];
    
    for( let i = 0; i < rows; i++ ){
        let temp = [];
        for( let j = 0; j < i; j++ ){
            temp.push(" ");
        }
        ans.push(temp);
    }

    let i = 0;
    while( i< str.length ){
        let curr_row = i%rows;
        ans[curr_row].push(str[i]);
        i++;
    }
    return printStr(ans);
}


let string = "my name is"
let rows =  3;

console.log(`OUTPUT:${EncodeString(string, rows)}`);


// CNREOI*OGTCLE**DM*HOS***IATNG
//OUTPUT:mnes*ya****mi