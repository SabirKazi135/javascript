class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  set width(newWidth) {
    if (
      typeof newWidth == "number" &&
      newWidth > 0 &&
      newWidth != NaN &&
      newWidth != Infinity
    ) {
      this._width = newWidth;
    } else {
      console.error("Width must be a potive number");
    }
  }
  set height(newHeight) {
    if (
      typeof newHeight == "number" &&
      newHeight > 0 &&
      newHeight != NaN &&
      newHeight != Infinity
    ) {
      this._height = newHeight;
    } else {
      console.error("Height must be a potive number");
    }
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  get area() {
    return this._height * this.width;
  }
}

const rect1 = new Rectangle(5, 10);
console.log(rect1.width);
console.log(rect1.height);
console.log(rect1.area);
