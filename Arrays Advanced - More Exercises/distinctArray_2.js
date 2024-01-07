function solve(array){
    let uniqueNums = [];

    for(let num of array){
        if(!uniqueNums.includes(num)){
            uniqueNums.push(num);
        }
    }
    console.log(uniqueNums.join(' '));
}