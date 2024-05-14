// Task
// Define a class Cube whose constructor function takes exactly one parameter length and stores the value of the argument into this.length. You will then define both a getter and a setter for the surfaceArea and volume of the cube.

// No initial code will be given. You are free to use whatever syntax you like to complete this Kata but it is highly recommended that you use ES6 syntax and features to complete this Kata.

class Cube {
    constructor(length){
      this.length = length;
    }
    
    set volume(volume) {
      this.length = Math.cbrt(volume);
    }
    
    get volume() {
      return Math.pow(this.length, 3);
    }
    
    set surfaceArea(sA) {
      this.length = Math.sqrt((sA/6))
    }
    
    get surfaceArea() {
      return Math.pow(this.length, 2)* 6;
    }
  }