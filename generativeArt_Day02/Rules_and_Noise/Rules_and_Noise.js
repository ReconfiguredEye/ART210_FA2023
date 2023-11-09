let agents = [];

function setup() {
  createCanvas(1280, 720);
  for (let i = 0; i < 20; i++){
    agents.push(new Agent());
  }
}


function draw() {
  background(0, 20);
  
  for (let agent of agents){
    agent.update();
    agent.checkNeighbors(agents);
    agent.show();
  }
}

class Agent {
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.xoff = random(1000);
    this.yoff = random(2000, 3000);
    this.color = [random(255), random(255), random(255)];
  }
  
  update(){
    this.x = map(noise(this.xoff), 0, 1, 0, width);
    this.y = map(noise(this.yoff), 0, 1, 0, height);
    this.xoff += 0.001;
    this.yoff += 0.001;
  }
  
  checkNeighbors(agents){
    for (let other of agents){
      if (other !== this){
        let d = dist(this.x, this.y, other.x, other.y);
        if (d < 50){
          this.color = [random(255), 0, 0];
          return;
        }
      }
    }
    this.color = [random(255), random(255), random(255)];
  }
  
  show(){
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, 10);
  }
}
