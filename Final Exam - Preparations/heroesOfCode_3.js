function solve(input) {
    let heroesHP = new Map();
    let heroesMP = new Map();
  
    let countHeroes = Number(input.shift());
  
    for (let hero = 1; hero <= countHeroes; hero++) {
      let heroInfo = input.shift();
      let heroData = heroInfo.split(/\s+/);
      let heroName = heroData[0];
      let hp = Math.min(Number(heroData[1]), 100);
      let mp = Math.min(Number(heroData[2]), 200);
  
      if (hp <= 100) {
        heroesHP.set(heroName, hp);
      }
  
      if (mp <= 200) {
        heroesMP.set(heroName, mp);
      }
    }
  
    let command = input.shift();
  
    while (command !== 'End') {
      if (command.includes('CastSpell')) {
        let [, heroName, mpNeeded, spellName] = command.split(/\s+-\s+/);
        mpNeeded = Number(mpNeeded);
  
        if (heroesMP.get(heroName) >= mpNeeded) {
          let mpLeft = heroesMP.get(heroName) - mpNeeded;
          heroesMP.set(heroName, mpLeft);
          console.log(`${heroName} has successfully cast ${spellName} and now has ${mpLeft} MP!`);
        } else {
          console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
        }
      } else if (command.includes('TakeDamage')) {
        let [, heroName, damage, attacker] = command.split(/\s+-\s+/);
        damage = Number(damage);
  
        let currentHP = heroesHP.get(heroName);
        currentHP -= damage;
  
        if (currentHP > 0) {
          console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${currentHP} HP left!`);
          heroesHP.set(heroName, currentHP);
        } else {
          console.log(`${heroName} has been killed by ${attacker}!`);
          heroesHP.delete(heroName);
          heroesMP.delete(heroName);
        }
      } else if (command.includes('Recharge')) {
        let [, heroName, amount] = command.split(/\s+-\s+/);
        amount = Math.min(Number(amount), 200 - heroesMP.get(heroName));
  
        let currentMP = heroesMP.get(heroName) + amount;
        currentMP = Math.min(currentMP, 200);
  
        console.log(`${heroName} recharged for ${amount} MP!`);
        heroesMP.set(heroName, currentMP);
      } else if (command.includes('Heal')) {
        let [, heroName, amount] = command.split(/\s+-\s+/);
        amount = Math.min(Number(amount), 100 - heroesHP.get(heroName));
  
        let currentHP = heroesHP.get(heroName) + amount;
        currentHP = Math.min(currentHP, 100);
  
        console.log(`${heroName} healed for ${amount} HP!`);
        heroesHP.set(heroName, currentHP);
      }
  
      command = input.shift();
    }
  
    for (const [heroName, hp] of heroesHP) {
      console.log(`${heroName}\n HP: ${hp}\n MP: ${heroesMP.get(heroName)}`);
    }
  }