let img;

function preload(){
  img = loadImage('data/psl.png');
}

function setup() {
  createCanvas(img.width, img.height);
  //background(220);
  
  img.resize(200, 200);
  image(img, 0, 0);
  
  let croppedImg = img.get(40, 30, 110, 150);
  image(croppedImg, 250, 0);
 
  
}
function draw() {
 
  

}
