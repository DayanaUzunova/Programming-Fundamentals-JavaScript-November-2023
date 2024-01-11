function solve(array){
    let [str1, str2, replacementStr] = array;

    let concatedStr = str1 + str2;
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let index = 0;

    for (let char of concatedStr){
        if(vowels.includes(char)){
            concatedStr = concatedStr.replace(char, replacementStr[index].toUpperCase());
            index++;

            if(index == replacementStr.length){
                index = 0;
            }
        }
    }
    let passwordResult = concatedStr.split('').reverse().join('');
    console.log(`Your generated password is ${passwordResult}`);
}