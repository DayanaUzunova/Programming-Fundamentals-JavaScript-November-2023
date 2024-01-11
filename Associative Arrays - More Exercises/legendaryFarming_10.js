function legendaryFarming(input) {
    let items = input.split(' ');
    let keyMaterials = {
        fragments: 0,
        shards: 0,
        motes: 0
    }
    let junk = {}
    let item;
    let winner = ''
 
    for (let i = 0; i < items.length; i += 2) {
 
        let quantity = Number(items[i]);
        item = items[i + 1].toLowerCase();
 
        if (item === 'motes' || item === 'shards' || item === 'fragments') {
 
            let oldQuantity = keyMaterials[item];
            oldQuantity += quantity;
            keyMaterials[item] = oldQuantity;
 
            if (keyMaterials[item] >= 250) {
 
                if (item === 'motes') {
                    winner = 'Dragonwrath'
                } else if (item === 'shards') {
                    winner = 'Shadowmourne'
                } else if (item === 'fragments') {
                    winner = 'Valanyr'
                }
 
                keyMaterials[item] -= 250;
                console.log(`${winner} obtained!`);
                break;
            }
 
        } else {
            if (!junk[item]) {
                junk[item] = quantity;
 
            } else {
                let oldQuantity = junk[item];
                oldQuantity += quantity;
                junk[item] = oldQuantity
            }
 
        }
    }
 
    let sortedKeyMater = Object.entries(keyMaterials).sort((a, b) => {
        return b[1] - a[1] || a[0].localeCompare(b[0]);
    });
    sortedKeyMater.forEach(el => console.log(`${el[0]}: ${el[1]}`));
 
 
    let sortedJunks = Object.entries(junk).sort((a, b) => {
        return a[0].localeCompare(b[0])
    });
    sortedJunks.forEach(el => console.log(`${el[0]}: ${el[1]}`));
}