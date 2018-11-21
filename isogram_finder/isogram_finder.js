const IsogramFinder = function (word) {
  this.word = word.toUpperCase().split('');
}

IsogramFinder.prototype.quantityOfLetter = function (searchLetter) {
  return this.word.reduce((accum, letter) => {
    if (letter === searchLetter) {
      return accum + 1;
    } return accum;
  }, 0);
};

IsogramFinder.prototype.isIsogram = function () {
  return this.word.every((letter) => {
    return this.quantityOfLetter(letter) === 1;
  });
};

module.exports = IsogramFinder;
