// execute this from the repository root with: ts-node src/firstSession/introduction/dataTypes.js
// official documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

// let vs const
const aVariableThatWillNeverChange = 'No one can touch me';
let aVariableThatCanChange = 'Change is inevitable';
aVariableThatCanChange = 'So much better now';
console.log(aVariableThatCanChange, aVariableThatWillNeverChange);

// data types
const aString = 'Essentially a fancier word for text';
const aNumber = 33.55123;
const aBoolean = true;

const anArrayOfStrings = ['elephant', 'giraffe', 'zebra'];
const anArrayOfNumbers = [1, 2, 3, 5];
// console.log(anArrayOfNumbers[0]);
// anArrayOfNumbers.push(7);
// console.log(anArrayOfNumbers);
// console.log(anArrayOfNumbers.pop());
// console.log(anArrayOfNumbers);

const anObject = {
  bigMac: 5,
  mcNuggets: 6.5,
  trio: 3
};
// console.log(anObject.bigMac);

const aFunction = () => console.log('This is much simpler than I thought!');
const aFunctionWithAnArgument = (theThingToLog) => console.log(theThingToLog);
const aFunctionWithAnExplicitReturnValue = (aNumber) => {
  return aNumber + 3;
}
const aRecursiveFunction = (aNumber) => {
  if (aNumber === 0) {
    return 0;
  }
  return aRecursiveFunction(aNumber - 1);
}

// aFunction();
// aFunctionWithAnArgument(anArrayOfStrings);
// aFunctionWithAnExplicitReturnValue(1);
// console.log(aFunctionWithAnExplicitReturnValue(1));
// console.log(aRecursiveFunction(5));
