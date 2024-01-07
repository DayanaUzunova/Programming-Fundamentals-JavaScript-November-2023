// function addAndSubtract(a, b, c){

//     let result1 = sum(a, b);
//     let result2 = subtract(result1, c);
//     console.log(result2);

//     function sum(a, b){
//         return a + b;
//     }
//     function subtract(a, b){
//         return a - b;
//     }
// }


function addAndSubtract(num1, num2, num3){
    let sum = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    let result1 = sum(num1, num2);
    let result2 = subtract(result1, num3);

    console.log(result2);
}