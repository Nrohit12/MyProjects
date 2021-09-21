//First Random Image 
var num1 = Math.floor(Math.random() * 6) + 1;

var image1 = "images/dice" + num1 + ".png";//images/dice1.png - images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src", image1);

//Second Random Image 
var num2 = Math.floor(Math.random() * 6) + 1;

var image2 = "images/dice" + num2 + ".png";//images/dice1.png - images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src", image2);


//for player 1 wins
if (num1 > num2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
//for player 2 wins
else if (num2 > num1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
//draw
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
