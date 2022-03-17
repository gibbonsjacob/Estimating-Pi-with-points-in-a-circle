let points = [];
let circlePoints = 0;
let piEstimate = 0;
let totalPointsP;
let circlePointsP;
let piEstimateP;
let offset = 0;
let unitOffset;
let timesteps;
let x;
let y;
let xCoord;
let yCoord;



timesteps = 10000;

function inCircle(x1, y1){

  // get distance of point from center of circle
  // if distance > radius, outside of circle (return false)

  let d;
  let r = width/2;
  let x2 = width/2;
  let y2 = height/2;
  let xDiff = (x2-x1) ** 2;
  let yDiff = (y2-y1) ** 2;

  d = sqrt(xDiff + yDiff);

  return d <= r;


}



function setup() {
  createCanvas(600, 600);
  totalPointsP = createP();
  circlePointsP = createP();
  piEstimateP = createP();

}

function draw() {
  frameRate(120);
  strokeWeight(4);
  stroke(0);
  noFill();
  circle(width/2, height/2, width-offset)
  rectMode(CENTER);
  rect(width/2, height/2, width - offset, height - offset);
  unitOffset = 2;


  // just so we can process more than one point per frame
  for (let i = 0; i < timesteps; i++){
    pointCoords = [random(0, unitOffset), random(0, unitOffset)];
    x = pointCoords[0];
    y = pointCoords[1];
    xCoord = x * width / unitOffset;
    yCoord = y * height / unitOffset;
    strokeWeight(6);
    if (inCircle(xCoord, yCoord)){
      circlePoints++;
      stroke(0, 255, 0);
    } else{
      stroke(255, 0, 0);
    }
    point(xCoord, yCoord);
    points.push([x, y])
    totalPointsP.html('Total Points: ' + points.length);
    circlePointsP.html('Points in Circle: ' + circlePoints);
    piEstimateP.html('Pi Estimate: ' + 4 * (circlePoints / points.length));

    // just for debugging
    if (points.length % 100000 == 0){
      console.log('Total Points: ' + points.length);
      console.log('Points in Circle: ' + circlePoints);
      console.log('Pi Estimate: ' + 4 * (circlePoints / points.length));
      console.log();
    }
  }
}

