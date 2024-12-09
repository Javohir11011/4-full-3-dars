"use strict";
// #### Task 1: Shape interfeysini yaratish va undan Circle va Rectangle classlarini yaratish
const Qoy = {
    accountArea() {
        console.log("Hello!!!");
    }
};
Qoy.accountArea();
class Circle {
    radius = 2;
    accountArea() {
        return this.radius;
    }
}
const circle = new Circle();
console.log(circle.accountArea());
class Rectangle {
    width = 2;
    height = 4;
    accountArea() {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle();
console.log(rectangle.accountArea());
