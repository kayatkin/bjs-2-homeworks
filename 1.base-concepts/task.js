"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  
  const discriminant = Math.pow(b, 2) - 4 * a * c;
  
  if (discriminant < 0) {
      return arr;
  } else if (discriminant === 0) {
      const root = -b/(2*a);
      return [root];
  } else {
      const root1 = (-b + Math.sqrt(discriminant))/(2*a);
      const root2 = (-b - Math.sqrt(discriminant))/(2*a);
      return [root1, root2];
  }
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  if (typeof percent !== "number" || typeof contribution !== "number" ||
     typeof amount !== "number" || typeof countMonths !== "number") {
     return false;
  }

  const monthlyPercent = percent / 100 / 12;

  const creditBody = amount - contribution;

  const monthlyPayment = creditBody * (monthlyPercent + (monthlyPercent 
      / ((1 + monthlyPercent) ** countMonths - 1)));


  const totalAmount = monthlyPayment * countMonths;

  return Number(totalAmount.toFixed(2));

}

console.log(calculateTotalMortgage(10, 0, 50000, 12)); // Вывод: 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // Вывод: 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // Вывод: 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // Вывод: 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // Вывод: 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // Вывод: 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // Вывод: 12479.52

