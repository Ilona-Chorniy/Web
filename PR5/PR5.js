
car1 = new Object();

car1.color = "black"; 
car1.maxSpeed = 190; 
car1.driver = {
   name: "Chorniy Ilona ",
   category: "C",
   personalLimitations: "No driving at night"
};
car1.tuning = true;
car1.numberOfAccidents = 0;

console.log(car1);


 car2 = {
    color: "red", 
    maxSpeed: 220, 
    driver: 
    {
        name: "Chorniy Ilona ",
        category: "B",
        personalLimitations: null,
    },
    tuning: false,
    numberOfAccidents: 2
};

console.log(car2);

car1.drive = function() {
    console.log("I am not driving at night");
};


car1.drive();


car2.drive = function() {
    console.log("I can drive anytime");
};


car2.drive();

function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color; 
    this.weight = weight; 
    this.avgSpeed = avgSpeed; 
    this.brand = brand; 
    this.model = model; 

}

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

Truck.prototype.trip = function () {
	if (!this.driver) {
		console.log("No driver assigned");
		return;
	}

	console.log("Driver", this.driver.name);


	if (this.driver.nightDriving) {
		console.log("drives at night"); 
	} else {
		console.log("does not drive at night");
	}
	console.log("and has " + this.driver.experience + " years of experience.");

};


var truck1 = new Truck("red", 7000, 150, "Volvo", "VNL");
var truck2 = new Truck("blue", 5000, 80, "Mercedes", "Actros");


truck1.AssignDriver("ilona", true, 5); 
truck2.AssignDriver("ilona", false, 3); 

console.log("Trip for truck1:");
truck1.trip();
console.log("Trip for truck2:");
truck2.trip();

