// Take one number and check it is prime or not
// Sample Input : 7
// Sample Output : It is Prime

// Only Single number check
function checkPrime(num) {
    if (num == 1) {
        return 1;
    }
    for (let i = 2; i < num - 1; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

// Count the number of prime number is available
function storePrime(start, end) {
    let arr = [];
    while(start <= end) {
        let flag = 1;
        for (let j = 2; j < start - 1; j++) {
            if ( start % j === 0) {
                flag = 0;
            }
        }
        if (flag === 1)
            arr.push(start);
        start+=1;
    }
    return arr;
}

// Question 1 stuff

let num = 4;
let flag = 1;

let check = checkPrime(num);

if (check === 1) {
    console.log(num, " is not valid . Prime number start from 2");
} else if (check == false) {
    console.log("It is not prime number");
} else {
    console.log("It is Prime Number");
}

// Question 2 Stuff

let totalPrime = storePrime(1, 100);
console.log("Total Number of Prime Number is  : ", totalPrime);