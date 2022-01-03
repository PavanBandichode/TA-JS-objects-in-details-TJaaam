/*animal*/

//Pseudoclassical Pattern

function Animal(location, numberOfLegs) {
  this.location = location;
  this.numberOfLegs = numberOfLegs;
  Animal.prototype = {
    eat: function () {
      console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation: function (newLocation) {
      this.location = newLocation;
      return this.location;
    },
    summary: function () {
      return `I live in ${this.location} and I have ${this.numberOfLegs}`;
    },
  };
}

// Class Pattern

class Animal {
  constructor(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
  }

  function() {
    console.log(`I live in ${this.location} and I can eat`);
  }
  changeLocation(newLocation) {
    this.location = newLocation;
    return this.location;
  }
  summary() {
    return `I live in ${this.location} and I have ${this.numberOfLegs}`;
  }
}

/*dog*/

//Pseudoclassical Pattern

function Dog(location, numberOfLegs, name, color) {
  this.location = location;
  this.numberOfLegs = numberOfLegs;
  Animal.prototype = {
    eat: function () {
      console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation: function (newLocation) {
      this.location = newLocation;
      return this.location;
    },
    summary: function () {
      return `I live in ${this.location} and I have ${this.numberOfLegs}`;
    },
  };
}
