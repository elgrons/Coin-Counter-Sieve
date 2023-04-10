// closures - two parts to your function:
//setting up everything the second part needs aka kai's checkout (new user object with the property of our name ready to be used)
//checkout kake function actually doing the stuff that needs to be done there (kind of lieke a dependency injection in C# and allows you to recall the dependency over and over but in a shortened format)

//biggest takeaway this week is the spread operator is very important, very useful, and wait for state

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