//get number of DrumButtons
var n = document.querySelectorAll(".drum").length;

//Passing values On click of all the Buttons 
for (var i = 0; i < n; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

//Passing the pressed key from Keyboard
document.addEventListener("keypress", function(e) {

  makeSound(e.key);

  buttonAnimation(e.key);

});

//Playing sounds on click of Buttons
function makeSound(key) {

  switch (key) {
    case "w":
      var w = new Audio("sounds/w.mp3");
      w.play();
      break;

    case "a":
      var a = new Audio("sounds/a.mp3");
      a.play();
      break;

    case "s":
      var s = new Audio('sounds/s.mp3');
      s.play();
      break;

    case "d":
      var d = new Audio('sounds/d.mp3');
      d.play();
      break;

    case "j":
      var j = new Audio('sounds/j.mp3');
      j.play();
      break;

    case "k":
      var k = new Audio('sounds/k.mp3');
      k.play();
      break;

    case "l":
      var l = new Audio('sounds/l.mp3');
      l.play();
      break;


    default: console.log(key);

  }
}

//Animation on Click of Buttons
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
