let capture;
let img;
let sorted;
let index = 0;
let frameP;
let button;
let capturing = false;

function setup() {
  createCanvas(1280, 480); // Adjust the canvas size if needed

  capture = createCapture(VIDEO);
  capture.size(640, 480);
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
    for (let n = 0; n < 100; n++) {
      let record = 256; // Maximum value for a color channel + 1
      let selectedPixel = index;
      for (let j = index; j < sorted.pixels.length; j += 4) {
        let redValue = sorted.pixels[j];
        if (redValue < record) {
          selectedPixel = j;
          record = redValue;
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
  frameP.html("frameRate: " + nf(frameRate(), 2, 2) + ", Sorting Index: " + index);
}
