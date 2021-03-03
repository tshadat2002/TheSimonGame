

///////////////////////////////////////////////////Starting Variables///////////////////////////////////////////////////
var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red","blue","green","yellow"];
var level = 0;
var started = false;
///////////////////////////////////////////////////Starting Variables///////////////////////////////////////////////////






///////////////////////////////////////////////////Start Game///////////////////////////////////////////////////
$(document).keydown(function(){
  if (started == false){
    nextSequence();
  }else{
    null;
  }
})
///////////////////////////////////////////////////Start Game///////////////////////////////////////////////////


///////////////////////////////////////////////////Pattern of Game///////////////////////////////////////////////////
function nextSequence(){
  userClickedPattern = [];
  level++;
  if(started == false){
    started = true;
    $("#level-title").text("Level " + level);
  }else{
    $("#level-title").text("Level " + level);
  }
  var randomNumber = Math.round(Math.random() * 3);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}
///////////////////////////////////////////////////Pattern of Game///////////////////////////////////////////////////



///////////////////////////////////////////////////User Clicking Button///////////////////////////////////////////////////
//user clicking button
$(".btn").click(function handler(){
  //userchosencolor becomes the id or color of the button clicked
  var userChosenColor = $(this).attr("id");
   
  userClickedPattern.push(userChosenColor);
  
  playSound(userChosenColor);

  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.lastIndexOf(userChosenColor));
  
 
})
///////////////////////////////////////////////////User Clicking Button///////////////////////////////////////////////////





///////////////////////////////////////////////////Record and check user's response///////////////////////////////////////////////////
function checkAnswer(currentLevel) {

  //checks to see if last array value is the same
  if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){
    //checks to see if it is the last value in gamePattern
    if(userClickedPattern[gamePattern.length - 1] == gamePattern[gamePattern.length - 1]){
      setTimeout(function () {
        nextSequence();
      }, 1000)
    }
  }else{
    
    //red background
    $("body").addClass("game-over");
    
    //take out red background after 200 milliseconds
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200); 
    
    //change h1 to press any key to restart
    $("#level-title").text("Game Over, Press Any Key To Restart");
    
    
    //play wrong sound
    var wrong = new Audio('sounds/wrong.mp3');
    wrong.play();

    //call startover function
    startOver();
  }

}
/////////////////////////////////////////Record and check users response///////////////////////////////////////////////////







///////////////////////////////////////////////////StartOver///////////////////////////////////////////////////
function startOver(){
  //reset gamePattern
  gamePattern = [];
  //reset userPatter
  userClickedPattern = [];
  //reset level 
  level = 0;
  //game ended so started is not true
  started = false;
}
///////////////////////////////////////////////////StartOver///////////////////////////////////////////////////






///////////////////////////////////////////////////Animation for pressed button///////////////////////////////////////////////////
function animatePress(currentColor){
  //shows the pressed animation effect
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
  },100);
}
///////////////////////////////////////////////////Animation for Pressed button///////////////////////////////////////////////////




///////////////////////////////////////////////////Play Sound when button gets clicked///////////////////////////////////////////////////
function playSound(color){
  //plays sounds for whenever you click on button
  switch (color) {
    case color = "red":
    var red = new Audio('sounds/red.mp3')
    red.play();
    break;

    case color = "blue":
    var blue = new Audio('sounds/blue.mp3')
    blue.play();
    break;

    case color = "green":
    var green = new Audio('sounds/green.mp3')
    green.play();
    break;

    case color = "yellow":
    var yellow = new Audio('sounds/yellow.mp3')
    yellow.play();
    break;


    default: console.log(color);

  }
}
///////////////////////////////////////////////////Play Sound when button gets clicked///////////////////////////////////////////////////
