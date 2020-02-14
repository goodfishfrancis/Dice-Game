function getRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    return randomNumber;
}


// function is called when "roll dice" button is clicked
function rollDice() {

    // get random numbers (1-6) for choosing dice image
    randomNumber1 = getRandomNumber();
    randomNumber2 = getRandomNumber();

    // change image of dice to random number 
    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");


    // decide and display winner
    if (randomNumber1 === randomNumber2){
        document.getElementsByTagName("h1")[0].innerHTML = "Draw!";
    }

    else if (randomNumber1 > randomNumber2){
        document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Wins!";
    }

    else if (randomNumber1 < randomNumber2){
        document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins!";
    }
}

