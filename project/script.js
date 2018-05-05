'use strict';

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
