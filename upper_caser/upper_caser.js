const UpperCaser = function (words) {
  this.words = words
}

UpperCaser.prototype.toUpperCase = function () {
  return this.words.map((lowerCaseWord) => {
    return lowerCaseWord.toUpperCase();
  });
}

module.exports = UpperCaser;
