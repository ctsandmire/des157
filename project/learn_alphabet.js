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
