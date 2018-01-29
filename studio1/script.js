"use strict";

var i = 0;
var j = 0;
var k = 0;

processForm();

document.f.onsubmit = processForm;

function processForm() {

  //3 j
  var noun2 = ["innovators", "thinkers", "trailblazers", "ONE LESS"]
  //4 i
  var noun1 = ["frameworks", "impact", "immersion", "narratives"]
  var adverb1 = ["Eagerly", "Wholeheartedly", "Restlessly", "Devotedly"]
  var ingverb1 = ["pioneering", "evolving", "streamlining", "innovating"]
  var verb1 = ["reimagine", "disrupt", "diversify", "unpack"]
  var verb2 = ["drilling down on", "pushing the envelope of", "diving deep into", "doing the heavy lifting for"]
  var noun3 = ["technology", "information highways", "touchpoints", "growth"]
  //6 k
  var adj1 = ["holistic", "strategic", "hyperlocal", "cutting-edge", "upcycled", "transparent"]
  var adj2 = ["next-generation", "crowdsourced", "brick and mortar", "on-brand", "seamless", "scalable"]


  var companyname=document.f.companyname.value;
  var year=document.f.year.value;
  var numemployees=document.f.numemployees.value;
  var industry=document.f.industry.value;



  var myMsg = document.getElementById("myMsg");
  myMsg.innerHTML = ("At <em>" + companyname + "</em>, we believe in " + adj1[k] +" " + noun1[i] + ". " + adverb1[i] + " " + ingverb1[i] + " since <em>" + year + "</em>, we have grown to a family of <em>" + numemployees + "</em> " + noun2[j] + " who are on a mission to " + verb1[i] + " the <em>" + industry + "</em> industry by " + verb2[i] + " " + adj2[k] + " " + noun3[i] + ".");
  i++;
  j++;
  k++;

  if (i>3) {
    i=0;
  }
  if (j>2) {
    j=0;
  }
  if (k>5) {
    k=0;
  }

  return false;
}
