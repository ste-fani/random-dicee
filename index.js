
//Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDado = "dice" + randomNumber1 + ".png"; 

var randomImages = "images/" + randomDado;

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImages);


//Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImages2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImages2);


//Hipótese de jogadas
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎉PLAYER 1 GANHOU🎉"
    document.querySelector("h1").style.fontSize = "4.5rem"
} else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🎉PLAYER 2 GANHOU🎉"
    document.querySelector("h1").style.fontSize = "4.5rem"
} else {
    document.querySelector("h1").innerHTML = "🤡Ninguém ganhou🤡"
    document.querySelector("h1").style.fontSize = "4.5rem"
}