function solve(array){
    let names = array.shift().split(', ');
    let command = array.shift();

    let results = {};

    let letterPattern = /[A-Za-z]/g;
    let digitPattern = /\d/g;

    names.forEach(name => results[name] = 0);

    while(command != 'end of race'){
        let letterMatches = command.match(letterPattern);
        let name = letterMatches.join('');

        let digitMatches = command.match(digitPattern);
        let distance = digitMatches.map(Number).reduce((acc, val) => acc + val);

        if (name in results){
            results[name] += distance;
        }

        command = array.shift();
    }

    let sortedResults = Object.entries(results).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sortedResults[0][0]}`);
    console.log(`2nd place: ${sortedResults[1][0]}`);
    console.log(`3rd place: ${sortedResults[2][0]}`);
}