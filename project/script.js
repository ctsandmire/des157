'use strict';

// var sideNav = document.getElementById("mySideNav");
var menu = document.getElementById('menu');

menu.addEventListener('mouseover', function(event){
  mySidenav.style.width = '250px';
  console.log("mouseover");
})

menu.addEventListener('mouseout', function(event){
  mySidenav.style.width = '0px';
  console.log("mouseover");
})
