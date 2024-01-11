function solve(string, temp){
    let words = string.split(', ');

    for (let word of words){
        let len = word.length;
        let starTemp = '*'.repeat(len);
        temp = temp.replace(starTemp, word);
    }
    console.log(temp);
}