function solve(array1, array2){
for (let el of array1){
    if (array2.includes(el)){
        console.log(el);  
    }
}
}