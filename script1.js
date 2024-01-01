let index = prompt("Which fibonacci term do you want to see? enter a number: ")*1;
const fib = [0, 1];

for (let i = 2; i <= index; i++) {
    let a = fib[i-1] , b = fib[i-2];
    fib.push(a + b);
}

console.log(fib[index-1]);