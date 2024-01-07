//version 1
// function solve(nums){
//     let n = nums.length;

//     let reversed = [];

//     for(let i = n - 1; i >= 0; i--){
//         reversed.push(nums[i]);

//     }
//     console.log(reversed.join(' '));
// }

//version 2
function solve(arr){
    for (let i = 0; i < arr.length / 2; i++){
        let j = arr.length - 1 - i;

        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        
    }
    console.log(arr.join(' '));
}