let sumLargestNumbers = function(data) {
  if (data.length < 2) {
    throw new Error('Oops! Array must have at least two integers.');
  } else {
    data.sort(function(a, b) {return b - a});
    return data[0] + data[1];
  }
};

console.log(sumLargestNumbers([29, 42, 22]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 1000]));