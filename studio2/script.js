// var sharp = document.getElementById('sharp');
var wb = document.getElementById('wb');
var close = document.getElementById('close');



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

wb.addEventListener('touchstart', function(){
  overlay.style.display='block';
     wb.src='images/wbopen.png';

})

close.addEventListener('touchstart', function(){
  overlay.style.display='none';
     wb.src='images/wbclosed.png';

})

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
