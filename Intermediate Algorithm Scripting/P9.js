function fearNotLetter(str) {
  let letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for(let i=letters.indexOf(str[0]);i<=letters.indexOf(str[str.length-1]);i++){
    if(!str.includes(letters[i]))
      return letters[i];
    
  }
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

// output
// d
// i
// u
// e
// undefined
