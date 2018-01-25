
function processForm() {

  var companyname=document.f.companyname.value;
  var year=document.f.year.value;
  var numemployees=document.f.numemployees.value;
  var industry=document.f.industry.value;
  var jobsite=document.f.jobsite.value;
  var noun1=["frameworks", "impact", "immersion", "narratives"]

  var myMsg=document.getElementById("myMsg");

  myMsg.innerHTML="At <em>" + companyname + "</em>, we believe in (holistic) " + noun1[0] +". (Eagerly) (pioneering) since <em>" + year + "</em>, <em>"+ companyname + "</em> has grown to a family of <em>" + numemployees + "</em> (innovators) who are constantly (immersing), (diversifying) and (streamlining) (impact). Our mission is to (disrupt) the <em>" + industry + "</em> indusrty.  To join us, visit <em>" + jobsite + "</em> for job openings.";
  return false;
}

document.f.onsubmit = processForm;
