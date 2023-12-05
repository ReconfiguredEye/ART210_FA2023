let mic;
let ripple = 0;
let rippleSpeed = 1;
let maxRippleSize = 50;

function setup() {
  createCanvas(640, 480);
  background(255);

  // Create an Audio input
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(255, 10); // Semi-transparent background for fading effect

  let vol = mic.getLevel(); // Get the volume from the microphone

  // Draw the circle at the center
  noFill();
  stroke(0);
  ellipse(width / 2, height / 2, 10, 10);

  // Update and draw the ripple
  ripple += rippleSpeed;
  if (ripple > maxRippleSize) ripple = 0; // Reset ripple

  stroke(0, 102, 153);
  ellipse(width / 2, height / 2, 10 + ripple + vol * 500, 10 + ripple + vol * 500); // Ripple size based on volume
}

function mousePressed() {
  // Get the Audio input from the microphone
  mic.start();
}
