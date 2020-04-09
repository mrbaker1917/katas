const makeCase = function (input, caseType) {
  //camel case function
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
  //pascal function
  let pascal = function (input) {
    let newStr = '';
    let arr1 = input.split(" ");
    for (let j = 0; j < arr1.length; j++) {
      newStr += arr1[j].replace(arr1[j][0], arr1[j][0].toUpperCase());
    }
    return newStr;
  };
  //snake function
  let snake = function (input) {
    let newStr = '';
    let arr1 = input.split(" ");
    newStr = arr1.join("_");
    return newStr;
  };
  //kebab function
  let kebab = function (input) {
    let newStr = '';
    let arr1 = input.split(" ");
    newStr = arr1.join("-");
    return newStr;
  };
  //title function
  let title = function (input) {
    let newStr = '';
    let arr1 = input.split(" ");
    for (let i = 0; i < arr1.length; i++) {
      arr1[i] = arr1[i][0].replace(arr1[i][0], arr1[i][0].toUpperCase()) + arr1[i].slice(1);
    }
    newStr = arr1.join(" ");
    return newStr;
  };
  //vowel function
  let vowel = function (input) {
    let newStr = '';
    let vowels = 'aeiou';
    for (let i = 0; i < input.length; i++) {
      if (vowels.indexOf(input[i]) === -1) {
        newStr += input[i];
      } else {
        newStr += input[i].toUpperCase();
      }
    }
    return newStr;
  };
  //consonant function
  let consonant = function (input) {
    let newStr = '';
    let vowels = 'aeiou';
    for (let i = 0; i < input.length; i++) {
      if (vowels.indexOf(input[i]) === -1) {
        newStr += input[i].toUpperCase();
      } else {
        newStr += input[i];
      }
    }
    return newStr;
  };
  //upper function
  let upper = function (input) {
    return input.toUpperCase();
  };

  if (caseType.length === 2) {
    let input2 = upper(input);
    return snake(input2)
  } else {
    //sorter
    switch (caseType) {
      case 'camel':
        return camelCase(input);
        break;
      case 'pascal':
        return pascal(input);
        break;
      case 'snake':
        return snake(input);
        break;
      case 'kebab':
        return kebab(input);
        break;
      case 'title':
        return title(input);
        break;
      case 'vowel':
        return vowel(input);
        break;
      case 'consonant':
        return consonant(input);
        break;
      case 'upper':
        return upper(input);
        break;
    };
  };
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
