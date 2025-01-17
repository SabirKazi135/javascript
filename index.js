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
}

const rectangle = new Rectangle(-1000000, "pizza");
console.log(rectangle.height);
console.log(rectangle.width);
