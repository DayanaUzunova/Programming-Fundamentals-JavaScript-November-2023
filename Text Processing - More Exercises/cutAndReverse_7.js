function solve(string){
    let middleIndex = string.length / 2;

    let firstHalf = string.slice(0, middleIndex).split('').reverse().join('');
    let secondHald = string.slice(middleIndex).split('').reverse().join('');

    console.log(firstHalf);
    console.log(secondHald);
}
solve('DAYANA')