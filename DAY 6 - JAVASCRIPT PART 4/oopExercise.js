class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        throw new Error("Method not implemented.");
    }
}

class Rectangle extends Shape {
    displayFormula() {
        console.log("Formula to get area of a rectangle: 'area = width * height'.");
    }

    calculateArea() {
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(4, 5);
rectangle.displayFormula();
console.log("Area of the rectangle: ", rectangle.calculateArea());

