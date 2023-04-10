// Symbol  Value
// I       1
// V       5
// X       10
// L       50
// C       100
// D       500
// M       1,000
//const str= "";

//recursion needs an update as well
export function romanNumerals(inputAmount) {    // 8
  

  if (isNaN(inputAmount)) {
    return;
  } else if (inputAmount > 3999) {
    return "This number is too high for a roman numeral.";
  } else if (inputAmount <= 0) {
    return "";
  } else if (inputAmount >= 1000) {
    return "M" + romanNumerals(inputAmount - 1000);
  }
  else if (inputAmount >= 900) 
  {
    return "CM" + romanNumerals(inputAmount - 900);
  } 
  else if (inputAmount >= 500)
  {
    return "D" + romanNumerals(inputAmount - 500);
  }
  else if (inputAmount >= 400)
  {
    return "CD" + romanNumerals(inputAmount - 400);
  }
  else if (inputAmount >= 100)
  {
    return "C" + romanNumerals(inputAmount - 100);
  }
  else if (inputAmount >= 90)
  {
    return "XC" + romanNumerals(inputAmount - 90);
  }
  else if (inputAmount >= 50)
  {
    return "L" + romanNumerals(inputAmount - 50);
  }
  else if (inputAmount >= 40)
  {
    return "XL" + romanNumerals(inputAmount - 40);
  }
  else if (inputAmount >= 10)
  {
    return "X" + romanNumerals(inputAmount - 10);
  }
  else if (inputAmount >= 5)
  {
    return "V" + romanNumerals(inputAmount - 5);
  }
  else 
  {
    return "I" + romanNumerals(inputAmount - 1);
  }
}

// input = 65
// output = LXV
