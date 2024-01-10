function solve(input) {
    let map = new Map();
    for (let string of input) {
        let tokens = string.split(' ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);
        if (!map.has(product)) {
            map.set(product, quantity);
        } else {
            let currQuantity = map.get(product);
            let newQuantity = currQuantity += quantity;
            map.set(product, newQuantity);
        }
    }

    // => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
    // A Map object iterates its elements in insertion order — 
    // a for...of loop returns an array of [key, value] for each iteration.
    // Map.entries() Returns a new Iterator object that contains an array of [key, value] 
    // for each element in the Map object in insertion order.
    for (let [key, quantity] of [...map.entries()]) {
        console.log(`${key} -> ${quantity}`);
    }
}