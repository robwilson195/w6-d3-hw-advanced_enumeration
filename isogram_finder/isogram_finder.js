const IsogramFinder = function (word) {
  this.word = word.split('');
}

IsogramFinder.prototype.quantityOfLetter = function (searchLetter) {
  return this.word.reduce((accum, letter) => {
    if (letter === searchLetter) {
      return accum + 1;
    } return accum;
  }, 0);
};

IsogramFinder.prototype.isIsogram = function () {

};

module.exports = IsogramFinder;
