// execute this from the repository root with: ts-node src/firstSession/introduction/if.js
// official documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
const soTrue = true;
if (soTrue) {
  console.log('We got here!')
} else {
  console.log('I wanted it to be true so bad...')
}

// const aNumber = 4;
// if (aNumber === 3) {
//   console.log('We got the magic number');
// } else {
//   console.log('The number was...', aNumber);
// }

// const myFavoriteAnimal = 'gorilla';
// const anAnimalILove= 'otter';
// const anAnimalILike = 'eagle';
// const myFavoriteAnimals = [myFavoriteAnimal, myFavoriteAnimal, anAnimalILove, anAnimalILike];
// for (const animal of myFavoriteAnimals) {
//   if (animal === myFavoriteAnimal) {
//     console.log('This one is by far my favorite!!!');
//   } else if (animal === anAnimalILove) {
//     console.log('I love this one!')
//   } else {
//     console.log('I still like this one, but less than the other two.')
//   }
// }

// const doubleOrNothing = (number) => {
//   if (number % 2 === 1) {
//     return number * 2;
//   } else {
//     return 0;
//   }
// }
// console.log(doubleOrNothing(3));