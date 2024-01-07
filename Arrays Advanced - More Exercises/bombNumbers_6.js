function solve(nums, bombInfo){
    let [bombNum, power] = bombInfo;

    while(nums.includes(bombNum)){
        let index = nums.indexOf(bombNum);
        nums.splice(Math.max(0, index - power), power * 2 + 1, 0)
    }
    let sum = 0;
    
    for(let num of nums){
        sum += num;

    }
    console.log(sum);
}