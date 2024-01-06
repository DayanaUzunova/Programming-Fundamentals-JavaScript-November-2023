function solve(currentYield){
    let spice = 0;
    let days = 0;

    while(currentYield >= 100){
        days++;
        spice += currentYield - 26;
        
        currentYield -= 10;
    }
    if (spice >= 26){
        spice -= 26;
    }
    console.log(days);
    console.log(spice);
}