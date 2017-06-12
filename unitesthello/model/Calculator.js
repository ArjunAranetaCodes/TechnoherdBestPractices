let Calculator = {
  add : (numbers) =>{
     if(!numbers.num1){
          throw "num1 should have a value"
     }else if (!numbers.num2) {
         throw "num2 should have a value"
     }

    return numbers.num1 + numbers.num2
  },

  multiply : (numbers) =>{
       if(!numbers.num1){
           throw "num1 should have a value"
      }else if (!numbers.num2) {
          throw "num2 should have a value"
      }
       return numbers.num1 * numbers.num2
 }

}

module.exports = Calculator
