const AnagramFinder = function (word) {
  this.word = word.toUpperCase().split('');
}

AnagramFinder.prototype.countLetters = function (wordToCount) {
  const letterCount = {};
  wordToCount.split('').forEach((letter) => {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  });
  return letterCount;
};

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  return otherWords.filter((checkWord) => {
    let result = false;
    if (checkWord.toUpperCase().split('') !== this.word) {
      if (this.countLetters(checkWord.toUpperCase()) === this.countLetters(this.word.join(''))) {
        result = true;
      }
    }
    return result;
  });
}

module.exports = AnagramFinder;
