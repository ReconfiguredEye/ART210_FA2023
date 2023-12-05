let video;
let targetColor;
let fish;

//Variables for smoothing
let smoothedX = 0;
let smoothedY = 0;

let easing = 0.05; //easing factor

function preload(){
  fish = loadImage('data/fish.png');
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  
  targetColor = [255, 0, 0];
}


function draw() {
  image(video, 0, 0);

  
  let avgX = 0;
  let avgY = 0;
  let count = 0;
  
  video.loadPixels();
  
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      const index = (x + y * video.width) * 4;
      let r = video.pixels[index + 0];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      
      let d = dist(r, g, b, red(targetColor), green(targetColor), blue(targetColor));
      if (d < 50){
        //worldRecord = d;
        avgX += x;
        avgY += y;
        count++;
      }
    }
  }
  
  if (count > 0) {
    avgX = avgX / count;
    avgY = avgY / count;
    
    smoothedX += (avgX - smoothedX) * easing;
    smoothedY += (avgY - smoothedY) * easing;
    image(fish, smoothedX, smoothedY, 100, 60);
  }
}

function mousePressed(){
  targetColor = video.get(mouseX, mouseY);
  console.log("Target Color: ", targetColor);
}
