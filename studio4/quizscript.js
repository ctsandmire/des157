var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var start = document.getElementById('start');
var instructions = document.getElementById('instructions');
var quizsign = document.getElementById('quizsign');
var count = 1;

//dont display img before game has begun
quizsign.style.display = 'none';

//display instructions

//press start to begin
//hide instructions
//hide start button
start.addEventListener('click', function() {
  instructions.style.display = 'none';
  start.style.display = 'none';
  beginGame();
})

//display a random letter
function beginGame() {
  //turn img display back on
  quizsign.style.display = 'inline';
  //generate a random number between 65 and 90
  var randomsign = Math.floor((Math.random() * 26) + 65);
  // console.log(randomsign);
  //subtract 65 to use it in the alphabet array
  var signshown = randomsign - 65;
  // console.log(signshown);
  quizsign.src = 'images/' + alphabet[signshown] + '.svg';
  // keyPressed();

  document.addEventListener("keydown", function(event) {
    console.log(event.which);
    //if key pressed corresponds with sign shown, show a new one
    if (event.which === randomsign) {
      beginGame();
      count++;
    } else {
      count--;
    }
  })
  //create P that sends congrats message if count reaches 10
  if (count == 10) {}
  console.log(count);
}
