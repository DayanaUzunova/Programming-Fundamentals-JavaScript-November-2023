function solve(array1, array2){
    let mergedArr = [];

    for (let i = 0; i < array1.length; i++){
        let el1 = array1[i];
        let el2 = array2[i];

        if (i % 2 == 0){
            let sum = Number(el1) + Number(el2);
            mergedArr.push(sum);
        }
        else {
            let concatenation = el1 + el2;
            mergedArr.push(concatenation);
        }
    }
    console.log(mergedArr.join(' - '));
}