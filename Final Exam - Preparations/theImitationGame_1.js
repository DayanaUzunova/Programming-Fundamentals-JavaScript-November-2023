function solve(array){
    let encryptedMessage = array.shift();

    let command = array.shift();
    while(command != 'Decode'){
        let tokens = command.split('|');
        let action = tokens[0];

        if (action == 'Move'){
            let lettersCount = Number(tokens[1]);
            let firstLetters = encryptedMessage.slice(0, lettersCount);

            encryptedMessage = encryptedMessage.replace(firstLetters, '');
            encryptedMessage += firstLetters;
        }
        else if (action == 'Insert'){
            let index = Number(tokens[1]);
            let value = tokens[2];

            encryptedMessage = encryptedMessage.slice(0, index) + value + encryptedMessage.slice(index);
        }
        else if (action == 'ChangeAll'){
            let substring = tokens[1];
            let replacement = tokens[2];

            while (encryptedMessage.includes(substring)){
            encryptedMessage = encryptedMessage.replace(substring, replacement);
        }
    }
        command = array.shift();
    }
    console.log(`The decrypted message is: ${encryptedMessage}`);
}