const conditionalSum = function (values, condition) {
  let filteredValuesSum = 0;
  for (let i = 0; i < values.length; i++) {
    if (condition === "even") {
      if (values[i] % 2 === 0) {
        filteredValuesSum += values[i];
      }
    } else {
      if (values[i] % 2 === 1) {
        filteredValuesSum += values[i];
      }
    }
  }
  return filteredValuesSum;
};

console.log(conditionalSum([1, 3, 5, 6, 8], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5, 6, 7, 201], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99, 202020], "even"));
console.log(conditionalSum([], "odd"));