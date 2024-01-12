function processInput(input) {
    function printResult(bossName, specialty) {
      console.log(`${bossName}, The ${specialty}`);
      console.log(`>> Strength: ${bossName.length}`);
      console.log(`>> Armor: ${specialty.length}`);
    }
  
    let n = parseInt(input[0]);
  
    for (let i = 1; i <= n; i++) {
      let inputLine = input[i];
      let pattern = /(\|)(?<bossName>[A-Z]+)\1\:(\#)(?<specialty>[A-Za-z]+\s[A-Za-z]+)\3/;
      let match = inputLine.match(pattern);
  
      if (match) {
        let bossName = match.groups.bossName;
        let specialty = match.groups.specialty;
        printResult(bossName, specialty);
      } else {
        console.log('Access denied!');
      }
    }
  }