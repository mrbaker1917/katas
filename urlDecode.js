const urlDecode = function (text) {
  let decodedObj = {};
  //function to replace %20 with a space
  const spaceMaker = function (term) {
    if (term.indexOf("%20") !== -1) {
      term = term.replace(/%20/g, " ");
      return term;
    } else {
      return term;
    }
  };
  //split text by "&"
  text = text.split("&");
  //split text by "="
  if (text.length < 2) {
    text = text[0].split("=");
    decodedObj[text[0]] = spaceMaker(text[1]);
  } else {
    let i = 0;
    while (i < text.length) {
      let tempArr = text[i].split("=");
      decodedObj[tempArr[0]] = spaceMaker(tempArr[1]);
      tempArr = [];
      i++;
    }
  };
  return decodedObj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs&location=Victoria&weather=less%20rain%20than%20Vancouver").location);
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
