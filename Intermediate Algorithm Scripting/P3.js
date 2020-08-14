function destroyer(arr) {
   var args = Array.prototype.slice.call(arguments);
   let targetArr = (args.splice(0,1)).map(item => item) ;
   targetArr = targetArr.flat();
   let result = targetArr.filter(item => !args.includes(item));
  return result;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));

//output
//[ 1, 1 ]
//[ 1, 5, 1 ]
//[ 1 ]
//[]
//[ 'hamburger' ]
//[ 12, 92, 65 ]
