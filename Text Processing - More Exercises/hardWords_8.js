function solve(array){
    let letter = array.shift();
    let wordsArr = array.shift();

    let letterWords = letter.split(' ');
    let emptySlots = letterWords.filter(word => word.includes('_'));
    for (let slot of emptySlots){
        if (!slot.endsWith('_')){
            slot = slot.slice(0, slot.length - 1);
        }

        let wordToFill = wordsArr.find(word => word.length == slot.length);
        letter = letter.replace(slot, wordToFill);
    }
    console.log(letter);
}