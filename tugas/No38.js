function findSimilarity(str, word) {
    const wordsArray = str.split(' ');
    const similarWords = wordsArray.filter(w =>
      w.length === word.length &&
      w[0] === word[0] &&
      w.slice(-1) === word.slice(-1)
    );
  
    return similarWords.join(' ');
  }