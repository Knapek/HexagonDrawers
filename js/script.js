var asd = 0;
class Hexagon
{
    static createName(){
        asd++;
        return `canvas${asd}`;
    }
    addHexagon(name) {

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

        return name;
    } 
}




$(document).ready(function(){

    var primary = new Hexagon().addHexagon('canvas0');
    var primary = new Hexagon().addHexagon('canvas1');
    var primary = new Hexagon().addHexagon('canvas2');
    $('#button').click(function() {
        var name = Hexagon.createName();
        $(`<canvas id='${name}' width="200" height="200"></canvas>`).appendTo('body');
        var name = new Hexagon().addHexagon(name);
    });


});


