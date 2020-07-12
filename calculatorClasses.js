class Calculator {
  constructor() {
    this.result = 0;    
  }
   

  add(num) {
    this.result = this.result + num
    return this
  };

  minus(num) {
    this.result = this.result - num
    return this 
  };  

  multiply(num) {
    this.result = this.result * num
    return this 
  };  

  divide(num) {
    this.result = this.result / num
    return this 
  }
}

let calc = new Calculator();

calc
  .add(5)
  .minus(1)
  .multiply(4)
  .divide(2)
console.log(calc.result);