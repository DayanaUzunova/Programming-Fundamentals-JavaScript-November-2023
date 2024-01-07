function solve(index){
    if (index < 1 || index > 7){
        console.log('Invalid day!');
    }
    else {
    let days = ['Monday', 'Tuesday', 'Wednesday',
'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(days[index - 1]);
    }
}
solve(3);
solve(2);
solve(-33);
solve(-0);
solve(4);