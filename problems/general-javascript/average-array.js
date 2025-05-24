let array = [4, 2, 3, 7];

function mean(array) {
  // Total gets handed off inside of the for loop
  // 1. the variable total is assigned to the integer 0
  let total = 0;
  console.log(total);
  for (let i = 0; i < array.length; i++) {
    // 2.  the variable total is reassigned to array[i] + 1 or the number inside the array index at a particular index + the previous number at a particular index
    total = array[i] + total;
    console.log(total);
  }
  // 3. At this point in the function we have a total that was calculated in the for loop. We can simply return total / array.length / 2 OR we can create a variable called mean and then assign it to total / array.length and return mean
  let mean = total / array.length;
  console.log(total);
  return `The mean is ${mean}`;
}

console.log(mean(array));
