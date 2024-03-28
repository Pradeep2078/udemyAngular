// Input : 12345    
// Output : 15
// Process : 1+2+3+4+5 = 15

function sumDigit(num) {
    let sum = 0;
    while(num != 0) 
    {
        let rev = num % 10;
        sum += rev;
        num = Math.floor(num/10);
    }
    return sum;
}

let num = 24636;
console.log("Sum of Digit(",num,") is :", sumDigit(num));