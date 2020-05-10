"use strict";
var _a;
var e1 = {
    name: 'Jon',
    priviledges: ['god'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result1 = add(1, 5);
var result2 = add('Jon', 'Hall');
var fetchedUserData = {
    id: 'u1',
    name: 'Jon',
    job: { title: 'CEO', description: 'Boi' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
var userInput = null;
var storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    if ('priviledges' in emp) {
        console.log('Priviledges: ' + emp.priviledges);
    }
    if ('startDate' in emp) {
        console.log('Priviledges: ' + emp.startDate);
    }
}
printEmployeeInformation({ name: 'Jon', startDate: new Date() });
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving...');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Dirving a truck...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('Loading cargo...' + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving with speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
var paragraph = document.getElementById('message-output');
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
var userInputElement = document.getElementById('user-input');
if (userInputElement) {
    userInputElement.value = 'Hi there!';
}
var errorBag = {
    email: 'Not a valid email.',
    username: 'Must start with a captial character!'
};
