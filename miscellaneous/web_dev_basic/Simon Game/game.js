
//setting button solours
var btncol = ["br11", "br12", "br21", "br22"]

//declaring variables for game pattern and user clicked pattern
var gamePattern = [];
var clickedpattern = [];

//useful variables for recognizing the levels and game started or not
var started = false;
var level = 0;

//function to handle key pressed by user to start
$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
});

//function to handle the pattern clicked by the user
$(".btn").click(function() {

    //getting the color
    var color = $(this).attr("id");
    clickedpattern.push(color);
  
    playmusic(color);
    animation(color);
  
    checkAnswer(clickedpattern.length-1);
});

//function to check if the answer is right or wrong
function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === clickedpattern[currentLevel]) {
      if (clickedpattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playmusic("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}

//function for generating next sequence of pattern
function nextSequence() {
    clickedpattern = [];
    level++;
    $("#level-title").text("Level " + level);

    //random numbers
    var rnum = Math.floor(Math.random() * 4);
    var rcolor = btncol[rnum];
    gamePattern.push(rcolor);
  
    $("#" + rcolor).fadeIn(100).fadeOut(100).fadeIn(100);
    playmusic(rcolor);
}

//function for handling animation on key press
function animation(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
}

//function to play sound associated with button
function playmusic(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
 
//function for starting the game again
  function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }
  