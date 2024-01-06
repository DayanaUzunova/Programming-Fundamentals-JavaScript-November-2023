function roundingDigits(numbers){
    let num = numbers[0];
    let rounding = numbers[1];
 
    if (rounding > 15){
        rounding = 15;
    }else{
        rounding = rounding;
    }
    let roundingNumber = Number(num.toFixed(rounding));
    if( roundingNumber.length > num.length){
        console.log(num);
    }else{
        console.log(roundingNumber);
    }
 
 
}