var uniqueIdForCanvasName = 0; // unique variable used by function createName(); 
class Hexagon
{
    static createName() //function that create unique name for canvas element wit help of variable 'uniqueIdForCanvasElement' ans returns it
    {  
        uniqueIdForCanvasName++;
        return `canvas${uniqueIdForCanvasName}`;
    }
    addHexagon(name)  // function that draws hexagon element 
    {
        var name = name;

        var canvas = document.querySelector(`#${name}`).getContext('2d'),
        side = 0,
        size = 100,
        x = 100,
        y = 100;

        canvas.beginPath();
        canvas.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

        for (side; side < 7; side++) {
        canvas.lineTo(x + size * Math.cos(side * 2 * Math.PI / 6), y + size * Math.sin(side * 2 * Math.PI / 6));
        }

        canvas.fillStyle = "#0af402";
        canvas.fill();
        canvas.stroke();
    } 
}




$(document).ready(function()
{
    var primary = new Hexagon().addHexagon('canvas0');

    $('#button').click(function() 
    {
        var name = Hexagon.createName();
        // $(`<canvas id='${name}' width="200" height="200"></canvas>`).appendTo('body');
        var name = new Hexagon().addHexagon(name);
    });

    var idOfClickedCanvas;                              // Global variable keeps id of current clicked hexagon. signed by click listener of canvas elements.
    $('canvas').click(function siema(event)             // Event Listener attached to all canvas elements. 
    {    
        idOfClickedCanvas = event.target.id;            // id of canvas element that were just clicked 
        console.log(idOfClickedCanvas);   
        
    });

    $('.buttonAddHexagonInToggleMenu').click(function(e) {    
        console.log(idOfClickedCanvas);
    });

  
  
    
});


