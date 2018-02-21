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

  for (var i = 0; i < signsearch.length; i++){
    // clear old string
    // img.src = "";
    // check to see if its working
    console.log(signsearch.charAt(i));
    // 4 lines follow to  create a new image for each character in the string
    var img = document.createElement("img");
    img.src = 'images/' + signsearch.charAt(i) + '.png';

    if (signsearch == "mom" || signsearch == "mother"){
      img.src = 'images/mom.png';
    }

    var src = document.getElementById('showsigns');
    src.appendChild(img);

  }
  // it goes outside to print all the letters to the console, instead of just 1st
    return false;

}


// function processForm(){
//   var signsearch = document.f.signsearch.value;
//
//   if (signsearch.length == 1){
//     sign.src = 'images/' + signsearch + '.png';
//     return false;
//   }
//
//   if (signsearch.length > 1){
//
//     for (var i = 0; i < signsearch.length; i++){
//       //removes default letter image
//       sign.style.display='none';
//
//       console.log(signsearch.charAt(i));
//
//       // var img = document.createElement("img");
//       // img.src = 'images/' + signsearch.charAt(i) + '.png';
//       // var src = document.getElementById('showsigns');
//       //
//       // src.appendChild(img);
//
//
//       //only displaying the last letter in the string as img src
//       // sign.src = 'images/' + signsearch.charAt(i) + '.png';
//
//     }
//
//     //it is here to show all the letters of the string instead of just the last
//     return false;
//   }
// }


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
