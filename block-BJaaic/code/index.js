//animal

let animalMethods = {
  eat: function () {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation: function (newLocation) {
    this.location = this.newLocation;
  },
  summary: function () {
    return `I live in ${this.location} and I have ${this.numberOfLegs}`;
  },
};
function animal(location, numberOfLegs) {
  let animalInfo = Object.create(animalMethods);
  animalInfo.location = location;
  animalInfo.numberOfLegs = numberOfLegs;
  return animalInfo;
}

//DOG
let dogMethods = {
  bark: function () {
    alert(`I am ${this.name} and I can bark 🐶`);
  },
  changeName: function (newName) {
    this.name = this.newName;
  },
  changeColor: function (newColor) {
    this.color = this.newColor;
  },
  summary: function () {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};
Object.setPrototypeOf(dogMethods, animalMethods);
function dog(location, numberOfLegs, name, color) {
  let dogInfo = Object.create(dogMethods);
  dogInfo.location = location;
  dogInfo.numberOfLegs = numberOfLegs;
  dogInfo.name = name;
  dogInfo.color = color;
  return dogInfo;
}

//cat
