// Classes in Javascript

class Vehicle {
  constructor(_name, _mielage,_year) {
    this.name = _name,
    this.mielage = _mielage,
    this.year = _year
  }
  getArea() {
    // console.log(this)
    return this.year * this.mielage
  }
}
const myCar1 = new Vehicle("Toyoto",3,2);

// console.log("myCar",myCar1.getArea())


// functions as Classes


class Animal {
  constructor (year,sound, color) {
    this.sound = sound,
    this.year = year,
    this.color = color
  }
  getColor () {
    return this.color;
  }
}

class Dog extends Animal {
  constructor(x,y,z) {
    super(x,y,z);
    // super(hehe);
    // console.log("COOCOCOC",this.sound, this.year, this.color)
    // console.log("window ",this.getColor())
  }
}

let a = new Dog(1,"woof", "blue");
a.color = 'red';
// console.log("color",a.getColor());
// console.log(a);

var x = function () {
    // return "sdfkjsdhfl";
}
// const x = cool();

console.dir(x)

class Company {
  constructor(name, location,zipcode,time){
    this.name = name,
    this.location = location,
    this.zipcode = zipcode,
    this.time = time
  }
    getTandL = function() {
  return this.name + this.location
}
  getZandT = function (){
  return this.zipcode + this.time
}
}
// Company.prototype.getInfo = function() {
//   return this.name + this.location
// }

var ab= new Company("EOG","Houston");
   ab.getInfo();
var b = new Company("SouthWest","Dallas");

console.log("ab",ab)
console.log("b",b)