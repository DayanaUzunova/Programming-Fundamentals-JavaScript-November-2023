function solve(input) {
    let n = Number(input.shift());
    let regex = /@(?<name>[A-Za-z]*)[^@\-!\:>]*?:(?<population>\d*)[^@\-!\:>]*?!(?<type>[AD])![^@\-!\:>]*?->(?<soldiers>\d*)[^@\-!\:>]*?/g;
    let regex2 = /[star]/gi;
    let messages = [];
    let attackedPlanets = [];
    let destroyedPlanets = [];
   
    for(let i = 0; i < n; i++) {
      let message = input.shift();
      if(regex.test(message)) {
        messages.push(message);
      } else {
        let lettersCount = message.match(regex2) && message.match(regex2).length;
        message = [...message];
        let index = 0;
        for (const char of message) {
          let charCode = char.charCodeAt() - lettersCount;
          message[index++] = String.fromCharCode(charCode);
        }
        messages.push(message.join(""));
      }
    }
   
    let planet;
    regex.lastIndex = 0;
      while((planet = regex.exec(messages)) !== null) {
        if(planet.groups.type === "A") {
          attackedPlanets.push(planet.groups.name);
        } else {
          destroyedPlanets.push(planet.groups.name);
        }
      }
   
      attackedPlanets.sort((a,b) => a.localeCompare(b));
      destroyedPlanets.sort((a,b) => a.localeCompare(b));
   
      console.log(`Attacked planets: ${attackedPlanets.length}`);
      for (const planet of attackedPlanets) {
        console.log(`-> ${planet}`);
      }
   
      console.log(`Destroyed planets: ${destroyedPlanets.length}`);
      for (const planet of destroyedPlanets) {
        console.log(`-> ${planet}`);
      }
  }
  solve([
    "2",
    "@Cantonica:3000!D!->4000NM",
    "(''DGvywgex>6444444444%H%1B9444"
  ]);
  console.log(`-------------------------------`);
  /* solve([
    "3",
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    "GQhrr|A977777(H(TTTT",
    "EHfsytsnhf?8555&I&2C9555SR",
  ]); */