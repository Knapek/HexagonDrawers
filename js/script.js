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
    var idOfClickedCanvas;  // Global variable keeps id of current clicked hexagon. signed by click listener of canvas elements.
    $('#button').click(function(event) 
    {   
        event.preventDefault();
        
        /**
         * Craete array name: , value:  , to get access to value which is numer of hexagon position
         * #pickHexagonPlace is input type humber where user can decide which hexagon will be created.
         */
        const absoulteIdArray = $('#pickHexagonPlace').serializeArray(); 

        /**
         *    variable absoluteId will define which div class will be used. example. 
         *    'absolute2'. This class determines which hexagon will be created
         *                   ____1____
         *                  /         \
         *               6 /           \ 2
         *                /             \
         *                \             /
         *               5 \           / 3
         *                  \_________/
         *                       4 
         */
        const absoluteId = absoulteIdArray[0].value; // choosen position of hexagon transfer to div class name.

        if(absoluteId){    //if 
            const name = Hexagon.createName();

            $(`<div class="absolute${absoluteId}">
            <canvas  width="200" height="200" id="${name}" ></canvas>
            </div>`).appendTo('div.primary');
       
            var hex = new Hexagon().addHexagon(name);
        }else{
            alert('Podaj pozycje hexagonu!');
        }
    });

                           
    $('canvas').click(function siema(event)             // Event Listener attached to all canvas elements. 
    {   
        idOfClickedCanvas = event.target.id;            // id of canvas element that were just clicked 
        console.log(idOfClickedCanvas);   
        console.log($('#pickHexagonPlace').valueAsNumber);
        return
    });

    $('.buttonAddHexagonInToggleMenu').click(function(e) {    
        console.log(idOfClickedCanvas);
        var className = $(`#${idOfClickedCanvas}`).parent().attr('class').replace(/ show/,'');  //get Parent class name, needed to append dew hexagon. 
        console.log(className);
    });

});


