'use strict';

var menu = document.getElementById('menu');

menu.addEventListener('mouseenter', function(event) {
  mySidenav.style.width = '150px';
  mySidenav.style.left = '40px';
  // menu.style.color = '#ECE71F';
  // console.log("mouseover");
})

mySidenav.addEventListener('mouseleave', function(event) {
  mySidenav.style.width = '0px';
  mySidenav.style.left = '-100px';
  // menu.style.color = '#3030F9';
  // console.log("mouseover");
})
