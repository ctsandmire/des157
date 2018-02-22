//make use of array from earlier
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var letter = 0;

var start = document.getElementById('start');
var instructions = document.getElementById('instructions');
var quizsign = document.getElementById('quizsign');



//display instructions


//press start to begin
//hide instructions
//hide start button
start.addEventListener('click', function(){
  instructions.style.display='none';
  // start.style.display='none';
  // return false;
  beginGame();
})

//display a random letter
function beginGame(){
  var randomsign = Math.floor((Math.random() * 26));
  console.log(randomsign);

  quizsign.src = 'images/' + alphabet[randomsign] + '.png';

}


//if key pressed matches sign, go to next image, else stay or do nothing
