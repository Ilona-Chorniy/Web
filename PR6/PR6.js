class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("Квадрат - це чотирикутни, у якого всі сторони рівні та кути прямі.");
    }

    length() {
        console.log("Сума довжин сторін квадрата:", 4 * this.a);
    }

    square() {
        console.log("Площа квадрата:", this.a * this.a);
    }

    info() {
        console.log("Характеристика квадрата:");
        console.log("Довжина сторони:", this.a);
        console.log("Сума довжин сторін:", 4 * this.a);
        console.log("Площа:", this.a * this.a);
    }
}

class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log("Прямокутник - це чотирикутик, усі кути якого прямі, протилежні сторони рівні.");
    }

    length() {
        console.log("Сума довжин сторін прямокутника:", 2 * (this.a + this.b));
    }

    square() {
        console.log("Площа прямокутника:", this.a * this.b);
    }

    info() {
        console.log("Характеристика прямокутника:");
        console.log("Довжина сторони a:", this.a);
        console.log("Довжина сторони b:", this.b);
        console.log("Сума довжин сторін:", 2 * (this.a + this.b));
        console.log("Площа:", this.a * this.b);
    }
}

class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("Ромб - це геометрична фігура з чотирма однаковими сторонами, кутами, та паралельними протилежними сторонами.");
    }

    length() {
        console.log("Сума довжин сторін ромба:", 4 * this.a);
    }

    square() {
        console.log("Площа ромба:", this.a * this.a * Math.sin(this.alpha * Math.PI / 180));
    }

    info() {
        console.log("Характеристика ромба:");
        console.log("Довжина сторони:", this.a);
        console.log("Тупий кут alpha:", this.alpha);
        console.log("Гострий кут beta:", this.beta);
        console.log("Сума довжин сторін:", 4 * this.a);
        console.log("Площа:", this.a * this.a * Math.sin(this.alpha * Math.PI / 180));
    }
}

class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this._alpha = alpha;
        this._beta = beta;
    }

    static help() {
        console.log("Паралелограм - це чотирикутник, протилежні сторони якого попарно паралельні..");
    }

    length() {
        console.log("Сума довжин сторін паралелограма:", 2 * (this.a + this.b));
    }

    square() {
        console.log("Площа паралелограма:", this.a * Math.sin(this.alpha * Math.PI / 180) * this.b);
    }

    info() {
        console.log("Характеристика паралелограма:");
        console.log("Довжина сторони a:", this.a);
        console.log("Довжина сторони b:", this.b);
        console.log("Тупий кут alpha:", this.alpha);
        console.log("Гострий кут beta:", this.beta);
        console.log("Сума довжин сторін:", 2 * (this.a + this.b));
        console.log("Площа:", this.a * Math.sin(this.alpha * Math.PI / 180) * this.b);
    }

    get alpha() {
        return this._alpha;
    }

    set alpha(value) {
        if (value >= 0 && value <= 180) {
            this._alpha = value;
        } else {
            console.log("Кут повинен бути від 0 до 180 градусів");
        }
    }

    get beta() {
        return this._beta;
    }

    set beta(value) {
        if (value >= 0 && value <= 180) {
            this._beta = value;
        } else {
            console.log("Кут повинен бути від 0 до 180 градусів");
        }
    }
}

Square.help();
const square1 = new Square(5);
square1.info();

Rectangle.help();
const rectangle1 = new Rectangle(4, 6);
rectangle1.info();

Rhombus.help();
const rhombus1 = new Rhombus(5, 60, 120);
rhombus1.info();

Parallelogram.help();
const parallelogram1 = new Parallelogram(4, 6, 60, 120);
parallelogram1.info();
``
