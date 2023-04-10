//DON'T LOOK, it's recursion done wrong, this is a regular function
//if it calls itself inside of itself = recursion
//with closure you're returning a result you can use later
export function coinCounter(
  x, //accidental global variable?
  pennies = 0,
  nickels = 0, 
  dimes = 0,
  quarters = 0
) {
  if (x === 0) {
    return `Your cash conversion is ${pennies} in pennies, and ${nickels} in nickels and ${dimes} dimes`;
  } else if (x === 0.01) {
    pennies = x * 100;
    return `Your change in pennies is ${pennies} pennies`;
  } else if (x === 0.05) {
    nickels = x / 0.05;
    return `Your change in nickels is ${nickels} nickels`;
  } else if ( x === 0.10) {
    dimes = x / .1;
    return `Your change in dimes is ${dimes} dimes`;
  } else {
    quarters = x / .25;
    return `Your change in quarters is ${quarters} quarters`;
  }
}

//DON'T LOOK AT THIS ONE

