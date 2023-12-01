let video;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
}

function draw() {
  background(0);

  video.loadPixels();
  sortPixelsByBrightness();
  updatePixels();
}

function sortPixelsByBrightness() {
  let w = video.width;
  let h = video.height;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w - 1; x++) {
      let loc1 = (x + y * w) * 4;
      let loc2 = (x + 1 + y * w) * 4;
      
      let r1 = video.pixels[loc1];
      let g1 = video.pixels[loc1 + 1];
      let b1 = video.pixels[loc1 + 2];
      let brightness1 = (r1 + g1 + b1) / 3;
      
      let r2 = video.pixels[loc2];
      let g2 = video.pixels[loc2 + 1];
      let b2 = video.pixels[loc2 + 2];
      let brightness2 = (r2 + g2 + b2) / 3;

      if (brightness1 < brightness2) {
        swapPixels(loc1, loc2);
      }
    }
  }
}

function swapPixels(loc1, loc2) {
  for (let i = 0; i < 4; i++) {
    let temp = video.pixels[loc1 + i];
    video.pixels[loc1 + i] = video.pixels[loc2 + i];
    video.pixels[loc2 + i] = temp;
  }
}
