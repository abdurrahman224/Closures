/*         Syntax in class

 class  Class_Nmae  { consteructor    {.....}     }

 */

class car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  fullCar() {
    return this.name + " " + this.year;
  }


  run (src){

console.log(this.name +" " + src)
 
  }
}

const myCar1 = new car("bmw", 2000);
const myCar2 = new car("Audi", 2013);
const myCar3 = new car("Ford", 2014);
// console.log(myCar1.fullCar());

myCar3.run( 200)



document.getElementById("demo").innerHTML = myCar1.fullCar() +" </br>" + myCar2.fullCar() + " </br> " + myCar3.fullCar();


/*
It has to have the exact name "constructor"
It is executed automatically when a new object is created
It is used to initialize object properties
*/