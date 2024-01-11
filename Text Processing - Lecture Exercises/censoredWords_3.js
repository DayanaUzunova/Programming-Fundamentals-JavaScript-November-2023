// function solve(text, str){
//     let censor = '*'.repeat(str.length);
//     let result = text;

//     while (result.includes(str)){
//     result = result.replace(str, censor);
//     }
//     console.log(result);

// }

//OR

(text, str) => text.split(str).join('*'.repeat(str.length))