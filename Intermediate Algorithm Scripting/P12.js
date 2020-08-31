function sumFibs(num) {
  let a = 0, b=1, sum = 1, arr = [];
  arr.push(a);
  while(sum<=num){
    arr.push(sum);
    sum = a + b;
    a=b;b=sum;    
  }
  sum = 0;
  arr.forEach(x => {if(x%2!==0){sum+=x}});
  console.log(sum);
  return sum;
}

sumFibs(4);
sumFibs(1000);
sumFibs(4000000);
sumFibs(4);
sumFibs(75024);
sumFibs(75025);

// output
// 5
// 1785
// 4613732
// 5
// 60696
// 135721
