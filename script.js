console.log("this is script.js comment");

var i;

function setup() {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch');
  noFill();
  strokeWeight(.25);
}

function draw() {
  colorMode(HSB, 800, 100, 100);
  background(0, 0, 0);
  stroke(mouseX / 6, 100, 100);

  for (i = 100; i <= 700; i += 25) {
    bl(i);
    br(i);
  }
}

function bl(a) {
  bezier(-400, 100, mouseX / 2, mouseY - 250, mouseX / 2, mouseY - 250, 1200, a);
}

function br(b) {
  bezier(-400, b, mouseX * 2, mouseY - 250, mouseX * 2, mouseY - 250, 1200, 100);
}
