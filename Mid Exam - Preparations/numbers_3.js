function solve(string){
    let nums = string.split(' ').map(Number);
    let average = nums.reduce((acc, val) => acc + val) / nums.length;

    let topNums = nums.filter(num => num > average)
    .sort((a, b) => b - a).slice(0, 5);

    if(topNums.length == 0){
        console.log('No');
    }
    else{
        console.log(topNums.join(' '));
    }
}