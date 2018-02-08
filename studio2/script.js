var wb = document.getElementById('wb');
var plan = document.getElementById('plan');
var comp = document.getElementById('comp');

var close1 = document.getElementById('close1');
var close2 = document.getElementById('close2');
var close3 = document.getElementById('close3');


// WATER BOTTLE
wb.addEventListener('touchstart', function() {
  overlay1.style.display = 'block';
  wb.src = 'images/wbopen.png';

  overlay2.style.display = 'none';
  overlay3.style.display = 'none';

  plan.src = 'images/plan1.png';
  comp.src = 'images/compclosed.png';
})

close1.addEventListener('touchstart', function() {
  overlay1.style.display = 'none';
  wb.src = 'images/wbclosed.png';
})

// WATER BOTTLE DESKTOP
wb.addEventListener('mousedown', function() {
  overlay1.style.display = 'block';
  wb.src = 'images/wbopen.png';

  overlay2.style.display = 'none';
  overlay3.style.display = 'none';

  plan.src = 'images/plan1.png';
  comp.src = 'images/compclosed.png';
})

close1.addEventListener('mousedown', function() {
  overlay1.style.display = 'none';
  wb.src = 'images/wbclosed.png';
})


// PLANNER
plan.addEventListener('touchstart', function() {
  overlay2.style.display = 'block';
  plan.src = 'images/plan2.png';

  overlay1.style.display = 'none';
  overlay3.style.display = 'none';

  comp.src = 'images/compclosed.png';
  wb.src = 'images/wbclosed.png';
})

close2.addEventListener('touchstart', function() {
  overlay2.style.display = 'none';
  plan.src = 'images/plan1.png';
})

// PLANNER DESKTOP
plan.addEventListener('mousedown', function() {
  overlay2.style.display = 'block';
  plan.src = 'images/plan2.png';

  overlay1.style.display = 'none';
  overlay3.style.display = 'none';

  comp.src = 'images/compclosed.png';
  wb.src = 'images/wbclosed.png';
})

close2.addEventListener('mousedown', function() {
  overlay2.style.display = 'none';
  plan.src = 'images/plan1.png';
})

// COMPUTER
comp.addEventListener('touchstart', function() {
  overlay3.style.display = 'block';
  comp.src = 'images/compopen.png';

  overlay2.style.display = 'none';
  overlay1.style.display = 'none';

  wb.src = 'images/wbclosed.png';
  plan.src = 'images/plan1.png';

})

close3.addEventListener('touchstart', function() {
  overlay3.style.display = 'none';
  comp.src = 'images/compclosed.png';
})

// COMPUTER DESKTOP
comp.addEventListener('mousedown', function() {
  overlay3.style.display = 'block';
  comp.src = 'images/compopen.png';

  overlay2.style.display = 'none';
  overlay1.style.display = 'none';

  wb.src = 'images/wbclosed.png';
  plan.src = 'images/plan1.png';

})

close3.addEventListener('mousedown', function() {
  overlay3.style.display = 'none';
  comp.src = 'images/compclosed.png';
})
