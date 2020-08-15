function whatIsInAName(collection, source) {
  var arr = [];
collection
  .forEach(item => { let flag=1;
    for(let x in source){
      if(!item.hasOwnProperty(x) || item[x]!=source[x]){flag=0}
      }  
      if(flag==1){arr.push(item)}
      });
console.log(arr);
return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 });
whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3});


//output
// [ { first: 'Tybalt', last: 'Capulet' } ]
// [ { apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 } ]
// [ { apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 } ]
// [ { apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 } ]
// [ { apple: 1, bat: 2, cookie: 2 } ]
// [ { apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 } ]
