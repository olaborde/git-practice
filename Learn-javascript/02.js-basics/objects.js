// Practice making objects. You need to use them a lot when you code for real. Do the following:

// Make an empty object
const cars = {}
// Make a property for your object that can be accessed with a dot notation.
cars.carModel = 'Honda'
// Make a property for your object that can only be accessed with the bracket notation.

cars.features = ['All-wheel drive', 'Remote start', 'Heated seats', 'Heated steering wheel']
cars['Tires'] = 4
// Get the value of a property with the dot notation
const val1 = cars.features
var arrayLength = cars.features.length;
console.log("These are some of the features of a car fro the winter:");
for (var i = 0; i < arrayLength; i++) {
    console.log(cars.features[i]);
    //Do something
}
console.log("The cars has",val1, "tires")
// Get the value of a property with the square bracket notation
// Set the value of a property with the dot notation
// Set the value of a property with the square bracket notation
// Make a method. Call this method
// Make a method that takes in an argument. Call this method
