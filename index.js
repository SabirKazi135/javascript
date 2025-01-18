class Rectangle {
  constructor(width = 1, height = 1) {
    // Initialize with default values if not provided
    this.width = width;
    this.height = height;
  }

  // Setter for width with validation
  set width(newWidth) {
    if (
      typeof newWidth === "number" &&
      newWidth > 0 &&
      !isNaN(newWidth) &&
      newWidth !== Infinity
    ) {
      this._width = newWidth;
    } else {
      throw new Error("Width must be a positive number.");
    }
  }

  // Setter for height with validation
  set height(newHeight) {
    if (
      typeof newHeight === "number" &&
      newHeight > 0 &&
      !isNaN(newHeight) &&
      newHeight !== Infinity
    ) {
      this._height = newHeight;
    } else {
      throw new Error("Height must be a positive number.");
    }
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Getter for area
  get area() {
    return this._width * this._height;
  }

  // Getter for perimeter
  get perimeter() {
    return 2 * (this._width + this._height);
  }

  // Method to resize the rectangle
  resize(newWidth, newHeight) {
    this.width = newWidth; // Validates new width
    this.height = newHeight; // Validates new height
  }

  // Method to display the rectangle's details
  displayDetails() {
    return `Rectangle:
    Width: ${this.width}
    Height: ${this.height}
    Area: ${this.area}
    Perimeter: ${this.perimeter}`;
  }
}

// Example Usage
try {
  const rect1 = new Rectangle(5, 10);
  console.log(rect1.displayDetails()); // Display rectangle details

  // Modify dimensions
  rect1.width = 7;
  rect1.height = 14;
  console.log(rect1.displayDetails()); // Updated details

  // Resize using the resize method
  rect1.resize(8, 16);
  console.log(rect1.displayDetails());

  // Test invalid values
  rect1.width = -5; // Throws an error
} catch (error) {
  console.error(error.message); // Handles and displays the error message
}
