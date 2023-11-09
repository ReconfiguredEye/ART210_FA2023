let simplex;
let cols, rows;
let inc = 0.1;
let scl = 20;
let zoff = 0;

function setup() {
  createCanvas(800, 800);
  simplex = new SimplexNoise();
  cols = floor(width / scl);
  rows = floor(height / scl);
}

function draw() {
  background(0);
  let yoff = 0;
  
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let angle = simplex.noise3D(xoff, yoff, zoff) * TWO_PI * 4;
      let v = p5.Vector.fromAngle(angle);
      xoff += inc;
      
      let xp = x * scl;
      let yp = y * scl;
      stroke(255);
      strokeWeight(1);
      push();
      translate(xp, yp);
      rotate(v.heading());
      line(0, 0, scl, 0);
      pop();
    }
    yoff += inc;
  }
  zoff += 0.01;
}
