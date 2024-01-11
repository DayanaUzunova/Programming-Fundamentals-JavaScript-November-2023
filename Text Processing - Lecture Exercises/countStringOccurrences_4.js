// function solve(input, str){
//     let words = input.split(' ');

//     let count = 0;
//     for(let word of words){
//         if(word == str){
//             count++
//         }
//     }
//     console.log(count);
// }

function solve(input, str){
    let words = input.split(' ');

    let matches = words.filter(word => word == str);
    console.log(matches.length);
}