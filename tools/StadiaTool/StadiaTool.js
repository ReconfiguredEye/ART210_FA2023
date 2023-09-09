
// variable to store the image
let img;

// variable (array) to store the points
let points = [];

//load the image, be sure that the path is correct to your image
function preload(){
  img = loadImage('stadia_crop.png');
}

//setup is pretty basic at this point
function setup() {
  createCanvas(800, 630);
  image(img, 0, 0);
}

//in "draw" we will create the visual dots to represent a click on a particular location
function draw() {
  for (let point of points) {
    fill(point.r, point.g, point.b);
    stroke(255);
    strokeWeight(2);
    ellipse(point.x, point.y, 10);
  }
}

function mouseClicked() {
  if (mouseX < img.width && mouseY < img.height){
    
    //make some new variables
    let c = get(mouseX, mouseY);
    let r = red(c);
    let g = green(c);
    let b = blue(c);
    console.log(`x: ${mouseX}, y: ${mouseY}, R: ${r}, G: ${g}, B: ${b}`);
    
    //finally, as each point is clicked, we need to add those values to the array of points
    points.push({x: mouseX, y: mouseY, r: r, g: g, b: b});
  }
}
