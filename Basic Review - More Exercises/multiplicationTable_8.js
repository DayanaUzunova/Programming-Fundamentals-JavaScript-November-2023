function printTenTimesTable(number) {
    // Check if the number is within the specified interval
    if (number < 1 || number > 100) {
      console.log("The number is not within the interval [1…100].");
      return;
    }
  
    // Print the 10 times table for the given number
    for (let times = 1; times <= 10; times++) {
      const product = number * times;
      console.log(`${number} X ${times} = ${product}`);
    }
  }