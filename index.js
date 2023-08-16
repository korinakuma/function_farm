var descriptionElement = document.getElementById('description'); 
var puzzleButtonHolder = document.getElementById('puzzle-buttons'); 
var displayCanvas = document.getElementById('display-canvas');


var puzzleMap = {
    puzzle_01,
    puzzle_02,

};

var activatePuzzleByName = function(name) {
    var currentPuzzle = puzzleMap[name];
    if (!currentPuzzle) {
        throw new Error('Invalid Puzzle Name: ' + name);
    } 
    descriptionElement.innerHTML = `
    <h2>${currentPuzzle.name}</h2>
    <p>${currentPuzzle.description}</p>
    `
    currentPuzzle.setup();
};

var handlePuzzleButtonClick = function(clickEvent) {
    var puzzleName = clickEvent.target.dataset.puzzle;
    console.log('what is puzzle name?', puzzleName);
    if (puzzleName) {
        activatePuzzleByName(puzzleName);
    }
}

puzzleButtonHolder.addEventListener('click', handlePuzzleButtonClick);

var sheepImage 
var preload = function() {
    sheepImage = loadImage('images/fluffy-sheep.png'); 
}

var setup = function() {
    createCanvas(500, 650, P2D, displayCanvas);
}
  
var draw = function() {
    background(220);
    drawSheep(0, 0);
    drawSheep(200, 300);
    drawSheep(300, 600);
    drawSheep(400, 200);
}
var sheepSize = 100;

var drawSheep = function(x, y) {
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
}