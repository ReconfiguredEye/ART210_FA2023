let capture;
let capturedImage;
let sorted;
let index = 0;
let frameP;
let captureButton, saveButton;
let isSorting = false;

function setup() {
  createCanvas(640, 240);

  // Webcam capture
  capture = createCapture(VIDEO);
  capture.size(160, 120);
  capture.hide();

  // Capture Button
  captureButton = createButton('Capture Image');
  captureButton.mousePressed(captureImage);

  // Save Button
  saveButton = createButton('Save Sorted Image');
  saveButton.mousePressed(saveSortedImage);

  frameP = createP('');
}

function draw() {
  background(0);

  // Draw the captured image on the left if it exists
  if (capturedImage) {
    image(capturedImage, 0, 0);
  }

  // Draw the sorted image on the right if sorting is in progress
  if (isSorting) {
    sortPixels();
    image(sorted, width/2, 0); // Assuming canvas width is 320
  } else if (sorted){
    image(sorted, width/2, 0);// keep displaying the sorted image
  }

  frameP.html("frameRate: " + nf(frameRate(), 2, 2) + ", Sorting Index: " + index);
}

function captureImage() {
  capturedImage = createImage(capture.width, capture.height);
  capturedImage.copy(capture, 0, 0, capture.width, capture.height, 0, 0, capture.width, capture.height);
  capturedImage.loadPixels();
  sorted = capturedImage.get();
  isSorting = true;
  index = 0;
}

function saveSortedImage() {
  if (sorted) {
    save(sorted, 'sorted.jpg');
  }
}

function sortPixels() {
  sorted.loadPixels();

  // Brightness-based pixel sorting
  for (let n = 0; n < 50; n++) { // Adjust the '5' to change sorting speed
    if (index < sorted.pixels.length - 4) {
      let i = index;
      let x = (i / 4) % width;
      let y = floor((i / 4) / width);
      let col = sorted.get(x, y);
      let bright = brightness(col);

      let record = -1;
      let selectedPixel = index;

      for (let j = index; j < sorted.pixels.length; j += 4) {
        x = (j / 4) % width;
        y = floor((j / 4) / width);
        col = sorted.get(x, y);
        let b = brightness(col);

        if (b > record) {
          selectedPixel = j;
          record = b;
        }
      }

      swapPixels(i, selectedPixel);
      index += 4;
    } else {
      console.log("Sorting Complete");
      isSorting = false;
      break;
    }
  }
  sorted.updatePixels();
}

function swapPixels(i, j) {
  for (let k = 0; k < 4; k++) {
    let temp = sorted.pixels[i + k];
    sorted.pixels[i + k] = sorted.pixels[j + k];
    sorted.pixels[j + k] = temp;
  }
}
