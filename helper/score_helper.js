function score(arrAlphabet) {
  var arrAlphabetTemp = [];
  for (var i = 0; i < arrAlphabet.length; i++) {
    if (arrAlphabet[i] > 85) {
      arrAlphabetTemp[i] = 'A';
    }
    if (arrAlphabet[i] > 75 && arrAlphabet[i] <= 85) {
      arrAlphabetTemp[i] = 'B';
    }
    if (arrAlphabet[i] > 55 && arrAlphabet[i] <= 75) {
      arrAlphabetTemp[i] = 'C';
    }
    if (arrAlphabet[i] <= 55) {
      arrAlphabetTemp[i] = 'E';
    }
    if (arrAlphabet[i] == null){
      arrAlphabetTemp[i] = 'Empty';
    }
  }
  return arrNumTemp
}

module.exports = score
