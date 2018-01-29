"use strict";

var i = 0;


document.f.onsubmit = processForm;

function processForm() {

  var noun1 = ["frameworks", "impact", "immersion", "narratives"]

  var myMsg = document.getElementById("myMsg");
  myMsg.innerHTML = noun1[i];
  i++;

  if (i>3) {
    i=0;
  }

  return false;
}
