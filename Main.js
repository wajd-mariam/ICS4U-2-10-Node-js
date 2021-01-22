/**
 * The Main.js program lets the user change truck and bike's 
 * information, and take them for a ride.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 * Version 1.0
 * Created on : 2021/01/17
 */
 
// Importing classes
const Bike = require("./Bike.js");
const Truck = require("./Truck.js");

// Imports prompt
const prompt = require('prompt-sync')({sigint: true});


// Declaring variables used:
let licensePlate = "";
let vehicleColor = "";
let userSpeed = 0;

// Try Catch Statement:
try {
  
  // Input / Process / Output

  
  // Getting truck color:
  vehicleColor = prompt(`Enter the color of your truck: `);
  
  // Initializing user's truck:
  let userTruck = new Truck(vehicleColor); 
  // Printing truck's color:
  console.log(`Your truck's color is: ${userTruck.colorGetter()}.`);
  
  // Getting bike color:
  vehicleColor = prompt(`Enter the color of your bike: `);
  
  // Initializing user's bike:
  let userBike = new Bike(vehicleColor);
  // Printing bikes's color:
  console.log(`Your bike's color is: ${userBike.colorGetter()}.`);
  
  // Setting license plate number for truck:
  console.log(``);
  console.log(`Enter your truck's license plate number`);
  licensePlate = prompt(``);
  // Setting the input:
  userTruck.licensePlateSetter(licensePlate);
  // Returning the license plate number:
  console.log(`Your truck's license plate number is ${userTruck.licensePlateGetter()}`);
  
  // Returning number of tires:
  // Truck:
  console.log(``);
  console.log(`Number of tires:`);
  console.log(userTruck.truckTires());
  // Bike
  console.log(userBike.bikeTires());
  
  // Changing speed of the truck:
  // Acceleration:
  console.log(``);
  console.log(`Go take your truck for a test ride`);
  console.log(`How fast do you want to go? in KM/H`);
  userSpeed = prompt(``);
  // Returning speed:
  console.log(`Your truck is travelling at ${userTruck.accelerationCalculation(userSpeed)} KM/H`);  
  // Deceleration:
  console.log(`There are traffic up head!`);
  console.log(`SLOW DOWN!`);
  console.log(`How much do you want to decrease your speed? in KM/H`);
  userSpeed = prompt(``);
  // Honking the air horn:
  console.log(`Honking the air horn: ` + userTruck.provideAir());
  // Returning speed:
  console.log(`Your car is travelling at ${userTruck.decreaseCalculation(userSpeed)} KM/H`); 
  
  // Changing speed of the bike:
  // Acceleration:
  console.log(``);
  console.log(`Now take your bike for a ride`);
  console.log(`How fast do you want to go? in KM/H`);
  userSpeed = prompt(``);
  // Returning speed:
  console.log(`Your bike is travelling at ${userBike.accelerationCalculation(userSpeed)} KM/H`);
  // Returning Cadence:
  console.log(`Your cadence now is: ${userBike.cadenceGetter()} RPM`);
  // Deceleration:
  console.log(`There are people up head!`);
  console.log(`SLOW DOWN!`);
  console.log(`How much do you want to decrease your speed? in KM/H`);
  userSpeed = prompt(``);
  // Honking the bell:
  console.log(`Ringing the bell: ` + userBike.ringBell());
  // Returning speed:
  console.log(`Your bike is travelling at ${userBike.decreaseCalculation(userSpeed)} KM/H`);
  // Returning Cadence:
  console.log(`Your cadence now is: ${userBike.cadenceGetter()} RPM`);  
  
// Error Catch Statement:
} catch(err) {
    console.log (`ERROR. Your vehicle isn't able to do such thing!`);
}
