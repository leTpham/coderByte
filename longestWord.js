"use strict";
function LongestWord(sen) {
  const letters = "qwertyuiopasdfghjklzxcvbnm1234567890";
  // code goes here
  let currLongestWord = "";
  let longestWord = "";

  let allWords = [];
  for (let i = 0; i < sen.length; i++) {
    if (letters.indexOf(sen[i].toLowerCase()) !== -1) {
      currLongestWord += sen[i];

    }
    else {

      currLongestWord = "";
    }
    allWords.push(currLongestWord);

  }
  let currLongestCount = 0;
  for (let word of allWords) {
    if (word.length > currLongestCount) {
      longestWord = word;
      currLongestCount = Math.max(word.length, currLongestCount);
    }

  }
  return longestWord;
}
