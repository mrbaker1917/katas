const whereCanIPark = function (spots, vehicle) {
  function findSpot(vLet) {
    for (let i = 0; i < spots.length; i++) {
      for (let j = 0; j < spots[i].length; j++) {
        if (vLet === spots[i][j]) {
          return [j, i];
        }
      }
    } return false;
  };
  let mSpot = findSpot('M');
  let rSpot = findSpot('R');
  let sSpot = findSpot('S')

  if (vehicle === 'motorcycle') {
    if (mSpot !== false) {
      return mSpot;
    } else if (rSpot !== false) {
      return rSpot;
    } else if (sSpot !== false) {
      return sSpot;
    } else {
      return false;
    }
  } else if (vehicle === 'small') {
    if (sSpot !== false) {
      return sSpot;
    } else if (rSpot !== false) {
      return rSpot;
    } else {
      return false;
    }
  } else {
    return rSpot;
  }
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))
