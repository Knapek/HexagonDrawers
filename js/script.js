var uniqueIdForCanvasName = 0; // unique variable used by function createName(); 
class Hexagon
{
    //function that create unique name for canvas element wit help of variable 'uniqueIdForCanvasElement' ans returns it
    static createName() 
    {  
        uniqueIdForCanvasName++;
        return `canvas${uniqueIdForCanvasName}`;
    }

    // function that draws hexagon element 
    addHexagon(name)  
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

    // Global variable keeps id of current clicked hexagon. signed by on(mousedown) listener of canvas elements.
    var idOfClickedCanvas; 

    // Global variable keeps parent class name of current clicked hexagon. signed by on(mousedown) listener of canvas elements.
    var actualClickedParentClassName;
    $('#button').click(function(event) 
    {   
       
    });

    // Event Listener attached to all canvas elements.                       
    $(document).on('mousedown', 'canvas', function (event)  
    {   
        var lastIdOfClickedCanvas = idOfClickedCanvas;
        var lastClickedParentClassName = actualClickedParentClassName;

        //if different hexagon has been clicked comparing to hexagon clicked last time (!)
        if(!(lastIdOfClickedCanvas == event.target.id))         
        {
            idOfClickedCanvas = event.target.id; // id of canvas element that were just clicked 
            console.log(idOfClickedCanvas);             
        }

        //if different hexagon has been clicked comparing to hexagon clicked last time (!)
        if(!(lastClickedParentClassName == $(`#${idOfClickedCanvas}`).parent().attr('class').replace(/ show/,''))) 
        {
            //get Parent class name, needed to append new hexagon. 
            actualClickedParentClassName = $(`#${idOfClickedCanvas}`).parent().attr('class').replace(/ show/,'');
            console.log(actualClickedParentClassName);
        }
    });

    $(document).on('mousedown','.buttonAddHexagonInToggleMenu', function(e) {    
        

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

        if(absoluteId){    //if position has been provided in HTML input element
            const uniqueHexagonName = Hexagon.createName();

            $(`<div class="absolute${absoluteId}">
                <canvas type="button" width="200" height="200" id="${uniqueHexagonName}" title="${uniqueHexagonName}" data-container="body" 
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ></canvas>
                <div class="dropdown-menu" aria-labelledby="${uniqueHexagonName}">
                    <button class="btn btn-success buttonAddHexagonInToggleMenu" >Dodaj Hexagon</button>
                    <input type="number" id="pickHexagonPlace" name="hexagonPlace" />
                </div>
            </div>`).appendTo(`div.${actualClickedParentClassName}`);
       
            var hex = new Hexagon().addHexagon(uniqueHexagonName);
        }else{
            alert('Podaj pozycje hexagonu!');
        }
    });

});


