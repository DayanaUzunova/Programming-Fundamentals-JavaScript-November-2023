function messagesManager(array){
  let capacity = Number(array.shift());
  let result = {};

  let command = array.shift();

  while(command !== "Statistics"){
      let tokens = command.split('=');
      let action = tokens.shift();
      let username = tokens.shift();


      if(action == "Add"){

          result[username] = {sent: 0, recieved: 0};

          if(username in result){
              let sentMsg = Number(tokens.shift());
              let recievedMsg = Number(tokens.shift());
              result[username].sent += sentMsg;
              result[username].recieved += recievedMsg;
          }
      }else if(action == "Message"){
          let reciever = tokens.shift();

          if(username in result && reciever in result){
              result[username].sent += 1;
              result[reciever].recieved +=1;  


          let usernameSum = Number(result[username].sent) + Number(result[username].recieved);
          let recieverSum = Number(result[reciever].sent) + Number(result[reciever].recieved);
              if(usernameSum >= capacity){
                  console.log(`${username} reached the capacity!`);
                  delete result[username];
              }
              if(recieverSum>= capacity){
                  console.log(`${reciever} reached the capacity!`);
                  delete result[reciever];
              }
          }  
      }
      else{
          if(username == "All"){
              let keys = Object.keys(result)

              for(let key of keys){
                  delete result[key];
              }

          }
          else{
              if(username in result){
              delete result[username];
              }
          }
      }
      command = array.shift();
  }

  let entries = Object.entries(result);
  console.log(`Users count: ${entries.length}`);

  for(let [username, info] of entries){

      let sum = Number(info.sent) + Number(info.recieved);
      console.log(`${username} - ${sum}`);

  }
}
messagesManager(["20",

"Add=Mark=3=9",

"Add=Berry=5=5",

"Add=Clark=4=0",

"Empty=Berry",

"Add=Blake=9=3",

"Add=Michael=3=9",

"Add=Amy=9=9",

"Message=Blake=Amy",

"Message=Michael=Amy",

"Statistics"]);