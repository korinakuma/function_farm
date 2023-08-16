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
  
var tick = 0;
var sheepSize = 100;

// how we made them move 
var draw = function() {
    var phase = tick*Math.PI/180;
    var wiggleX = Math.cos(phase)*(sheepSize/4);
    var wiggleY = Math.sin(phase*5)*(sheepSize/4);
    background(220);
    drawSheep(100 + wiggleX, 100 + wiggleY);
    drawSheep(200 + wiggleX, 300 + wiggleY);
    drawSheep(300 + wiggleX, 600 + wiggleY);
    drawSheep(400 + wiggleX, 200 + wiggleY);
    tick += 1;
}


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