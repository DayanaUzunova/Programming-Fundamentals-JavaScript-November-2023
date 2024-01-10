function solve(array){
    for (let town of array){
        let [townName, latitude, longitude] = town.split(' | ');
        
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let townObject = {
            town: townName,
            latitude: latitude,
            longitude: longitude
        }
        console.log(townObject);
    }
}