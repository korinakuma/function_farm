var sheep = [];

var pen = {
    x : 10,
    y : 10,
    width : 50,
    height : 40,
}

var puzzle_01 = {
    name : 'Puzzle One',
    description : 'Some of the sheep have escaped their pens! We have a function called `move_all_sheep` which takes two arguments: x and y, and moves all sheep by those thingies. Make sure that all sheep are in their pens, and that you haven\'t moved any sheep that were in the pen, out of the pen.',
    userAccessibleFunctions : {
        move_all_sheep : function(x, y) {
            for (let i = 0; i < sheep.length; i++) {
                const currentSheep = sheep[i];
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
    
}