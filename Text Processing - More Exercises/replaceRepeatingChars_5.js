function solve(string){
    let noRepeatStr = '';
    let prevChar = '';

    for (let char of string){
        if (char !== prevChar){
            noRepeatStr += char;
            prevChar = char;
        }
    }
    console.log(noRepeatStr);
}