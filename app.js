const max=prompt("Enter max number");
console.log("Welcome to this game");
const random=Math.floor(Math.random()*max)+1;
console.log(random);

let guess=prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("User quit");
        break;
    }

    if(guess == random){
        console.log("You are right! congrats!! random number was",random);
        break;
    }
    else if(guess<random){
        guess= prompt("Hint:Your guess was to small. Please try again");
    }else{
        guess= prompt("Hint:Your guess was to large. Please try again");
    }

}