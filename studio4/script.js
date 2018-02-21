'use strict';

var sign = document.getElementById('sign');
var next = document.getElementById('next');
var prev = document.getElementById('prev');

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var letter = 0;

var capture;

next.addEventListener('click', function(){
  if (letter > 24){
    letter = -1;
  }
  letter++;
  sign.src = 'images/' + alphabet[letter] + '.png';
  return false;
})

prev.addEventListener('click', function(){
  if (letter < 1){
    letter = 26;
  }
  letter--;
  sign.src = 'images/' + alphabet[letter] + '.png';
  return false;
})


document.f.onsubmit = processForm;


function processForm(){
  var signsearch = document.f.signsearch.value;

  sign.src = 'images/' + signsearch + '.png';
}


function setup(){
  createCanvas(320,240);
  capture = createCapture(VIDEO);
  capture.size(320,240);
  capture.hide();
}

function draw(){
  background(0);
  image(capture,0,0,320,240);
}
