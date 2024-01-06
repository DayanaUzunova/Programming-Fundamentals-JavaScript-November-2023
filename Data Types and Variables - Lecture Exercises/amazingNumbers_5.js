function amazing(num){
    let numAsString = String(num);

    let sum = 0;

    for (let i = 0; i < numAsString.length; i++){
        sum += Number(numAsString[i]);
    }

    let sumAsString = String(sum);
    let isAmazing = 'False';

    for (let i = 0; i < sumAsString.length; i++){
        if(sumAsString[i] == '9'){
            isAmazing = 'True';
        }
    }
    console.log(`${num} Amazing? ${isAmazing}`);
}