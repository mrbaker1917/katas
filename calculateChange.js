let calculateChange = function (total, cash) {
  let change = cash - total;
  let changeObj = {};
  //console.log(change);
  while (change > 0) {
    if (change >= 2000) {
      if (changeObj['twentyDollar']) {
        change -= 2000;
        changeObj['twentyDollar'] += 1;
      } else {
        change -= 2000;
        changeObj['twentyDollar'] = 1;
      }
    } else if (change >= 1000) {
      if (changeObj['tenDollar']) {
        change -= 1000;
        changeObj['tenDollar'] += 1;
      } else {
        change -= 1000;
        changeObj['tenDollar'] = 1;
      }
    } else if (change >= 500) {
      if (changeObj['fiveDollar']) {
        change -= 500;
        changeObj['fiveDollar'] += 1;
      } else {
        change -= 500;
        changeObj['fiveDollar'] = 1;
      }
    } else if (change >= 200) {
      if (changeObj['twoDollar']) {
        change -= 200;
        changeObj['twoDollar'] += 1;
      } else {
        change -= 200;
        changeObj['twoDollar'] = 1;
      }
    } else if (change >= 100) {
      if (changeObj['oneDollar']) {
        change -= 100;
        changeObj['oneDollar'] += 1;
      } else {
        change -= 100;
        changeObj['oneDollar'] = 1;
      }
    } else if (change >= 25) {
      if (changeObj['quarter']) {
        change -= 25;
        changeObj['quarter'] += 1;
      } else {
        change -= 25;
        changeObj['quarter'] = 1;
      }
    } else if (change >= 10) {
      if (changeObj['dime']) {
        change -= 10;
        changeObj['dime'] += 1;
      } else {
        change -= 10;
        changeObj['dime'] = 1;
      }
    } else if (change >= 5) {
      if (changeObj['nickel']) {
        change -= 5;
        changeObj['nickel'] += 1;
      } else {
        change -= 5;
        changeObj['nickel'] = 1;
      }
    } else if (change >= 1) {
      if (changeObj['penny']) {
        change -= 1;
        changeObj['penny'] += 1;
      } else {
        change -= 1;
        changeObj['penny'] = 1;
      }
    }
  }
  return changeObj;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

console.log(calculateChange(2623, 3500));

