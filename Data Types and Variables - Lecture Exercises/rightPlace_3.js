function place(word, symbol, match){
    //create new string from word and symbol, replacing '_'
    let result = '';

    for (let i = 0; i < word.length; i++){
        if (word[i] == '_'){
            result += symbol;
        }
        else {
            result += word[i];
        }
    }

    //compare results
    if (result == match){
        console.log('Matched');
    }
    else {
        console.log('Not Matched');
    }
    //print

}
place (
    'Str_ng', 'I', 'Strong'
)