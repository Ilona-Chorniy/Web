//1.2.3
let arr1 = [
    1,
    5,
    9,
    4,
    {
        name: "Ilona",
        mark: 2.5,
        subject: "JS"
    },
    function(num) {
        return num ** 4;
    },
    function(obj) {
        console.log(obj.name);
    },
    -6,
    14
];

//1.2.4
arr1.forEach(function(element) {
    console.log(element);
});

//1.2.5
arr1.splice(arr1.indexOf(5), 1, 8);

//1.2.6
let index = arr1.indexOf(9);

arr1.splice(index + 1, 0, "Hello");
//1.2.7

let arr2 = arr1.slice(arr1.findIndex(item => typeof item === 'function'));

//1.2.8
arr2.forEach(function(element) {
    console.log(element);
});
//1.2.9
let arr3 = arr1.slice(0, 3);

//1.2.10
arr3.forEach(function(element) {
    console.log(element);
});

//1.2.11
let arr3Reversed = arr3.slice().reverse();

//1.2.12
arr3Reversed.forEach(function(element) {
    console.log(element);
});

//1.2.13
let indexOfMinusSix = arr1.indexOf(-6);
console.log("Індекс числа -6 у масиві arr1:", indexOfMinusSix);

//1.2.14
let filteredNumbers = arr1.filter(function(element) {
    return typeof element === 'number' && element > 4;
});

//1.2.15
let functionToCall = arr1.find(function(element) {
    return typeof element === 'function' && element.length === 1; // перевіряємо, чи є це функція з одним аргументом
});

let objectToUse = arr1.find(function(element) {
    return typeof element === 'object';
});

//1.2.16
console.log(arr1[6](-6));

//1.2.17
for (let index in arr1) {
    console.log(arr1[index]);
}

//1.2.18
for (const key in arr1[5]) {
    console.log(arr1[5][key]);
}

//1.2.19
for (let element of arr1) {
    console.log(element);
}
//1.2.20
arr1.version = "1.0.0";

//1.2.21
for (let key in arr1) {
    console.log(arr1[key]);
}

//1.2.22
for (let element of arr1) {
    console.log(element);
}

//1.2.23
let Petryk = {
    name: "Petryk",
    skill: "JS",
    level: "junior"
};

let Mychajlyk = {
    name: "Mychajlyk",
    skill: "HTML/CSS",
    level: "middle"
};

let Volodyk = {
    name: "Volodyk",
    skill: "TS",
    level: "trainee"
};

//1.2.24
let map1 = new Map();

map1.set(Petryk.name, Petryk);
map1.set(Mychajlyk.name, Mychajlyk);
map1.set(Volodyk.name, Volodyk);

console.log(map1);

//1.2.25
console.log(map1.has("Ivanko"));

//1.2.26
console.log(map1.has("Volodyk"));

//1.2.27
for (let key of map1.keys()) {
    console.log(key);
}

//1.2.28
map1.delete("Mychajlyk");

//1.2.29
for (let [name, obj] of map1) {
    console.log(`${name} is ${obj.level} in ${obj.skill}`);
}

//1.2.30
let set1 = new Set();
set1.add(Petryk);
set1.add(Mychajlyk);
set1.add(Volodyk);

//1.2.31
let Antypko = {
    name: "Antypko",
    skill: "PHP",
    level: "senior"
};

//1.2.32
console.log(set1.has(Antypko));

//1.2.33
console.log(set1.has(Mychajlyk));

//1.2.34
for (let item of set1.values()) {
    console.log(item);
}

//1.2.35
set1.delete(Volodyk);

//1.2.26
for (let item of set1) {
    console.log(`${item.name} is ${item.level} in ${item.skill}`);
}

