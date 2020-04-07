let camelCase = function (input) {
  let newStr = '';
  let arr1 = input.split(" ");
  for (let i = 0; i < arr1.length; i++) {
    if (i === 0) {
      newStr += arr1[i];
    } else {
      newStr += arr1[i].replace(arr1[i][0], arr1[i][0].toUpperCase());
    }
  }
  return newStr;
};

console.log(camelCase("this is a string with a lot of Words"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalistic expialidocious"));

//expected outputs:
//thisIsAString
//loopyLighthouse
//supercalifragalisticexpialidocious