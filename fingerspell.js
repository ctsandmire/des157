// UNSURE HOW to create a slideshoe-like display for the sign images
// do display them all in html then hide/show them with js
// do i create a new img for each sign that needs to be shown
'use strict';

var letterimg = document.getElementById('letterimg');
var words = ["hungry", "family", "cat"];
var next = document.getElementById('next_word_button');
var order = 0;
var current_word = words[order];

letterimg.style.display = 'none';


//begin game
start.addEventListener('click', function() {
  //start button goes away
  start.style.display = 'none';
  //show each sign in the array for a quick sec...then change to re-display image that is clickable but thats further down the road
  //accept correct string of letters in the input field as the correct answer
  //display some sort of correct alert
  //show the next array/word

  //call the word spelling function using the current_word = words[order] = words [0] = "hungry"
  spell_word(current_word);
})

// this is the main function
// it takes the current_word, breaks it into letters and uses those to display a series of images
function spell_word(a){
  console.log("the word we are spelling is: " + a);
  letterimg.style.display = 'block';
  var i;
  for (i = 0; i < a.length; i++){
    var img = document.createElement("img");
    img.src = 'fimages/' + current_word.charAt(i) + '.svg';
    img.style = 'height:200px';
    console.log('current letter: ' + current_word.charAt(i));
    var src = document.getElementById('spelling_area');
    src.appendChild(img);
  }
}


//when you click the next button, it runs the function that changes words array to the next word in the array, aka adds one to order and therefore changes current_word
// then spells current word by calling the spell_word function
next.addEventListener('click', function(){
    order++;
    console.log("the word is now: " + words[order]);
    //re-establish(?) current_word so it changes when order changes
    current_word = words[order];
    spell_word(current_word);

    // use this, above, later to make it stop at the end of the word bank
    // for(var i=0; i < words.length; i++){}

    //side note: this still works if u havent pressed start yet so maybe have that button not display until u hit start
})


// if input = current_word, display some correct alert, possibly call next function and get rid of next word button entirely
// if input != current_word, display some incorrent alert, clear value and show letters again or have button to try again, then youd also need button to go to the next word if they didnt want to try again
// have a different thing that shows you how to fingerspell any word (string of letters)?
