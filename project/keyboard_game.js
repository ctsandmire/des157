// work on displaying a score and making the game more competetive or fun
// spencer said something about how to fix the score but I dont remember what it was

'use strict';

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var start = document.getElementById('start');
var instructions = document.getElementById('instructions');
var quizsign = document.getElementById('quizsign');
var start_statement = document.getElementById('start_statement');
var help = document.getElementById('help');
var score = document.getElementById("score");
var count = -1;
var signshown;
//var you_typed = document.getElementById('you_typed');
//var game_area = document.getElementsByClassName('game_area');
var disp = document.getElementById('disp');

//dont display img before game has begun
quizsign.style.display = 'none';
help.style.display = 'none'
disp.style.display = 'none';

//display instructions

//press start to begin
//hide instructions
//hide start button
start.addEventListener('click', function() {
  // instructions.style.display = 'none';
  start.style.display = 'none';
  start_statement.style.display = 'none';
  help.style.display = 'block'
  disp.style.display = 'block';

  beginGame();
})

//display a random letter
function beginGame() {
  // add 1 to score count
  count++;


  //turn img display back on
  quizsign.style.display = 'inline';
  //generate a random number between 65 and 90
  var randomsign = Math.floor((Math.random() * 26) + 65);
  // console.log(randomsign);
  //subtract 65 to use it in the alphabet array
  signshown = randomsign - 65;
  // console.log(signshown);
  quizsign.src = 'images/' + alphabet[signshown] + '.svg';

  document.addEventListener("keydown", function(event) {
    console.log("key pressed = " + event.which);

    //innerHTML saying, you typed this!
    //convert 60-90 whatever to 0-25 by subrtacting
    //then use alphabet array
    var user_key_pressed = alphabet[event.which - 65];
    document.getElementById("you_typed").innerHTML = "You Typed: <br /><em>" + user_key_pressed + "</em><br />Try again!";
    // store correct answer
    var correct_answer = alphabet[signshown];

    //if key pressed corresponds with sign shown, show a new one
    if (event.which === randomsign) {
      //display another sign
      beginGame();
      //reset random sign so it doesnt accept every previous letter shown as a correct answer
      randomsign = 0;
      //you typed x. That's correct!
      document.getElementById("you_typed").innerHTML = "You Typed: <br /><em>" + user_key_pressed + "</em><br /><em>CORRECT!</em>";

    } else if (event.which < 65 || event.which > 90) {
      //non-letter key pressed, nothing happens
      console.log("count stays the same");
      count = count;
      document.getElementById("you_typed").innerHTML = "Guess a letter in the alphabet.";
    }
    // else {
    //   //ISSUE, not working; score becomes negative no matter what then starts going down exponentially?
    //   count--;
    //   console.log("wrong key pressed = " + count);
    // }
  })
  //create P that sends congrats message if count reaches 10
//   if (count == 10) {}
  console.log("score = " + count);
  score.innerHTML = ("Score: " + count);

  if (count == 5){
    window.alert("Wow, five correct signs! keep up the good work!");
  }

  if (count == 10){
    window.alert("Ten correct signs! Great Job!");
  }

  if (count == 20){
    window.alert("Twenty correct signs! Keep it going!");
  }



}

help.addEventListener('click', function(){
  console.log(alphabet[signshown]);
  window.alert('the letter is ' + alphabet[signshown].toUpperCase());
})






// menu duplicate
var menu = document.getElementById('menu');

menu.addEventListener('mouseenter', function(event){
  //mySidenav.style.width = '250px';
  mySidenav.style.left = '40px';
  mySidenav.style.opacity = '1';
  // menu.style.color = '#ECE71F';
  console.log("mouseover");
})

mySidenav.addEventListener('mouseleave', function(event){
  //mySidenav.style.width = '275px';
  mySidenav.style.left = '-250px';
  mySidenav.style.opacity = '0';
  // menu.style.color = '#3030F9';
  console.log("mouseover");
})
