function solve (n){
    let sum = 0;
    let num = 1;

    while (n > 0){
        console.log(num);
        sum += num;
        num += 2;
        n--;
    }
    console.log(`Sum: ${sum} `);
}