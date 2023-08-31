let img;

function preload(){
  img = loadImage('stadia_II_crop.jpg');
}

function setup() {
  createCanvas(800, 630);
  image(img, 0, 0);
}


function draw() {

}

function mouseClicked() {
  if (mouseX < img.width && mouseY < img.height){
    console.log(`x: ${mouseX}, y: ${mouseY}`);
  }
}
