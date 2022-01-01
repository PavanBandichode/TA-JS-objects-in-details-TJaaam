class Square {
  constructor(side, width, height) {
    this.width = side;
    this.height = side;
  }
  description() {
    return `The square is ${this.width} x ${this.height}`;
  }
  calcArea() {
    return `area = ${this.width} * ${this.height}`;
  }
  set area(){
    return `area = ${this.width} * ${this.height}`;
  }
  get area(num1) {
    return `area = ${this.width} * ${this.height}`;
  }
}
