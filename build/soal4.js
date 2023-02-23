"use strict";
class Circle {
    constructor() {
        this._radius = 10;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value / 2;
    }
}
const myCircle = new Circle();
console.log(myCircle.radius);
myCircle.radius = 20;
console.log(myCircle.radius);
