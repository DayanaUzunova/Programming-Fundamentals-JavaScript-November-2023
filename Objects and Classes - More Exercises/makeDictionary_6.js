function dictionary(input){
    let dict = {};
    for (let element of input){
        let obj = JSON.parse(element);
        dict = Object.assign(dict, obj);        
    } 
        
    let sortedKeys = Object.keys(dict);
    sortedKeys.sort((a, b) => a.localeCompare(b));   
     
    for (let term of sortedKeys) {
        let definition = dict[term];             
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}