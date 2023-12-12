/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.sort() == str2.sort()) {
    return true;
  } else {
    return false;
  }
}

var ans = isAnagram("rasp", "pasr");
console.log(ans);

module.exports = isAnagram;
