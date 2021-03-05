var hour1,second1,minute1;
var hourAngle , minuteAngle,secondAngle;


function setup() {
  createCanvas(400,400);
  // createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background("grey");  

  translate(200,200)
  rotate(-90)

  hour1 = hour();
  minute1 = minute();
  second1 = second();

  secondAngle = map(second1, 0,60,0,360);
  minuteAngle = map(minute1,0,60,0,360);
  hourAngle = map(hour1%12,0,12,0,360);

  //drawing seconds hand
  push();
  rotate(secondAngle);
  strokeWeight(7);
  stroke("red");
  line(0,0,70,0);
  pop();
  //drawing minute hand
  push();
  rotate(minuteAngle);
  strokeWeight(7);
  stroke("cyan");
  line(0,0,70,0);
  pop();
  //drawing hour hand
  push();
  rotate(hourAngle);
  strokeWeight(7);
  stroke("lime");
  line(0,0,70,0);
  pop();

  stroke(255,0,255);
    point(0,0)
    
  strokeWeight(7);
  

  //seconds
  stroke("red")
  arc(0,0,300,300, 0,secondAngle)
  // minutes
  stroke("cyan")
  arc(0,0,250,250,0,minuteAngle);
  // hour
  stroke("lime")
  arc(0,0,200,200,0,hourAngle)


  //drawSprites();
}