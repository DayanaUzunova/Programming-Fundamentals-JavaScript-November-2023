function solve(array) {
  let password = array.shift();

  while (array[0] !== 'Complete') {
      let command = array.shift().split(' ');

      if (command[0] === 'Make') {
          let index = Number(command[2]);

          if (index >= 0 && index < password.length) {
              password = password.split('');

              if (command[1] === 'Upper') {
                  password[index] = password[index].toUpperCase();
              } else if (command[1] === 'Lower') {
                  password[index] = password[index].toLowerCase();
              }

              console.log(password.join(''));
              
              password = password.join('');
          }

      } 
      else if (command[0] === 'Insert') {
          let otherIndex = Number(command[1]);
          let char = command[2];

          if (otherIndex >= 0 && otherIndex <= password.length) {
              password = password.split('');
              password.splice(otherIndex, 0, char);
              console.log(password.join(''));
              password = password.join('');
          }

      } 
      else if (command[0] === 'Replace') {
          let char = command[1];
          let value = Number(command[2]);

          if (password.includes(char)) {
              let charCode = char.charCodeAt(0);
              let sum = charCode + value;
              let replacement = String.fromCharCode(sum);

              password = password.split(char).join(replacement);
              console.log(password);
          }

      } 
      else if (command[0] === 'Validation') {
          let isValid = true;

          if (password.length < 8) {
              console.log('Password must be at least 8 characters long!');
              isValid = false;
          }
          if (!/^[a-zA-Z0-9_]+$/.test(password)) {
              console.log('Password must consist only of letters, digits and _!');
              isValid = false;
          }
          if (!/[A-Z]/.test(password)) {
              console.log('Password must consist at least one uppercase letter!');
              isValid = false;
          }
          if (!/[a-z]/.test(password)) {
              console.log('Password must consist at least one lowercase letter!');
              isValid = false;
          }
          if (!/\d/.test(password)) {
              console.log('Password must consist at least one digit!');
              isValid = false;
          }
      }
  }
}
solve(['invalidpassword*',

'Add 2 p',

'Replace i -50',

'Replace * 10',

'Make Upper 2',

'Validation',

'Complete'])