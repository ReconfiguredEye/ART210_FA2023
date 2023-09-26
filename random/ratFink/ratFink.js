let rat;

function preload() {
  rat = loadImage('data/rat.png');
}

function setup() {
  createCanvas(800, 600);
}


function draw() {

}

function mousePressed(){
  let x = random(0, width - rat.width/2);
  let y = random(0, height);
  image(rat, x, y);
}
