function print(start, end){
    let nums = '';
    let sum = 0;

    for(let num = start; num <= end; num++){
        nums += num + ' ';
        sum += num;

    }
    console.log(nums);
    console.log(`Sum: ${sum}`);
}