const multiplier = (numberToMultiplyBy) => {
  return (romanClosure) => {
    return numberToMultiplyBy * numberToMultiply;
  }
}
//numerals better for recusion than closure
//pass variable into a new function in lieu of passing it all through at once with one return statement
//with closure you're returning a result you can use later

function romanClosure(inputArray) {
    let romanNumerals = "";
    inputArray.forEach(function (num) {
      if (num >= 1000) {
        num -= 1000;
        romanNumerals.concat("M");
      } 
      else if (num >= 900) {
        romanNumerals.concat("CM");
        num -= 900;
      } 
      else if (num >= 500) 
      {
        romanNumerals.concat("D");
        num -= 500;
      }
      else if (num >= 400) {
        romanNumerals.concat("CD");
        num -= 400;
      }
      else if (num >= 100) {
        romanNumerals.concat("C");
        num -= 100;  
      }
      else if (num >= 90) {
        romanNumerals.concat("XC");
        num -= 90;
      }
      else if (num >= 50) {
        romanNumerals.concat("L");
        num -= 50; 
      }
      else if (num >= 40) {
        romanNumerals.concat("XL");
        num -= 40; 
      }
      else if (num >= 10) {
        romanNumerals.concat("X");
        num -= 10; 
      }
      else if (num >= 5) {
        romanNumerals.concat("V");
        num -= 5; 
      }
      else if (num >= 1) {
        romanNumerals.concat("I");
        num -= 1; 
      } else {
        return romanNumerals;
      }
    });
    romanNumerals(num);
  }