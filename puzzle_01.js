var puzzle01Sheep = [];

var puzzle01Pen = {
    x : 10,
    y : 10,
    width : 250,
    height : 250,
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
        puzzle01Sheep = [
            {
                name : 'newman',
                x : 60,
                y : 150
            },
            {
                name : 'elaine',
                x : 200,
                y : 150
            },
            {
                name : 'george',
                x : 150,
                y : 300
            },
            {
                name : 'jerry',
                x : 250,
                y : 250
            },
            {
                name : 'kramer',
                x : 60,
                y : 300
            },
        ]
    },    
    
    draw : function() {
        var phase = tick*Math.PI/180;
        var wiggleX = Math.cos(phase)*(sheepSize/4);
        var wiggleY = Math.abs(Math.sin(phase*5))*(-sheepSize/4);
        // background(220);
        clear();
        
        drawPen(puzzle01Pen);
        puzzle01Sheep.forEach(function(currentSheep){
            var isSheepInPen = isPointInsideRect(currentSheep, puzzle01Pen)
            drawSheep(
                currentSheep.x + wiggleX,
                currentSheep.y + wiggleY,
                currentSheep.name,
                isSheepInPen
            )
        })

        tick += 1;
    }
    // TO DO: Determine whether the sheep are actually inside the pen, 
    // build a success testing function :D 
};