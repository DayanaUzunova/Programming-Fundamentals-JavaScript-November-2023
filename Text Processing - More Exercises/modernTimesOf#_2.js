function solve(text){
    let words = text.split(' ');
    let hashWords = words.filter(word => word.startsWith('#') && word.length > 1);
    
    for( let word of hashWords){
        word = word.slice(1);
        let isValid = true;
        
        for (char of word){
            if(!/[A-Za-z]/.test(char)){
                isValid = false;
                break;
            }
        }
        if (isValid){
            console.log(word);
        }
    }
}