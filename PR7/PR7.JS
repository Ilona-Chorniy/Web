function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}
const Triangle1 = Triangular();
const Triangle2 = Triangular(6, 8, 10);
const Triangle3 = Triangular(7, 26, 25);

console.log("1", Triangle1);
console.log("2:", Triangle2);
console.log("3:", Triangle3);

function PiMultiplier(x) {
    return function() {
        return Math.PI * x;
    };
}
const multiplyBy2Pi = PiMultiplier(2);
const multiplyBy3Over2Pi = PiMultiplier(2 / 3);
const dividePiBy2 = PiMultiplier(1/2);

console.log("Result of multiplying π by 2:", multiplyBy2Pi());
console.log("Result of multiplying π by 2/3:", multiplyBy3Over2Pi());
console.log("Result of dividing π by 2:", dividePiBy2());

function Painter(color) {
    return function(obj) {
        if (obj && obj.type) {
            console.log(`Color: ${color}, Type: ${obj.type}`);
        } else {
            console.log(`Color: ${color}, No 'type' property occurred!`);
        }
    };
}

const PaintBlue = Painter('blue');
const PaintRed = Painter('red');
const PaintYellow = Painter('yellow');

const object1 = { maxSpeed: 280, type: 'Sportcar', color: 'magenta' };
const object2 = { type: 'Truck', avgSpeed: 90, loadCapacity: 2400 };
const object3 = { maxSpeed: 180, color: 'purple', isCar: true };

PaintBlue(object1); 
PaintRed(object2); 
PaintYellow(object3);
