function myReplace(str, before, after) {
  (before[0].match(/[A-Z]/) === null) ? after = after[0].toLowerCase()+after.slice(1) : after = after[0].toUpperCase()+after.slice(1);
  if(str.match(before)){str = str.replace(before,after)}
  console.log(str, before, after)
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("Let us go to the store", "store", "mall")
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
myReplace("I think we should look up there", "up", "Down")
myReplace("This has a spellngi error", "spellngi", "spelling")
myReplace("His name is Tom", "Tom", "john")
myReplace("Let us get back to more Coding", "Coding", "algorithms")

// output
// A quick brown fox leaped over the lazy dog jumped leaped
// Let us go to the mall store mall
// He is Sitting on the couch Sleeping Sitting
// I think we should look down there up down
// This has a spelling error spellngi spelling
// His name is John Tom John
// Let us get back to more Algorithms Coding Algorithms
