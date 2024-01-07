// function solve(numOne, numTwo, operator){
//     let result = 0;
//     switch(operator){
//         case 'add':
//             result = numOne + numTwo;
//             break;
//         case 'substract':
//             result = numOne - numTwo;
//             break;
//         case 'multiply':
//             result = numOne * numTwo;
//             break;
//         case 'divide':
//             result = numOne / numTwo;
//             break;
//     }
//     console.log(result);
// }

(a, b, operator) => ({
    'add': (a, b) => a + b,
    'subtract': (a, b) => a - b,
    'multiply': (a, b) => a * b,
    'divide': (a, b) => a / b,
    'power': (a, b) => a ** b
}[operator](a, b));