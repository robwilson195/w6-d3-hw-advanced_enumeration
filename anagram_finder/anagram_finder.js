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
      // This is where my code fails, since it is trying to compare two objects. It finds they are not the same ovject in memory, and therefore returns false. I only wanted to identify if they had equal value, but apparently that requires a great deal more work, but some readily available libraries have functions that allow this: 'Underscore' and 'Lo-Dash' have _isEqual.
      if (this.countLetters(checkWord.toUpperCase()) === this.countLetters(this.word.join(''))) {
        result = true;
      }
    }
    return result;
  });
}

module.exports = AnagramFinder;
