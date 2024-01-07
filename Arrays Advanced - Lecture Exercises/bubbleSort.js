let arr2 = [3, 5, 1, 7, 0, 11];
let arr = [10, 9, 8, 7, 6];

let count = 0;

console.log(arr);
bubbleSort(arr);
console.log(arr);

function bubbleSort(arr){
    for (let j = 0; j < arr.length - 1; j++){
        for (let i = 0; i < arr.length - 1 - j; i++){
            if (compare(arr[i], arr[i + 1])){
                swap(arr, i, i + 1);
            }
        }
    }
}
function swap (arr, i, j){
    let t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

function compare(a, b){
    return a > b;
}