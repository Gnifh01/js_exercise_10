console.log("FUNCTION - #1");
function sumUntil(maxValue) {
  let somma = 0, value = maxValue + 1;
  for (let i = 1; i < value; i++) {
    somma += i;
  }
  return `La somma totale dei numeri da 1 a ${maxValue} è: ${somma}!`;
}

console.log(sumUntil(5));

console.log("-----------------------------------------");

console.log("FUNCTION - #2");
function sumUntilVersionTwo(maxValue) {
  let arrNumeri = [], value = maxValue + 1;
  for (let i = 1; i < value; i++) {
    arrNumeri.push(i);
  }
  let sommaTot = arrNumeri.reduce((sum, current) => sum + current, 0);
  return `La somma totale dei numeri da 1 a ${maxValue} è: ${sommaTot}!`;
}

console.log(sumUntilVersionTwo(5));

