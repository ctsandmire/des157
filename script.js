console.log("this is script.js comment");

var i;

function setup() {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch');
  noFill();
  // strokeWeight(.25);
  strokeWeight(.5);
}

function draw() {
  colorMode(HSB, 800, 100, 100);
  background(0, 0, 100);

  // stroke(mouseX / 6, 100, 100);

  for (i = -4000; i <= 4000; i += 65) {
    bl(i);
    br(i);
  }
}

function bl(a) {
  // bezier(-800, 100, mouseX / 2, mouseY - 250, mouseX / 2, mouseY - 250, 1200, a);
  bezier(-800, 100, mouseX / 4, mouseY/4, mouseX / 4, mouseY/4, 1200, a);

}

function br(b) {
  // bezier(-800, b, mouseX * 2, mouseY - 250, mouseX * 2, mouseY - 250, 1200, 100);
  bezier(-800, b, mouseX, mouseY/4, mouseX , mouseY/4, 1200, 100);

}
