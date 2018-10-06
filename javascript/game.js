var message = "Guess The Letter From a (lower) to z (higher)";
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var triesLeft = 9;
var lettersGuessed = [];
var computerGuess = []

var wins = 0;
var losses = 0;

document.onkeyup = function(event) {

    // Determines which key was pressed.
    var playerGuess = event.key;
    playerGuess = playerGuess.toLowerCase();
    lettersGuessed.push(playerGuess);

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(compGuess);
    console.log(computerGuess[0]);
    //Condition for player win or loss
    if ((playerGuess === computerGuess[0]) && (triesLeft > 0)){
        wins ++;
        triesLeft--;   
    }else if(triesLeft == 0){
        document.querySelector("h1").innerHTML = "Game over";
        // Clear the Div 
        document.querySelector("div").innerHTML = " ";
        //document.getElementById("div").reset();
        //document.querySelector("#computerChoice").innerHTML = " ";
        //document.querySelector("#wins").innerHTML = " ";
        //document.querySelector("#losses").innerHTML = " ";
        //document.querySelector("#choiceLeft").innerHTML = " ";
        //document.querySelector("#yourGuessessofar").innerHTML = " ";
       return;
    }else{
        losses ++;
        triesLeft--;
        console.log("choiceleft" + triesLeft);
    }
    document.querySelector("#computerChoice").innerHTML = "The computer chose: " + computerGuess[0];
    document.querySelector("#wins").innerHTML = "wins: " + wins;
    document.querySelector("#losses").innerHTML = "lossess: " + losses;
    document.querySelector("#choiceLeft").innerHTML = "Guessesleft: " + triesLeft;
    document.querySelector("#yourGuessessofar").innerHTML = "Your Guesses so far: " + lettersGuessed;
    //empty computer Guess array
    computerGuess = [];
   
    }