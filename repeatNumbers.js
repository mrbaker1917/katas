let repeatNumbers = function (data) {
  let lst1 = [];
  let tempStr = '';
  for (let list of data) {
    for (let i = 1; i <= list[1]; i++) {
      tempStr += list[0];
    }
    lst1.push(tempStr);
    tempStr = '';
  }
  return lst1;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
