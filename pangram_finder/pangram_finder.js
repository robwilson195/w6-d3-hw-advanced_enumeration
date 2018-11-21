const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.split('');
}

PangramFinder.prototype.isPangram = function () {
  return this.alphabet.every((letter) => {
    return this.phrase.some((phraseLetter) => {
      return letter.toUpperCase() === phraseLetter.toUpperCase();
    });
  });
}

module.exports = PangramFinder;
