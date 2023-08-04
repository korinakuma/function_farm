var sheep = [];

var pen = {
    x : 10,
    y : 10,
    width : 50,
    height : 40,
}

var puzzle_02 = {
    name : 'Puzzle Two',
    description : 'One of the sheep is extra tricky, and you need to move only that sheep into the pen. We have a function called `move_one_sheep_by_name`, which takes a name string, and x and y parameters to move the sheep.',
    userAccessibleFunctions : {
        move_one_sheep_by_name : function(name, x, y) {
            const currentSheep = sheep.find(function(sheep) {
                return sheep.name === name
            });
            if(currentSheep) {
                currentSheep.x += x;
                currentSheep.y += y;
            }
        }
    },

    setup : function(){
        sheep = [
            {
                name : 'newman',
                x : 2,
                y : 5
            },
            {
                name : 'elaine',
                x : 7,
                y : 5
            },
            {
                name : 'george',
                x : 5,
                y : 10
            },
            {
                name : 'jerry',
                x : 9,
                y : 8
            },
            {
                name : 'kramer',
                x : 2,
                y : 7
            },
        ]
    },
    // Draw our scene, we will use p5.js and the image function to draw our pen, our sheep, and any background :) 
    // TO DO: Write the draw function 
    // TO DO: Load the p5.js library
    
}