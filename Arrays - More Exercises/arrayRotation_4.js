function solve(array, rotations){
for (let rotation = 1; rotation <= rotations; rotation++){
    let firstEl = array.shift();
    array.push(firstEl);
}
console.log(array.join(' '));
}