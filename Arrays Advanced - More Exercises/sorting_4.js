function solve(array){
    let sortedNums = array.sort((a, b) => a - b);

    let finalArray = [];
    while(sortedNums.length > 0){
        let maxNum = sortedNums.pop();
        let minNum = sortedNums.shift();

        finalArray.push(maxNum);
        finalArray.push(minNum);
    }
    console.log(finalArray.join(' '));
}