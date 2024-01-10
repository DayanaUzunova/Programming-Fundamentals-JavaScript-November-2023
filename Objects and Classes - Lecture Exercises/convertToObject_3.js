function solve(jsonStr){
    let person = JSON.parse(jsonStr);
    let keys = Object.keys(person);
for(let key of keys){
    console.log(key+':' + " " + person[key]);
    }
}
solve('{"name": "George", "age": 40, "town": "Sofia"}');