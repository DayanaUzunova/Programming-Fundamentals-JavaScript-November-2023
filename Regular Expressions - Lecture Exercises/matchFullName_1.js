function solve(input){
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g

    let result = input.match(pattern);
    console.log(result.join(' '));
}