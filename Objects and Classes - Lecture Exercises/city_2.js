function solve(city){
    let keys = Object.keys(city);

    for(let key of keys){
        console.log(key, '->', city[key]);
    }
}
solve({
    name: 'Sofia',
    area: 492,
    population: 1238438,
    country: 'Bulgaria',
    postcode: '1000'
});