'use strict';

var sign = document.getElementById('sign');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var current_letter = document.getElementById('current_letter');
//array to easily call up images
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//begin at "a"
var letter = 0;


// go to the next letter of the alphabet
next.addEventListener('click', function() {
  if (letter > 24) {
    letter = -1;
  }
  letter++;
  sign.src = 'images/' + alphabet[letter] + '.svg';
  console.log(alphabet[letter]);
  current_letter.innerHTML = (alphabet[letter].toUpperCase());

  return false;
})

console.log('outside log');
current_letter.innerHTML = (alphabet[letter].toUpperCase());


//go to the previous letter of the alphabet
prev.addEventListener('click', function() {
  if (letter < 1) {
    letter = 26;
  }
  letter--;
  sign.src = 'images/' + alphabet[letter] + '.svg';
  current_letter.innerHTML = (alphabet[letter].toUpperCase());

  return false;
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



var capture;


function setup() {
  var myCanvas = createCanvas(320, 240);
  myCanvas.parent('mySketch');

  // createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();

  // var cnv = createCanvas(320, 240);
  // var x = (windowWidth - width) / 2;
  // var y = (windowHeight - height) / 2;
  // cnv.position(x, y);
  // background(255, 0, 200);
}

function draw() {
  background(0);
  image(capture, 0, 0, 320, 240);
  console.log("drawing");
}
