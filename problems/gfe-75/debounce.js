// function debounce(func, wait) {
//   // throw 'Not implemented!';
//   let timeoutId;
//   return function () {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       func.apply(this, args);
//     }, wait);
//   };
// }
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    const context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(context, args), delay);
  };
}
// const logData = () => {
//   return 5;
// };

// let i = 0;
// console.log(i);
// function increment() {
//   i++;
//   console.log(i);
// }

// const debouncedIncrement = debounce(increment, 5000);

// t = 0: Call debouncedIncrement().
// debouncedIncrement();

// Cats will be dipslayed first and then after
// Diplay the cats and then wait for a certain duration and display the cats object again
function displayCats() {
  let cats = [
    {
      name: "Pepe",
      breed: "Siamese",
      age: 5,
    },
    {
      name: "Chhma",
      breed: "Siamese",
      age: 5,
    },
  ];
  for (let key in cats) {
    console.log(key, cats[key]);
  }
  // we are debouncing the diplay cats function every five seconds
  displayCatsDebounce();
}
// this will invoke the diplay cats object every 5000 milliseconds or 5 seconds
function displayCatsDebounce() {
  const showCats = debounce(displayCats, 5000);
  console.log("...wait five seconds");
  showCats();
}

displayCats();

function displayDogs() {
  let dogs = [
    {
      name: "Mindy Louise",
      breed: "Yorkshire Terrier",
      age: 5,
    },
    {
      name: "Bandit",
      breed: "Havanese",
      age: 5,
    },
  ];
  for (let key in dogs) {
    console.log(key, dogs[key]);
  }
}

// displayCats();
// const showDogs = debounce(displayDogs, 5000);
// showDogs();
// displayCats();
