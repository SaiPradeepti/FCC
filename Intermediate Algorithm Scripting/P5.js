//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  str = str.split(/\s|_|(?=[A-Z])/)
                  .join('-')
                  .toLowerCase();
  console.log(str);
  return str;
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap")
spinalCase("The_Andy_Griffith_Show")
spinalCase("Teletubbies say Eh-oh")
spinalCase("AllThe-small Things")

//output
// this-is-spinal-tap
// this-is-spinal-tap
// the-andy-griffith-show
// teletubbies-say-eh-oh
// all-the-small-things
