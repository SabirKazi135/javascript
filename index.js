class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.log("Width Must be a positive number");
    }
  }
  set height(newHeight) {
    if (newHeight > 0) {
      this._Height = newHeight;
    } else {
      console.log("Height Must be a positive number");
    }
  }

  get width() {
    return `${this._width.toFixed(1)}`;
  }
  get height() {
    return `${this._Height.toFixed(1)}`;
  }

  get area() {
    return `${(this._width * this._Height).toFixed(1)}cm^2`;
  }
}

const rectangle = new Rectangle(3, 3);
console.log(rectangle.height);
console.log(rectangle.width);

console.log(rectangle.area);
