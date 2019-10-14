// solving this by creating a object with stringA (key= character, pair = number count)
//  in the second for loop we are checking if the character in srtingB is present first and then
// we are actually decrementing the number count of that particular key
// so if the strings are anagrams then the string results in { key: 0,key1: 0,key2: 0,key3: 0, }
function anagrams(stringA, stringB) {
  if (stringA.length !== stringB.length) {
    console.log("Cant compare Sorry");
    return false;
  }
  const res = {};
  for (let i = 0; i < stringA.length; i++) {
    var charA = stringA[i];
    res[charA] = res[charA] + 1 || 1;
  }
  for (let i = 0; i < stringB.length; i++) {
    charB = stringB[i];
    if (!res[charB]) {
      console.log(`"${charB}" is not present in stringA `);
      return false;
    } else {
      res[charB]--;
    }
  }
  console.log("Given strings are anagrams", res);

  return true;
}
anagrams("alamal", "lamala");
anagrams("asgdhawg", "asgdhagw");
