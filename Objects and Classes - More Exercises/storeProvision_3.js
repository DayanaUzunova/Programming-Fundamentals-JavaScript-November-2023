function solve(stock, orderedProducts){
    let products = {

    };
    for (let i = 0; i < stock.length; i += 2){
        let productName = stock[i];
        let quantity = Number(stock[i + 1]);

        products[productName] = quantity; 
    }
    for (let j = 0; j < orderedProducts.length; j += 2){
        let productName = orderedProducts[j];
        let quantity = Number(orderedProducts[j + 1]);

        if (productName in products){
            products[productName] += quantity;
        }
        else {
            products[productName] = quantity;
        }
    }
    let entries = Object.entries(products);

    for(let entry of entries){
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}