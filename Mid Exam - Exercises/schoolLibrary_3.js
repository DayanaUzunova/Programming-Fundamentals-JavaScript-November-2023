function manageLibrary(input) {
    let shelf = input.shift().split('&');
  
    for (let i = 0; i < input.length; i++) {
      if (input[i] === 'Done') {
        break;
      }
  
      let [command, param1, param2] = input[i].split(' | ');
  
      switch (command) {
        case 'Add Book':
          let bookToAdd = param1;

          if (!shelf.includes(bookToAdd)) {
            shelf.unshift(bookToAdd);
          }

          break;
  
        case 'Take Book':
          let bookToRemove = param1;
          let bookIndex = shelf.indexOf(bookToRemove);

          if (bookIndex !== -1) {
            shelf.splice(bookIndex, 1);
          }

          break;
  
        case 'Swap Books':
          let book1 = param1;
          let book2 = param2;
          let book1Index = shelf.indexOf(book1);
          let book2Index = shelf.indexOf(book2);

          if (book1Index !== -1 && book2Index !== -1) {
            [shelf[book1Index], shelf[book2Index]] = [shelf[book2Index], shelf[book1Index]];
          }

          break;
  
        case 'Insert Book':
          let bookToInsert = param1;

          if (!shelf.includes(bookToInsert)) {
            shelf.push(bookToInsert);
          }
          
          break;
  
        case 'Check Book':
          let indexCheck = Number(param1);

          if (indexCheck >= 0 && indexCheck < shelf.length) {
            console.log(shelf[indexCheck]);
          }

          break;
      }
    }
  
    console.log(shelf.join(', '));
  }