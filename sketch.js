var hr, min, sec;
var secAngle, minAngle, hrAngle;

function setup() {
  //Canvas and Mode
  createCanvas(900,700);
  angleMode(DEGREES);
}

function draw() {
  background(0); 
  
  // Hour, Minute and Second
  hr = hour();
  min = minute();
  sec = second();

  // Position and Rotation
  translate(width/2, height/2)
  rotate(-90)

  //Angles
  secAngle = map(sec, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);

  //Second
  push();
  rotate(secAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  //Minute
  push();
  rotate(minAngle);
  stroke(0,255,0);
  strokeWeight(8);
  line(0, 0, 75, 0);
  pop();

  //Hour
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(9);
  line(0, 0, 50, 0);
  pop();

  noFill();
  strokeWeight(10);
  //Second Arc
  stroke(255,0,0);
  arc(0,0,300,300,0,secAngle);

  //Minute Arc
  stroke(0,255,0);
  arc(0,0,270,270,0,minAngle);

  //Hour Arc
  stroke(0,0,255);
  arc(0,0,240,240,0,hrAngle);

  rotate(90);
  strokeWeight(1)
}