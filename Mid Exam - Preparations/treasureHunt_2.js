function solve(array){
    let loot = array.shift().split('|');
    let commands = array.shift();

    while(commands != 'Yohoho!'){
        let tokens = commands.split(' ');
        let action = tokens.shift();

        if (action == 'Loot'){
                tokens.filter(item => !loot.includes(item)).forEach(item => loot.unshift(item));
        }
        else if(action == 'Drop'){
                let index = Number(tokens.shift());
                if(index >= 0 && index < loot.length){
                    let removedItem = loot.splice(index, 1).shift();
                    loot.push(removedItem);
                }
        }
        else if(action == 'Steal'){
                let count = Number(tokens.shift());
                let stolenItems = loot.splice(-count);
                console.log(stolenItems.join(', '));
        }
        commands = array.shift();
    }
        if (loot.length == 0){
        console.log('Failed treasure hunt.');
        }
            else{
            let totalGain = 0;
            for (let item of loot){
            totalGain += item.length;
    }
        let averageGain = totalGain / loot.length;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    }  
    
}
