/* eslint-disable no-undef */
import { coinCounter } from "../src/js/coinCounter.js";

describe("coinCounter", () => {
  
  test("should return an x amount into pennies", () => {
    expect (coinCounter(0.01)).toEqual("Your change in pennies is 1 pennies");
  });

  test("should return an x amount into nickels", () => {
    expect (coinCounter(0.05)).toEqual("Your change in nickels is 1 nickels");
  });

  test("Should return x amount in dimes", () => {
    expect (coinCounter(0.10)).toEqual("Your change in dimes is 1 dimes"); 
  });

  test("should return x amount in quarters", () => {
    expect(coinCounter(.25)).toEqual("Your change in quarters is 1 quarters");
  });
});
