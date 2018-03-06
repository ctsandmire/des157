'use strict';

var sign = document.getElementById('sign');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
//array to easily call up images
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//begin at "a"
var letter = 0;

var capture;

// go to the next letter of the alphabet
next.addEventListener('click', function() {
  if (letter > 24) {
    letter = -1;
  }
  letter++;
  sign.src = 'images/' + alphabet[letter] + '.svg';
  return false;
})

//go to the previous letter of the alphabet
prev.addEventListener('click', function() {
  if (letter < 1) {
    letter = 26;
  }
  letter--;
  sign.src = 'images/' + alphabet[letter] + '.svg';
  return false;
})


document.f.onsubmit = processForm;

//display to the letter(s) that is/are entered in form
function processForm() {
  //puts value entered into a variable which is a string
  var signsearch = document.f.signsearch.value;
  for (var i = 0; i < signsearch.length; i++) {
    // **NEED** clear old string
    // img.src = "";
    //hide default display
    sign.style.display = 'none';

    // check to see if its working
    console.log(signsearch.charAt(i));
    // 4 lines follow to  create a new image for each character in the string
    var img = document.createElement("img");
    img.src = 'images/' + signsearch.charAt(i) + '.svg';
    img.style = 'height:200px';

    var src = document.getElementById('showsigns');
    src.appendChild(img);

  }
  // it goes outside to print all the letters to the console, instead of just 1st
  return false;

}


function setup() {
  createCanvas(320, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
}

function draw() {
  background(0);
  image(capture, 0, 0, 320, 240);
}
