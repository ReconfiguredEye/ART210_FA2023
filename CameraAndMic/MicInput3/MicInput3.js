let mic;
let fft;
let rippleSources = [];

function setup() {
  createCanvas(640, 480);
  background(255);

  // Create an Audio input
  mic = new p5.AudioIn();
  mic.start();

  // Create a new p5.FFT object
  fft = new p5.FFT();
  fft.setInput(mic);

  // Define multiple ripple sources
  rippleSources = [
    { x: 100, y: 100, color: [255, 0, 0], freqRange: [60, 250], size: 0 }, // Low frequencies
    { x: 300, y: 200, color: [0, 255, 0], freqRange: [251, 500], size: 0 }, // Mid-low frequencies
    { x: 500, y: 300, color: [0, 0, 255], freqRange: [501, 2000], size: 0 }, // Mid frequencies
    // Add more sources as needed
  ];
}

function draw() {
  background(255, 10);

  // Analyze the frequency spectrum
  let spectrum = fft.analyze();

  for (let source of rippleSources) {
    // Get the energy in the source's frequency range
    let energy = fft.getEnergy(source.freqRange[0], source.freqRange[1]);

    // Map energy to ripple size
    let newSize = map(energy, 0, 255, 0, 200);
    source.size += (newSize - source.size) * 0.05; // Apply easing

    // Draw the ripple
    noFill();
    stroke(source.color[0], source.color[1], source.color[2]);
    ellipse(source.x, source.y, source.size, source.size);
  }
}

function mousePressed() {
  mic.start();
}
