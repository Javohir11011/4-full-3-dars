// // #### Task 1: Shape interfeysini yaratish va undan Circle va Rectangle classlarini yaratish

// // 1. **Shape interfeysini yaratish:**

// //    - `Shape` nomli interfeys yarating.
// //    - Ushbu interfeysda `accountArea` metodi bo'lsin.


// interface Shape1 {
//     accountArea():void 
// }

// const Qoy1 : Shape1 = {
//     accountArea(){
//         console.log("Hello!!!");
//     }
// }
// Qoy.accountArea()



// // 2. **Circle classini yaratish:**

// //    - `Shape` interfeysini amalga oshiruvchi (`implements`) `Circle` classini yarating.
// //    - `Circle` classida radius xususiyati bo'lsin.
// //    - `accountArea` metodini `Circle` classida amalga oshiring.


// interface IShape2 {
//     radius : number
//     accountArea() : number
// }

// class Circle implements IShape2 {
//     radius: number = 2
//     accountArea(): number {
//         return this.radius
//     }
// }

// const circle = new Circle()
// console.log(circle.accountArea());



// // 3. **Rectangle classini yaratish:**
// //    - `Shape` interfeysini amalga oshiruvchi (`implements`) `Rectangle` classini yarating.
// //    - `Rectangle` classida kenglik (`width`) va balandlik (`height`) xususiyatlari bo'lsin.
// //    - `accountArea` metodini `Rectangle` classida amalga oshiring.

// interface IShape3 {
//     width : number
//     height : number
//     accountArea() : number
// }

// class Rectangle implements IShape3 {
//     width: number = 2
//     height: number = 4
//     accountArea(): number {
//         return this.width * this.height
//     }
// }


// const rectangle = new Rectangle()
// console.log(rectangle.accountArea());
