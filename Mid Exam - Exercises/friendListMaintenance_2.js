function manageFriends(input) {
    let friends = input.shift().split(', ');
    let blacklistedCount = 0;
    let lostCount = 0;
  
    for (let command of input) {
      if (command === 'Report') {

        console.log(`Blacklisted names: ${blacklistedCount}`);

        console.log(`Lost names: ${lostCount}`);

        console.log(friends.join(' '));
        break;
      }
  
      let [action, param1, param2] = command.split(' ');
  
      if (action === 'Blacklist') {
        let index = friends.indexOf(param1);
        if (index !== -1) {
          friends[index] = 'Blacklisted';
          console.log(`${param1} was blacklisted.`);
          blacklistedCount++;
        } else {
          console.log(`${param1} was not found.`);
        }
      } 
      else if (action === 'Error') {
        let index = parseInt(param1);
        if (index >= 0 && index < friends.length) {
          if (friends[index] !== 'Blacklisted' && friends[index] !== 'Lost') {

            console.log(`${friends[index]} was lost due to an error.`);
            
            friends[index] = 'Lost';
            lostCount++;
          }
        }
      } else if (action === 'Change') {
        let index = parseInt(param1);
        if (index >= 0 && index < friends.length) {

          console.log(`${friends[index]} changed his username to ${param2}.`);
          
          friends[index] = param2;
        }
      }
    }
  }