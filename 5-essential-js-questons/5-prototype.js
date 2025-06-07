//5. prototype

// The prototype in JavaScript allows JavaScript objects to inherit from on another
const vehicle = {
  drive: function () {
    console.log("the car is driving");
  },
};

const car = {
  make: "Honda",
};
// The car method does not have the drive method on it, but it does have the prototype of vehicle and therefore can access the drive method.
Object.setPrototypeOf(car, vehicle);
// Object is the global object
car.drive();
