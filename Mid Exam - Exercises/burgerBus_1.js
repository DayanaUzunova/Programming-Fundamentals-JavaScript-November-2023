function solve(command) {
    let numberOfCity = Number(command[0]);
    let totalPrice = 0;
  
    for (let i = 1; i <= numberOfCity; i++) {
      let cityName = command[i * 3 - 2];

      let price = parseFloat(command[i * 3 - 1]);
      let expenses = parseFloat(command[i * 3]);
      let profit = price - expenses;
  
      if (i % 3 === 0 && i % 5 !== 0) {
        
        profit -= expenses * 0.5;
      }
  
      if (i % 5 === 0) {
        profit -= price * 0.1;
      }
  
      totalPrice += profit;
  
      console.log(`In ${cityName} Burger Bus earned ${profit.toFixed(2)} leva.`);
    }
  
    console.log(`Burger Bus total profit: ${totalPrice.toFixed(2)} leva.`);
  }