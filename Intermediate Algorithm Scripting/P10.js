function uniteUnique(arr) {
  let array = [];
  array.push(...arguments);
  array = array.flat();
  let newarr = [];
  for(let i=0;i<array.length;i++){
    if(!newarr.includes(array[i]))
    newarr.push(array[i]);
  }
  return newarr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));

// output
// [ 1, 3, 2, 5, 4 ]
// [ 1, 2, 3, 5 ]
// [ 1, 2, 3, 5, 4, 6, 7, 8 ]
