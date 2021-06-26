// Task 1
const arr = [10, 2, 23, 4, 5];

console.log(arr.filter((value) => value > 5));
let mapping = arr.map((value) => ({ val: value / 5 }));
console.log(mapping.keys());
// arr[0] = 1;
// arr[2] = 3;

console.log(arr.reduce((prevVal, currValue) => prevVal * currValue, 1));

// Task 2(and 3)

const findMax = (...values) => {
  let max = values[0];
  let min = values[0];
  for (const val of values) {
    if (val > max) max = val;
    if (val < min) min = val;
  }
  return [max, min];
};

const [maxNo, minNo] = findMax(...arr);
console.log(maxNo, minNo);
