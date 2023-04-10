// closure

export function coinClosure(inputAmount){         // 4.99
  const pennies = 0.01;
  const nickels = 0.05;
  const dimes = 0.10;
  const quarters = 0.25;

  return function(){ 
    
    const newPennies = Math.floor(inputAmount / pennies);
    const newNickels = Math.floor(inputAmount / nickels);
    const newDimes = Math.floor(inputAmount / dimes);
    const newQuarters = Math.floor(inputAmount / quarters);

    return `Your change from ${inputAmount} amount is ${newPennies} pennies, ${newNickels} nickels, ${newDimes} dimes, and ${newQuarters} quarters`;
  };
}

// const conversion = coinClosure(4.99);