// Input : 5
// Output : 120
// Process : 5*4*3*2*1

function findFact(num) {
    let sum = 1;
    for (let i = num; i >= 1; i--) {
        sum *= i;
    }
    return sum;
}

let num = 12;
console.log('Factorial of ',num, " is ",findFact(num));