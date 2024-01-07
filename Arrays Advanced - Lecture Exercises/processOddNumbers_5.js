// function solve(array){
//     let oddIndex = array.filter((x, i) => i % 2 != 0);
//     let doubled = oddIndex.map(x => x * 2);
//     let reversed = doubled.reverse();

//     let result = reversed.join(' ');
//     console.log(result);
// }

function solve(arr){
    console.log(
        arr.filter((x, i) => i % 2 != 0)
        .map(x => x * 2)
        .reverse()
        .join(' ')
    );
}