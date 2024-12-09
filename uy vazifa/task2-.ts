// #### Task 2: Vehicle abstract classini yaratish va Car va MotorCycle classlarini yaratish

// 1. **Vehicle abstract classini yaratish:**

//    - `Vehicle` nomli abstract class yarating.
//    - Ushbu classda `start` va `stop` abstract metodlari bo'lsin.

abstract class Vehicle2 {
    name : string
    constructor(name:string){
        this.name = name
    }
    abstract start() : void
    abstract stop() : void
}

class Moto extends Vehicle2 {
    price :number
    constructor(name : string, price : number){
        super(name)
        this.price = price
    }
    start(): void {
        console.log(`${this.name} running...`);
    }
    stop(): void {
        console.log(`${this.name} stopped...`);
    }
}

const moto = new Moto("Moto", 20000)
// moto.start()



// 2. **Car classini yaratish:**

//    - `Vehicle` classidan meros oluvchi (`extends`) `Car` classini yarating.
//    - `start` va `stop` metodlarini `Car` classida amalga oshiring.

class Vehicle3 {
    name : string
    constructor(name :string){
        this.name = name
    }
    start():void{
        console.log(`${this.name} running...`);
    }
    stop():void{
        console.log(`${this.name} stopped...`);
    }
}
class Car extends Vehicle3{
    price : number
    constructor(name : string, price :number){
        super(name)
        this.name = name
        this.price = price
    }
    start(): void {
        super.start()
        console.log(`${this.price} price`);
    }
    stop(): void {
        super.start()
        console.log(`${this.price} price`);
    }
}

const car = new Car("Merc Gls 63", 350000)
car.start()
car.stop()



// 3. **MotorCycle classini yaratish:**
//    - `Vehicle` classidan meros oluvchi (`extends`) `MotorCycle` classini yarating.
//    - `start` va `stop` metodlarini `MotorCycle` classida amalga oshiring.



class Vehicle{
    name  :string
    constructor(name: string){
        this.name = name
    }
    start():void{
        console.log(`${this.name} runnning`);
    }
    stop():void{
        console.log(`${this.name} stopped`);
    }
}

class MotorCycle extends Vehicle {
    price : number
    color : string
    constructor(name : string, price : number, color :string){
        super(name)
        this.price = price
        this.color = color
    }
    start(): void {
        console.log(`${this.price} price, ${this.color} color`);
    }
    stop():void{
        console.log(`${this.price} price, ${this.color} color`);
    }
}



const moto1 = new MotorCycle("Merc Gls 63", 350000, "black")
moto1.start()
moto1.stop()



// #### Task 3: Users classini yaratish

// 1. **Users classini yaratish:**

//    - `Users` nomli class yarating.
//    - Ushbu classda `user_list` nomli xususiy (`private`) massiv bo'lsin.
//    - Massiv ustida CRUD amallarini bajaruvchi metodlarni yarating.
const array : string[] = []
let str = ''

interface User{
    name :string
    username :string
    email :string
    age :number
}

class Users {
    name : string
    username : string
    email : string
    age : number
    constructor(name : string, username : string, email : string, age : number){
        this.name = name
        this.username = username
        this.email = email
        this.age = age
    }
    create():Array<string>{
        str += "name: " +  this.name + ", " + "username: " + this.username + ", " + "email: " +  this.email + ", " +"age: " +   this.age 
        array.push(str)
        return array
    }
    read():void{
        if (array.length != 0) {
            for (const item of array) {
                console.log(`${item},`);
            }
        }
        else{
            console.log("Arrayni length 0 ga teng...");
        }
    }
    private user_list():void{
        console.log(`${this.name},${this.username},${this.email},${this.age}`);
    }
}

const users = new Users("Olim", "olim_11", "olim@gmail.com", 32)
console.log(users.create())
users.read()





