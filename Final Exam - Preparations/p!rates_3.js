function solve(array){
    let targets = {};
    let commands = array.shift();

    while (commands != 'Sail'){

        let [city, population, gold] = commands.split('||');
        population = Number(population);
        gold = Number(gold);

        if (city in targets){
            targets[city].population += population;
            targets[city].gold += gold;
        }
        else {
           targets[city] = { population, gold }; 
        }

        commands = array.shift();
    }
    commands = array.shift();

    while(commands != 'End'){
        let tokens = commands.split('=>');
        let action = tokens.shift();

        if (action == 'Plunder'){
            let [city, people, gold] = tokens;
            people = Number(people);
            gold = Number(gold);

            targets[city].population -= people;
            targets[city].gold -= gold;

            console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
        
            if(targets[city].population <= 0 || targets[city].gold <= 0){
                console.log(`${city} has been wiped off the map!`);
                delete targets[city];
            }
        }
        else if (action == 'Prosper'){
            let [city, gold] = tokens;
            gold = Number(gold);

            if(gold <= 0){
                console.log('Gold added cannot be a negative number!');
                commands = array.shift();
                continue;
            }
            targets[city].gold += gold;
            console.log(`${gold} gold added to the city treasury. ${city} now has ${targets[city].gold} gold.`);
        }

        commands = array.shift();
    }
    let entries = Object.entries(targets);
    if (entries.length == 0){
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
    else {
        console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);
        entries.forEach(([city, stats]) => console.log(`${city} -> Population: ${stats.population} citizens, Gold: ${stats.gold} kg`));
    }
}