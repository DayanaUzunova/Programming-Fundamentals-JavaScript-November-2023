function solve(arrayStr){
    for(let i = 0; i < arrayStr.length; i++){
        arrayStr[i] = Number(arrayStr[i]);
    }
    let sum = 0;
    for(let num of arrayStr){
        if(num % 2 == 0){
            sum += num;
        }
    }
    console.log(sum);
}
