//Варіант 1//

//Завдання 4.1//
 function TriangleArea(base = 5, height = 4) { 
    const area = 0.5 * base * height; 
    console.log("Площа трикутника:", area); 
    return area;
 }
    riangleArea(3, 6);
    iangleArea();
 
 
//Завдання 4.2//
function Jet(color, avgSpeed, maxAltitude, brand, destination) {
    this.color = color;
    this.avgSpeed = avgSpeed;
    this.maxAltitude = maxAltitude;
    this.brand = brand;
    this.destination = destination;
}

Jet.table = function(obj, name, yearsOfExperience, hasFamily) {
    obj.name = name;
    obj.yearsOfExperience = yearsOfExperience;
    obj.hasFamily = hasFamily;
};

var airplane = new Jet('pink', 760, 45000, 'Boeing 747', 'Ivano-Frankivsk');
Jet.table(airplane, 'Гіоргі', 5, false);

console.log("Колір літака:", airplane.color);
console.log("Середня швидкість:", airplane.avgSpeed, "км/год");
console.log("Максимальна висота:", airplane.maxAltitude, "м");
console.log("Марка:", airplane.brand);
console.log("Пункт призначення:", airplane.destination);
console.log("Ім'я капітана:", airplane.name);
console.log("Років досвіду:", airplane.yearsOfExperience);
console.log("Має сім'ю:", airplane.hasFamily);

//Завдання 5//
class Triangle {
    constructor(rivnastorona) {
        this.rivnastorona = rivnastorona;
    }

    Side() {
        return this.rivnastorona;
    }
}

class IsoscelesTriangle extends Triangle {
    constructor(rivnastorona, base) {
        super(rivnastorona);
        this.base = base;
    }

    static calculateArea(a, b) {
        return (b / 4) * Math.sqrt(4 * a ** 2 - b ** 2);
    }
}

const triangle = new Triangle(5);

const isoscelesTriangle = new IsoscelesTriangle(5, 6);

console.log("Властивості трикутника");
console.log("Рівна сторона:", triangle.Side());

console.log("\nВластивості рівнобедреного трикутника");
console.log("Рівна сторона:", isoscelesTriangle.Side());
console.log("база", isoscelesTriangle.base);

console.log("\nПлоща рівнобедреного трикутника:", IsoscelesTriangle.calculateArea(isoscelesTriangle.Side(), isoscelesTriangle.base));

//Завдання 6//
function funkcia(num) {
    return function(x) {
        return x + num;
    };
}

const ad = funkcia(5); 
const add = funkcia(10); 
console.log(ad(3)); 
console.log(add(7));
