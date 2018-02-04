// var sharp = document.getElementById('sharp');
var wb = document.getElementById('wb');
var plan = document.getElementById('plan');
var comp = document.getElementById('comp');

var close1 = document.getElementById('close1');
var close2 = document.getElementById('close2');
var close3 = document.getElementById('close3');


// WATER BOTTLE
wb.addEventListener('touchstart', function(){
  overlay1.style.display='block';
     wb.src='images/wbopen.png';

})

close1.addEventListener('touchstart', function(){
  overlay1.style.display='none';
     wb.src='images/wbclosed.png';
})

// PLANNER
plan.addEventListener('touchstart', function(){
  overlay2.style.display='block';
     plan.src='images/plan2.png';

})

close2.addEventListener('touchstart', function(){
  overlay2.style.display='none';
     plan.src='images/plan1.png';
})

// COMPUTER
comp.addEventListener('touchstart', function(){
  overlay3.style.display='block';
     comp.src='images/compopen.png';

})

close3.addEventListener('touchstart', function(){
  overlay3.style.display='none';
     comp.src='images/compclosed.png';
})



// sharp.addEventListener('mouseover', function(){
//   sharp.src='images/sharpopen.png';
// })
//
// sharp.addEventListener('mouseout', function(){
//   sharp.src='images/sharp.png';
// })

// sharp.addEventListener('mousedown', function(){
//   sharp.style.cursor = "url(images/sharppoint.png), auto";
// })


// wb.addEventListener('mouseover', function(){
//   wb.src='images/wbopen.png';
// })
//
// wb.addEventListener('mouseout', function(){
//   wb.src='images/wbclosed.png';
// })


//
//
// var smiley = document.getElementById('smiley');
//
// smiley.addEventListener('mouseover', function() {
//   smiley.style.opacity = .25;
// });
//
// smiley.addEventListener('mouseout', function(){
//   smiley.style.opacity=1;
// })
