// Problem - Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

function sumAll(arr) {
    let sum = 0;

    for (let i = Math.min(arr[0], arr[1]); i <= Math.max(arr[0], arr[1]); i++) {
        sum += i;
    }

    return sum;
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));
