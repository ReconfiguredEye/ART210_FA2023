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
    for (let x = 0; x < sorted.width; x++) {
      for (let y = 0; y < sorted.height - 1; y++) {
        for (let y2 = y + 1; y2 < sorted.height; y2++) {
          let index1 = (y * sorted.width + x) * 4;
          let index2 = (y2 * sorted.width + x) * 4;

          if (sorted.pixels[index1] < sorted.pixels[index2]) {
            for (let n = 0; n < 4; n++) {
              let temp = sorted.pixels[index1 + n];
              sorted.pixels[index1 + n] = sorted.pixels[index2 + n];
              sorted.pixels[index2 + n] = temp;
            }
          }
        }
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
