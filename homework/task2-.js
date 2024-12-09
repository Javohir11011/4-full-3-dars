"use strict";
// #### Task 2: Vehicle abstract classini yaratish va Car va MotorCycle classlarini yaratish
// 1. **Vehicle abstract classini yaratish:**
//    - `Vehicle` nomli abstract class yarating.
//    - Ushbu classda `start` va `stop` abstract metodlari bo'lsin.
class Vehicle2 {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Moto extends Vehicle2 {
    price;
    constructor(name, price) {
        super(name);
        this.price = price;
    }
    start() {
        console.log(`${this.name} running...`);
    }
    stop() {
        console.log(`${this.name} stopped...`);
    }
}
const moto = new Moto("Moto", 20000);
// moto.start()
// 2. **Car classini yaratish:**
//    - `Vehicle` classidan meros oluvchi (`extends`) `Car` classini yarating.
//    - `start` va `stop` metodlarini `Car` classida amalga oshiring.
class Vehicle3 {
    name;
    constructor(name) {
        this.name = name;
    }
    start() {
        console.log(`${this.name} running...`);
    }
    stop() {
        console.log(`${this.name} stopped...`);
    }
}
class Car extends Vehicle3 {
    price;
    constructor(name, price) {
        super(name);
        this.name = name;
        this.price = price;
    }
    start() {
        super.start();
        console.log(`${this.price} price`);
    }
    stop() {
        super.start();
        console.log(`${this.price} price`);
    }
}
const car = new Car("Merc Gls 63", 350000);
car.start();
car.stop();
// 3. **MotorCycle classini yaratish:**
//    - `Vehicle` classidan meros oluvchi (`extends`) `MotorCycle` classini yarating.
//    - `start` va `stop` metodlarini `MotorCycle` classida amalga oshiring.
class Vehicle {
    name;
    constructor(name) {
        this.name = name;
    }
    start() {
        console.log(`${this.name} runnning`);
    }
    stop() {
        console.log(`${this.name} stopped`);
    }
}
class MotorCycle extends Vehicle {
    price;
    color;
    constructor(name, price, color) {
        super(name);
        this.price = price;
        this.color = color;
    }
    start() {
        console.log(`${this.price} price, ${this.color} color`);
    }
    stop() {
        console.log(`${this.price} price, ${this.color} color`);
    }
}
const moto1 = new MotorCycle("Merc Gls 63", 350000, "black");
moto1.start();
moto1.stop();
// #### Task 3: Users classini yaratish
// 1. **Users classini yaratish:**
//    - `Users` nomli class yarating.
//    - Ushbu classda `user_list` nomli xususiy (`private`) massiv bo'lsin.
//    - Massiv ustida CRUD amallarini bajaruvchi metodlarni yarating.
const array = [];
let str = '';
class Users {
    name;
    username;
    email;
    age;
    constructor(name, username, email, age) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.age = age;
    }
    create() {
        str += "name: " + this.name + ", " + "username: " + this.username + ", " + "email: " + this.email + ", " + "age: " + this.age;
        array.push(str);
        return array;
    }
    read() {
        if (array.length != 0) {
            for (const item of array) {
                console.log(`${item},`);
            }
        }
        else {
            console.log("Arrayni length 0 ga teng...");
        }
    }
    user_list() {
        console.log(`${this.name},${this.username},${this.email},${this.age}`);
    }
}
const users = new Users("Olim", "olim_11", "olim@gmail.com", 32);
console.log(users.create());
// console.log(array);
users.read();
