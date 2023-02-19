// execute this from the repository root with: ts-node src/firstSession/practice/easy.js
// first exercise: log your name in the console

// second exercise: write a function that receives a string as an argument and logs that string in the console

// third exercise: write a loop that logs numbers from 1 to 5 in the console

// fourth exercise: I have an object that associates mexican food with prices
// log the price of tacos from object in the console
const mexicanFoodPrices = {
  chilaquiles: 60,
  enfrijoladas: 70,
  mole: 100,
  tacos: 10
}

// fifth exercise: this function receives two numbers as input. if the sum of both numbers is bigger than 10,
// it returns true. otherwise, it returns false. change this function to receive a third number, add it
// to the sum and do a division by 3 instead.
const isMeanBiggerThan10 = (firstNumber, secondNumber) => {
  return (firstNumber + secondNumber) / 2 > 10;
}
