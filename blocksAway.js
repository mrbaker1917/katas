const blocksAway = function (directions) {
  let locObj = { 'east': 0, 'north': 0 };
  //first move
  if (directions[0] === 'right') {
    locObj['east'] = directions[1];
  } else {
    locObj['north'] = directions[1];
  };

  //rest of moves
  for (let i = 2; i < directions.length; i += 2) {
    if (directions[i] === 'right' && directions[i - 2] === 'right' && directions[i - 4] !== 'right') {
      locObj['north'] -= directions[i + 1];
    } else if (directions[i] === 'right' && directions[i - 2] === 'right' && directions[i - 4] === 'right') {
      locObj['east'] -= directions[i + 1];
    } else if (directions[i] === 'left' && directions[i - 2] === 'left') {
      locObj['east'] -= directions[i + 1];
    } else if (directions[i] === 'right' && directions[i - 2] === 'left') {
      locObj['east'] += directions[i + 1];
    } else {
      locObj['north'] += directions[i + 1];
    }
  }
  return locObj;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

//expected outcome
// {east: 1, north: 3}
// {east: 3, north: 3}
// {east: 0, north: 0}