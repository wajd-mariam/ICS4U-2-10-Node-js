/**
 * Copyright (c) 2021
 *
 * The Bike.js is a subclass for Vehicles.java file.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 * Version 1.0
 * Created on : 2021/01/17
 */

// Importing the class WajdStack from another file
const Vehicles = require("./Vehicles.js");

class Bike extends Vehicles {
  // Constructors that define Bike subclass.
  constructor(colorBike) {
    super(colorBike);
    this.color = colorBike;
    this.cadence = 0;
    this.tireNumber = 2;
  }
  
  // Method to calculate cadence
  cadenceGetter() {
    this.cadence = super.getSpeed() * 8 ;
    return this.cadence;
  }
  
  // Method to calculate cadence
  ringBell() {
    return "RING RING";
  }
  
  // Method returning the number of tires:
  bikeTires() {
    return `Your bike got ${this.tireNumber} tires.`;
  }
}
  
// Exporting the class
module.exports = Bike;
