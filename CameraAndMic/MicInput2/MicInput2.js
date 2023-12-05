let mic;
let ripple = 0;
let targetRippleSize = 0;
let easing = 0.05; // Easing factor, adjust for more/less smoothing
let maxRippleSize = 500;

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

  // Calculate target ripple size based on volume
  targetRippleSize = 10 + vol * 10000;

  // Apply easing to the ripple's movement
  ripple += (targetRippleSize - ripple) * easing;
  if (ripple > maxRippleSize) ripple = 0; // Reset ripple

  // Draw the circle at the center
  noFill();
  stroke(0);
  ellipse(width / 2, height / 2, 10, 10);

  // Draw the ripple
  stroke(0, 102, 153);
  ellipse(width / 2, height / 2, ripple, ripple);
}

function mousePressed() {
  // Get the Audio input from the microphone
  mic.start();
}
