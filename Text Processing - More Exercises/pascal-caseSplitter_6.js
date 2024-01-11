function solve(input) {

    input = input.split('');
    let words = []      //array to hold splitted elements
    let counter = -1;       //counter to hold current position in the array

    input.map(x => {
        if (x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90) {
            counter++
            words[counter] = x;
        } else if (x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122) {
            words[counter] += x
        }
    })

    console.log(words.join(", "))
}