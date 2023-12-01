let redeemable = ['Character A', 'Character B', 'Character C', 'Character G', 'Character X'];
let unredeemable = ['Character D', 'Character E', 'Character F', 'Character M', 'Character 4'];
let allCharacters = shuffle(redeemable.concat(unredeemable)); // Combine and shuffle characters
let currentCharacter;
let score = 0;
let decisionsMade = 0;
let progressBarWidth;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  textSize(32);
  progressBarWidth = width / 2;
  currentCharacter = allCharacters.pop(); // Get the first character
}

function draw() {
  background(220);
  displayProgressBar();
  text(`Decide: Forgive ${currentCharacter}?`, width / 2, height / 2 - 50);
  text(`Decisions: ${decisionsMade}/10`, width / 2, 350);

  checkGameStatus();
}

function displayProgressBar() {
  let progress = map(score, -4, 4, 0, progressBarWidth); // Map score to progress bar width
  fill(100);
  rect(width / 4, height / 2 - 10, progressBarWidth, 20); // Draw the background of the progress bar
  fill(0, 255, 0);
  rect(width / 4, height / 2 - 10, progress, 20); // Draw the progress on the bar
}

function keyPressed() {
  if (decisionsMade < 10 && currentCharacter) {
    let decision = key === 'F'; // True for forgiving, false for not forgiving
    updateScore(decision, currentCharacter);
    currentCharacter = allCharacters.pop(); // Get the next character
    decisionsMade++;
  }
}

function updateScore(decision, character) {
  let correctDecision = (redeemable.includes(character) && decision) || (unredeemable.includes(character) && !decision);
  score += correctDecision ? 1 : -1;
  score = constrain(score, -4, 4); // Keep score within -4 to 4
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

// Utility function to shuffle an array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
