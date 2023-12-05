let video;
let targetColor;
let fish;
let fishHome;
let fishVisible = true;

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
  
  fishHome = { x: width -100, y: height - 100, w: 50, h: 50 };
}


function draw() {
  image(video, 0, 0);
  
  if (fishVisible) {
    updateFishPosition();
    
    if (smoothedX >= fishHome.x && smoothedX <= fishHome.x + fishHome.w && smoothedY >= fishHome.y && smoothedY <= fishHome.y + fishHome.h){
      fishVisible = false;
    }
    
    if(fishVisible) {
      image(fish, smoothedX, smoothedY, 100, 60);
    }
  }

  noFill();
  stroke(0, 255, 0);
  strokeWeight(3);
  rect(fishHome.x, fishHome.y, fishHome.w, fishHome.h);

}

function updateFishPosition() {
  let avgX = 0;
  let avgY = 0;
  let count = 0;
  
  video.loadPixels();
  for (let y = 0; y < video.height; y++){
    for (let x = 0; x < video.width; x++){
      const index = (x + y * video.width) * 4;
      let r = video.pixels[index + 0];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      
      let d = dist(r, g, b, red(targetColor), green(targetColor), blue(targetColor));
      if (d < 50) {
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
  }
  
}

function mousePressed(){ 
  if(!fishVisible) {
    fishVisible = true;
    smoothedX = mouseX;
    smoothedY = mouseY;
    targetColor = video.get(mouseX, mouseY);
  } else {
    targetColor = video.get(mouseX, mouseY);
  }
}
