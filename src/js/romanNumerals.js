// Symbol  Value
// I       1
// V       5
// X       10
// L       50
// C       100
// D       500
// M       1,000
//const str= "";

export function romanNumerals(inputAmount, str) {    // 8
  const I = 1;
  const V = 5;
  const X = 10;
  const L = 50;
  const C = 100;
  const D = 500;
  const M = 1000;
  
  if (isNaN(inputAmount)) {
    return;
  } else if (inputAmount > 3999) {
    return "This number is too high for a roman numeral.";
  } else if (inputAmount <= 0) {
    return;
  } else if (inputAmount >= 1000) {
    //return `Your ${inputAmount} in roman numerals is ${newI} ${newV}`;
    return romanNumerals(inputAmount - 1000, str + "M");
  }
}

// const conversion = romanNumerals(10);
