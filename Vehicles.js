/**
 * The Vehicles.js is a superclass in the Main.js Program.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 * Version 1.0
 * Created on : 2021/01/17
 */
 
class Vehicles {
    
  // Constructors that defines stack array
  constructor(colorInput) {
    // Ensuring that the Vehicle class is abstract
    if (this.constructor === Vehicles) {
      throw "ERROR: Abstract class 'Vehicle' cannot be instantiated";
    } else {
      this.color = colorInput;
      this.speed = 0;
      this.maxSpeed = 120;
    }
  }
  
  // Setter for color.
  colorSetter(userColor) {
    this.color = userColor;
  }
  
  // Getter for color.
  colorGetter() {
    return this.color;
  }
  
  // Getter for the vehicle speed
  getSpeed() {
    return parseInt(this.speed, 10);
  }

  // Method that calculates the car speed while accelerating.
  accelerationCalculation(speedIncrease) {
    // converting all variables from strings to integers.
    this.maxSpeed = parseInt(this.maxSpeed, 10);
    this.speed = parseInt(this.speed, 10);
    speedIncrease = parseInt(speedIncrease, 10);
    // Proceeding
    if ((this.speed + speedIncrease) > this.maxSpeed) {
      throw null;
    } else {
      this.speed = this.speed + speedIncrease;
    }
    return this.speed;
  }
  
  // Method that calculates the car speed while deceleration.
  decreaseCalculation(speedDecrease) {
    // converting all variables from strings to integers.
    this.speed = parseInt(this.speed, 10);
    speedDecrease = parseInt(speedDecrease, 10);
    // Proceeding
    if ((this.speed - speedDecrease) < 0) {
      throw null;
    } else {
      this.speed = this.speed - speedDecrease;
    }
    return this.speed;
  }
}

// Exporting the class
module.exports = Vehicles;
