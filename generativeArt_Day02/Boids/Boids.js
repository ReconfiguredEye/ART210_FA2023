let agents = [];

function setup() {
  createCanvas(1280, 720);
  
  for (let i = 0; i < 100; i++){
    agents.push(new Agent());
  }
}


function draw() {
  background(0, 20);
  
  for (let agent of agents){
     agent.flock(agents);
     agent.update();
     agent.show();
  }
}

class Agent {
  constructor() {
    this.pos = createVector(width/2, height/2);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
  }
  
  flock(agents) {
    let align = createVector();
    let cohesion = createVector();
    let separation = createVector();
    let perception = 50;
    let total = 0;
    
    for (let other of agents){
      let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
      if (other !== this && d < perception) {
        align.add(other.vel);
        cohesion.add(other.pos);
        let diff = p5.Vector.sub(this.pos, other.pos);
        diff.div(d);
        separation.add(diff);
        total++;
      }
    }
    if (total > 0){
      align.div(total);
      align.setMag(0.1);
      
      cohesion.div(total);
      cohesion.sub(this.pos);
      cohesion.setMag(0.05);
      
      separation.div(total);
      separation.setMag(0.2);
    }
    
    this.acc.add(align);
    this.acc.add(cohesion);
    this.acc.add(separation);
  }
  
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    
    if (this.pos.x > width || this.pos.x < 0){
      this.pos.x *= -1;
    }
    if (this.pos.y > height || this.pos.y < 0){
      this.pos.y *= -1;
    }
    
    
  }
  
  show(){
    fill(255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 10);
  }
  
}
