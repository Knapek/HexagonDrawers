var asd = 0;
class Hexagon
{
    createName(){
        asd++;
        return `canvas${asd}`;
    }
    addHexagon(_color) {

        var name = this.createName();
        
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

        canvas.fillStyle = _color;
        canvas.fill();
    } 
}

class HexagonFactory 
{
    static createHexagon(_color) {
        
         return new Hexagon().addHexagon(_color);      
    }
}

var pierwszy = HexagonFactory.createHexagon('blue');
var drugi = HexagonFactory.createHexagon('red');
var trzeci = HexagonFactory.createHexagon('green');




