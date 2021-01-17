/**
 * Copyright (c) 2021
 *
 * The Truck.js is a subclass for Vehicles.java file.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 * Version 1.0
 * Created on : 2021/01/17
 */
 
// Importing the class WajdStack from another file
const Vehicles = require("./Vehicles.js");

class Truck extends Vehicles {
  // Constructors that define Bike subclass.
  constructor(colorTruck) {
    super(colorTruck);
    this.color = colorTruck;
    this.licensePlateNumber = "";
    this.tireNumber = 4;
  }
  
  // Setting license plate number Method
  licensePlateSetter(licensePlate) {
    this.licensePlateNumber = licensePlate;
  }
  
  // License plate getter.
  licensePlateGetter() {
    return this.licensePlateNumber;
  }
  
  // Method to calculate cadence
  provideAir() {
    return "HONK HONK";
  }
  
  // Method returning the number of tires:
  truckTires() {
    return `Your truck got ${this.tireNumber} tires.`;
  }
}
  
// Exporting the class
module.exports = Truck;