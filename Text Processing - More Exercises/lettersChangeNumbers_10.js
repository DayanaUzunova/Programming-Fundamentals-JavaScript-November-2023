function solve(str) {
    let words = str.split(' ').filter(x => x.length > 1);;
    let final = 0;
    
    for(let item of words){
        let first = item[0];
        let last = item[item.length - 1];
        let num = item.substring(1, item.length - 1);
        let firstPos = 0;
        let lastPos = 0;
 
        
        if(first.charCodeAt(0) >= 97 && first.charCodeAt(0) <= 122){
            firstPos = first.charCodeAt(0) - 96;
            num = num * firstPos;
        }else{
            firstPos = first.charCodeAt(0) - 64;
            num = num / firstPos;
        }
        
        if(last.charCodeAt(0) >= 97 && last.charCodeAt(0) <= 122){
            lastPos = last.charCodeAt(0) - 96;
            num += lastPos;
        }else{
            lastPos = last.charCodeAt(0) - 64;
            num -= lastPos;
        }
        
        final += num;
    }
 
    console.log(final.toFixed(2));
}