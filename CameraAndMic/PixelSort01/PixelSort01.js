let capture;
let img;
let sorted;
let index = 0;
let frameP;
let button;
let capturing = false;

function setup() {
  createCanvas(640, 240); // Adjust the canvas size if needed

  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide(); // Hide the HTML element of the capture

  button = createButton('capture');
  button.mousePressed(captureImage);

  frameP = createP(frameRate());
}

function captureImage() {
  img = createImage(capture.width, capture.height);
  img.copy(capture, 0, 0, capture.width, capture.height, 0, 0, capture.width, capture.height);
  img.loadPixels();
  sorted = createImage(img.width, img.height);
  sorted.loadPixels();
  for (let i = 0; i < img.pixels.length; i++) {
    sorted.pixels[i] = img.pixels[i];
  }
  sorted.updatePixels();
  capturing = true;
  index = 0; // Reset index for sorting
}

function draw() {
  background(0);

  if (capturing) {
    // Perform pixel sorting on 'sorted'
    sorted.loadPixels();
    for (let n = 0; n < 10; n++) {
      let record = -1;
      let selectedPixel = index;
      for (let j = index; j < sorted.pixels.length; j += 4) {
        let pix = color(sorted.pixels[j], sorted.pixels[j + 1], sorted.pixels[j + 2], sorted.pixels[j + 3]);
        let b = hue(pix);
        if (b > record) {
          selectedPixel = j;
          record = b;
        }
      }
      let temp = [];
      temp[0] = sorted.pixels[index];
      temp[1] = sorted.pixels[index + 1];
      temp[2] = sorted.pixels[index + 2];
      temp[3] = sorted.pixels[index + 3];
      sorted.pixels[index] = sorted.pixels[selectedPixel];
      sorted.pixels[index + 1] = sorted.pixels[selectedPixel + 1];
      sorted.pixels[index + 2] = sorted.pixels[selectedPixel + 2];
      sorted.pixels[index + 3] = sorted.pixels[selectedPixel + 3];
      sorted.pixels[selectedPixel] = temp[0];
      sorted.pixels[selectedPixel + 1] = temp[1];
      sorted.pixels[selectedPixel + 2] = temp[2];
      sorted.pixels[selectedPixel + 3] = temp[3];

      if (index < sorted.pixels.length - 1) {
        index += 4;
      }
    }
    sorted.updatePixels();

    // Draw the captured image
    image(img, 0, 0);

    // Draw the sorted image
    image(sorted, width/2, 0); // Adjust position as needed
  } else {
    // Display the live webcam feed before capturing
    image(capture, 0, 0);
  }

  // Frame rate display logic
  frameP.html("frameRate: " + nf(frameRate(), 2, 2));
}

// Other functions (e.g., sorting algorithm) remain unchanged
