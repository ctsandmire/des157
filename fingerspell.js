'use strict';

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var letterimg = document.getElementById('letterimg');
var w_hungry = ['h', 'u', 'n', 'g', 'r', 'y'];
var img_interval;

letterimg.style.display = 'none';

//begin game
start.addEventListener('click', function() {
  //get ride of start button once you press it
  start.style.display = 'none';
  //show each sign in the array for a quick sec...then change to re-display image that is clickable but thats further down the road
  //accept correct string of letters in the input field as the correct answer
  //display some sort of correct alert
  //show the next array/word
  //attempts follow
  //call each item in the next array
  // img_interval = setInterval(show_img, 1000);
  show_img();
  return false;

})

function show_img (){
  for (var i = 0; i < w_hungry.length; i++){
    //turn display back on
    letterimg.style.display = 'inline';

    //only shows last item
    letterimg.src = 'fimages/' + w_hungry[i] + '.svg';
    console.log(w_hungry[i]);

  }
}
