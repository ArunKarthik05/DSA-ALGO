const searchKMP = (text, pattern)=>{
    let main =0, search=0;
    while( main < text.length ){
        if( text[main] === pattern[search] ){
            main++;
            search++;
        }
        else if(search >0){
            search--;
        }else{
            main++;
        }
        if( search === pattern.length ){
            console.log(`Pattern found :${main-pattern.length}`)
        }
    }
}

const text = "aslkjnxdbabakiejkaba";
const pattern = "aba";
searchKMP(text, pattern);
