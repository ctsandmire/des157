'use strict';

var letterimg = document.getElementById('letterimg');
var replay = document.getElementById('replay');
var words = ["hungry", "family", "cat", "super", "sandwich", "house", "number", "envelope", "fridge", "marble"];
var next = document.getElementById('next_word_button');
var reveal = document.getElementById('reveal_answer_button');
var the_form = document.getElementById('the_form');
var start_statement = document.getElementById('start_statement')

// var user_answer = document.getElementById('answer_input').value;

var order = 0;
var current_word = words[order];
var letterImgInt;
var i;

document.f.onsubmit = checkAnswer;

letterimg.style.display = 'none';
replay.style.display = 'none';
next.style.display = 'none';
reveal.style.display = 'none';
// the_form.style.display = 'none';
 the_form.style.display = 'block';


//begin game
start.addEventListener('click', function() {
  i = 0;
  //start button goes away
  start.style.display = 'none';
  next.style.display = 'inline';
  reveal.style.display = 'inline';
//  the_form.style.display = 'block';
  start_statement.style.display = 'none';
  //show each sign in the array for a quick sec...then change to re-display image that is clickable but thats further down the road
  //accept correct string of letters in the input field as the correct answer
  //display some sort of correct alert
  //show the next array/word

  //call the word spelling function using the current_word = words[order] = words [0] = "hungry"
  // spell_word(current_word);
  // clearInterval(letterImgInt);
  // console.log('start cleared letterImgInt: ' + letterImgInt);

  letterImgInt = setInterval(spell_word, 800);
})

// this is the main function
// it takes the current_word, breaks it into letters and uses those to display a series of images
function spell_word() {
  console.log('in spell_word' + i);
  if (i < current_word.length) {

    // console.log("the word we are spelling is: " + current_word);
    letterimg.style.display = 'block';
    // cycle through each letter:
    letterimg.src = 'images/' + current_word.charAt(i) + '.svg';
    console.log('current letter: ' + current_word.charAt(i));
    //if else statement
    // if i < length , above stuff, if theres a letter left, spell it
    //else (stop, clear interval)

  } else {
    console.log('i is: ' + i + '; current_word.length is: ' + current_word.length);
    // letterImgInt = null;
    replay.style.display = 'block';
    console.log("timer" + letterImgInt);
    clearInterval(letterImgInt);
    // i = 0;
    //  console.log('clearInterval called' + letterImgInt);

    //letterimg.style.cursor = "pointer";

    // if i clear interval here, it doesnt show anything
  }

i++;
//}
}


// when you click on the img that says "click to replay" it re-spells the word
// -- add this to a div with just the replay (absolute position right over the finger images)
replay.addEventListener('click', function() {
  replay.style.display = 'none';

  i = 0;
  letterImgInt = null;
  clearInterval(letterImgInt);

  letterImgInt = setInterval(spell_word, 800);


})


function checkAnswer(event) {
  //take what is entered
  var user_answer = document.f.answer_input.value.toLowerCase();
  console.log('value entered is:' + user_answer);
  event.preventDefault();
  letterImgInt = null;
  clearInterval(letterImgInt);
  //turn it into lowercase?
  //check if its the ame as current_word
  if (user_answer == current_word) {
    console.log("correct!");
    window.alert("correct!");
    //alert overlay, correct
    //show gif of sign for family
    //press any key to go to the next word
  } else {
    window.alert("incorrect, try again!");
  }
  //if yes display correct signal (and possibly go to the next word)
  //if no display incorrect signal
}



//when you click the next button, it runs the function that changes words array to the next word in the array, aka adds one to order and therefore changes current_word
// then spells current word by calling the spell_word function
next.addEventListener('click', function() {
  // have it clear the value entered in the form
  order++;
  console.log("the word is now: " + words[order]);
  //re-establish current_word so it changes when order changes
  current_word = words[order];
  // spell_word(current_word);
  console.log(current_word);
  i = 0;
  // *****
  // *****
  // THE WHOLE ISSUE WAS HERE BECAUSE I NEEDED TO REASSIGN THE SETINTERVAL THING... before it was just setInterval(spell_word, 1000)
  clearInterval(letterImgInt);

  letterImgInt = setInterval(spell_word, 800);

  // use this, above, later to make it stop at the end of the word bank
  // for(var i=0; i < words.length; i++){}

  //side note: this still works if u havent pressed start yet so maybe have that button not display until u hit start
})

reveal.addEventListener('click', function(){
  console.log(current_word);
  window.alert('The word is ' + current_word);
})


// if input = current_word, display some correct alert, possibly call next function and get rid of next word button entirely
// if input != current_word, display some incorrent alert, clear value and show letters again or have button to try again, then youd also need button to go to the next word if they didnt want to try again
// have a different thing that shows you how to fingerspell any word (string of letters)?

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


//fun effect footer navs
// var left_button_footer = document.getElementById('left_button_footer');
// var prev_page = document.getElementById('prev_page');
//
// left_button_footer.addEventListener('mouseover', function(event) {
//   prev_page.style.opacity = '.5';
//   console.log('message recieved');
// })
