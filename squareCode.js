const squareCode = function (message) {
  //create string with no spaces
  message = message.split(" ");
  let newStr = "";
  for (let i = 0; i < message.length; i++) {
    newStr += message[i];
  };
  //determine square
  let cols = Math.ceil(Math.sqrt(newStr.length));
  let rows = Math.ceil(newStr.length / cols);
  //create rows as array of strings
  let arr = [];
  for (let j = 0; j < newStr.length; j += cols) {
    arr.push(newStr.slice(j, (j + cols)));
  };
  //creates string of letters in coded order
  let str2 = "";
  for (let k = 0; k < cols; k++) {
    for (let m = 0; m < rows; m++) {
      if (arr[m][k] !== undefined) {
        str2 += arr[m][k];
      } else if (arr[m][k] === undefined) {
        str2 += " ";
      }
    }
  };
  //creates array of coded words
  let arr2 = [];
  let endpoint = rows;
  for (let n = 0; n < str2.length; n += rows) {
    arr2.push(str2.slice(n, endpoint));
    endpoint += rows;
  };
  //joins array words 
  let codedStr = "";
  codedStr = arr2.join(" ");
  //returns coded string
  return codedStr;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
