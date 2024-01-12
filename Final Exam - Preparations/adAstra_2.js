function solve(input){
    let string = input.shift();
    let pattern = /([#|])(?<name>[A-Za-z\s]+)\1(?<expdate>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d+)\1/g;
    
    let totalCals = 0;
    let products = [];

    let matches = string.matchAll(pattern);

    for (let match of matches){
        let { name, expdate, kcal } = match.groups;
        kcal = Number(kcal);

        totalCals += kcal;

        products.push({ name, expdate, kcal });
    }
    let days = Math.floor(totalCals / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    products.forEach(product => console.log(`Item: ${product.name}, Best before: ${product.expdate}, Nutrition: ${product.kcal}`));
}