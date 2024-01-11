function solve(string, text){
     text = text.toLowerCase().split(' ');

     if(text.includes(string)){
        console.log(string);
     }
     else {
        console.log(`${string} not found!`);
     }

}