function solve(array){
    let items = [];
    let totalPrice = 0;

    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<quantity>\d+)/;

    let command = array.shift();
    while (command != 'Purchase'){
        let match = command.match(pattern);

        if(match){
            let { name, price, quantity } = match.groups;
            let furniturePrice = Number(quantity) * Number(price);
            items.push(name);
            totalPrice += furniturePrice;
        }

        command = array.shift();
    }
    console.log(`Bought furniture: `);
    if (items.length){ console.log(items.join('\n'));}
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
solve(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
)