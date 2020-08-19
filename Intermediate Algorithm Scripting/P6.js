function translatePigLatin(str) {
  if(str[0].match(/[aeiou]/)){
    str = str + 'way';
    }
  if(str.search(/[aeiou]/)!==-1 && str[0].search(/[aeiou]/)==-1){
    let pos = str.search(/[aeiou]/);
    str = str.slice(pos) + str.slice(0,pos) + 'ay';
  }
  else if(str.search(/[aeiou]/)===-1 && str[0].search(/[aeiou]/)==-1){
    str = str + 'ay';
    }
  console.log(str);
  return str;
}

translatePigLatin("consonant");
translatePigLatin("paragraphs");
translatePigLatin("glove");
translatePigLatin("algorithm");
translatePigLatin("eight");
translatePigLatin("schwartz");
translatePigLatin("rhythm");

// output

// onsonantcay
// aragraphspay
// oveglay
// algorithmway
// eightway
// artzschway
// rhythmay
