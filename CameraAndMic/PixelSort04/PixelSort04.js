let capture;
let sorted;

function setup() {
  createCanvas(1280, 480); // Adjust the canvas size if needed

  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide(); // Hide the HTML element of the capture

  frameRate(12); // Limit the frame rate to 12 fps
}

function draw() {
  background(0);

  // Capture the current video frame
  img = createImage(capture.width, capture.height);
  img.copy(capture, 0, 0, capture.width, capture.height, 0, 0, capture.width, capture.height);
  img.loadPixels();
  sorted = createImage(img.width, img.height);
  sorted.loadPixels();

  // Copy pixels from the video to the sorted image
  for (let i = 0; i < img.pixels.length; i++) {
    sorted.pixels[i] = img.pixels[i];
  }

  // Sort the pixels
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

  // Draw the live and sorted images
  image(capture, 0, 0); // Show the live video feed
  image(sorted, width / 2, 0); // Show the sorted image

  // No need for frame rate display as it's fixed
}
