var NUM_CIRCLES= 12;
var circleDiameter;

function setup() {
    createCanvas(480, 600)
    cicrleDiameter = width/NUM_CIRCLES;
}

function draw() {
  var x= 0;
  while (y <= height){
      
  while (x<= width) {
     ellipse(x, 0, circleDiameter, circleDiameter);
     x = x + circleDiameter;
      x = x = circleDiameter;
  }
  
  y = y = circleDiameter;
  }
}