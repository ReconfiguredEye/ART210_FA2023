let characters = [
  { 
    name: 'Character A', 
    imagePath: 'data/deadman.jpg', 
    description: 'Did something redeemable', 
    redeemable: true 
  },
  { 
    name: 'Character B', 
    imagePath: 'data/deadman2.jpg', 
    description: 'Did something unredeemable', 
    redeemable: false 
  },
  { 
    name: 'Character C', 
    imagePath: 'data/deadman3.jpg', 
    description: 'Did something unredeemable', 
    redeemable: false 
  },
  { 
    name: 'Character D', 
    imagePath: 'data/deadman4.jpg', 
    description: 'Did something redeemable', 
    redeemable: true
  },
  { 
    name: 'Character E', 
    imagePath: 'data/deadman5.jpg', 
    description: 'Did something redeemable', 
    redeemable: true 
  },
];

function preload() {
  // Preload images and store them directly in the character objects
  for (let i = 0; i < characters.length; i++) {
    characters[i].image = loadImage(characters[i].imagePath);
  }
}

characters = shuffle(characters); // Shuffle characters
let currentCharacter;
let score = 0;
let decisionsMade = 0;
let progressBarWidth;

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
  textSize(16);
  progressBarWidth = width / 2;
  characters = shuffle(characters); // Shuffle characters after images are loaded
}

function draw() {
  background(220);
  displayProgressBar();
  if (characters.length > 0) {
    displayCharacterInfo();
  }
  text(`Decisions: ${decisionsMade}/10`, width / 2, 350);

  checkGameStatus();
}

function displayCharacterInfo() {
  let currentCharacter = characters[currentCharacterIndex];
  text(`Judge: ${currentCharacter.name}`, width / 2, height / 2 - 70);
  image(currentCharacter.image, width / 2 - 50, height / 2 - 40, 100, 100); // Display the preloaded image
  text(currentCharacter.description, width / 2, height / 2 + 70, 300, 100); // Display the description
}

function keyPressed() {
  if (decisionsMade < 10 && currentCharacter) {
    let decision = key === 'F'; // Forgive with 'F', not forgive with other keys
    updateScore(decision);
    decisionsMade++;
    loadNextCharacter(); // Load next character after making a decision
  }
}

function updateScore(decision) {
  let correctDecision = (currentCharacter.redeemable && decision) || (!currentCharacter.redeemable && !decision);
  score += correctDecision ? 1 : -1;
  score = constrain(score, -4, 4);
  currentCharacter = characters.pop(); // Get the next character
  decisionsMade++;
}

function loadNextCharacter() {
  currentCharacter = characters.pop(); // Get the next character
  if (currentCharacter) {
    currentImage = loadImage(currentCharacter.image); // Load the image for the current character
  } else {
    currentImage = null; // No more characters to display
  }
}

function displayProgressBar() {
  let progress = map(score, -4, 4, 0, progressBarWidth); // Map score to progress bar width
  fill(100);
  rect(width / 4, height / 2 - 10, progressBarWidth, 20); // Draw the background of the progress bar
  fill(0, 255, 0);
  rect(width / 4, height / 2 - 10, progress, 20); // Draw the progress on the bar
}

function checkGameStatus() {
  if (score >= 4) {
    text('You Win!', width / 2, 300);
    noLoop(); // Stops the draw loop
  } else if (score <= -4) {
    text('You Lose!', width / 2, 300);
    noLoop(); // Stops the draw loop
  } else if (decisionsMade >= 10) {
    text('Game Over!', width / 2, 300);
    noLoop(); // Stops the draw loop
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
