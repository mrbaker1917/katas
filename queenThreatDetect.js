const generateBoard = function (whiteQueen, blackQueen) {
  let arr = [];
  let arr2 = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      arr2.push(0);
    }
    arr.push(arr2);
    arr2 = [];
  };
  arr[whiteQueen[0]][whiteQueen[1]] = 1;
  arr[blackQueen[0]][blackQueen[1]] = 1;
  return arr;
};

const queenThreat = function (generatedBoard) {
  if (whiteQueen[0] === blackQueen[0] || whiteQueen[1] === blackQueen[1]) {
    return true;
  } else if (Math.abs(whiteQueen[0] - blackQueen[0]) === Math.abs(whiteQueen[1] - blackQueen[1])) {
    return true;
  } else {
    return false;
  }
};



let whiteQueen = [3, 5];
let blackQueen = [5, 4];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [4, 3];
blackQueen = [0, 7];
let generatedBoard2 = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard2);
console.log(queenThreat(generatedBoard));
