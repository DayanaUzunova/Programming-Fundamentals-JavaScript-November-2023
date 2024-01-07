function solve(array){
    let wagons = array[0].split(' ').map(Number);
    let capacity = Number(array[1]);

    for(let i = 2; i < array.length; i++){
        let command = array[i];
        let tokens = command.split(' ');

        if (tokens[0] == 'Add'){
            let passengers = Number(tokens[1]);
            wagons.push(passengers);
        }
        else {
            let passengers = Number(tokens[0]);
            
            for (let index = 0; index < wagons.length; index++){
                if (wagons[index] + passengers <= capacity){
                    wagons[index] += passengers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));

}