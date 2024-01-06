function solve(number1, number2, number3){
    let sum = number1 + number2 + number3;
    let sumAsString = String(sum);

    let isFloat = false;

    for (let i = 0; i <= sumAsString.length; i++){
        if(sumAsString[i] == '.'){
            isFloat = true;
        }

    }
    console.log(`${sum} - ${isFloat ? 'Float' : 'Integer'}`);
}