var descriptionElement = document.getElementById('description'); 
var puzzleButtonHolder = document.getElementById('puzzle-buttons'); 
var displayCanvas = document.getElementById('display-canvas');
var solutionForm = document.getElementById('solution-form');


var puzzleMap = {
    puzzle_01,
    puzzle_02,

};

var currentPuzzle;

var activatePuzzleByName = function(name) {
    currentPuzzle = puzzleMap[name];
    if (!currentPuzzle) {
        throw new Error('Invalid Puzzle Name: ' + name);
    } 
    descriptionElement.innerHTML = `
    <h2>${currentPuzzle.name}</h2>
    <p>${currentPuzzle.description}</p>
    `
    currentPuzzle.setup();
};

activatePuzzleByName('puzzle_01');

var handlePuzzleButtonClick = function(clickEvent) {
    var puzzleName = clickEvent.target.dataset.puzzle;
    console.log('what is puzzle name?', puzzleName);
    if (puzzleName) {
        activatePuzzleByName(puzzleName);
    }
}
puzzleButtonHolder.addEventListener('click', handlePuzzleButtonClick);


var handleFormSubmit = function(formSubmitEvent) {
    // console.log('what is form submit event?', formSubmitEvent);
    formSubmitEvent.preventDefault();
}

solutionForm.addEventListener('submit', handleFormSubmit);

var sheepImage 
var preload = function() {
    sheepImage = loadImage('images/fluffy-sheep.png'); 
}

var setup = function() {
    createCanvas(500, 650, P2D, displayCanvas);
}
  
var tick = 0;
var sheepSize = 100;

// how we made them move 
var draw = function() {
   if (currentPuzzle) {
    currentPuzzle.draw();
   }
}

var drawCheck = function(x, y) {
    push();
    translate(x, y);
    stroke('#090');
    strokeWeight(5);
    beginShape(LINES);
    vertex(-20, 0);
    vertex(0, 15);
    vertex(0, 15);
    vertex(30, -40);
    endShape();
    pop();
}
var drawCross = function(x, y) {
    var size = 20;
    push();
    translate(x, y);
    stroke('#900');
    strokeWeight(5);
    beginShape(LINES);
    vertex(-size, -size);
    vertex(size, size);
    vertex(size, -size);
    vertex(-size, size);
    endShape();
    pop();
}

var drawSheep = function(x, y, name, isGood) {
    image(
        sheepImage, // Image to draw
        x - (sheepSize / 2), // position in destination canvas
        y - (sheepSize / 2), // position in destination canvas
        sheepSize, // destination width
        sheepSize, //destination height
        0, // source top left corner
        0, // source top left corner
        sheepImage.width, //source width
        sheepImage.height// source height
    )
    if (isGood) {
        drawCheck(x, y);
    } else {
        drawCross(x, y);
    } 
    textSize(16);
    noStroke();
    fill('black');
    text(name, x -(sheepSize/2), y - (sheepSize/3))
    
}

var drawPen = function(pen) {
    stroke('#593018');
    strokeWeight(20);
    noFill();
    rect(pen.x, pen.y, pen.width, pen.height, 15);
}

var isPointInsideRect = function (point, rect) {
    // A point is an object that has x and y properties
    // A rect has x, y, width, and height properties
    var isPointInsideX = (
        point.x >= rect.x // is the point right of the left edge of the rectangle
        && point.x <= (rect.x + rect.width) // is the point left of the right edge of the rectangle 
    );

    var isPointInsideY = (
        point.y >= rect.y // is the point below of the top edge of the rectangle
        && point.y <= (rect.y + rect.height) // is the point above of the bottom edge of the rectangle 
    );

    return isPointInsideX && isPointInsideY
}