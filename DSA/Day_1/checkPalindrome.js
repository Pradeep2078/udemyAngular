// Input : 121, 123, 643346
// Output : It is Palindrome Number
// Process : Actual and resulted Number should be same.

function checkPalindrome(num) {
    let res = 0;
    while(num != 0) {
        let rev = num % 10;
        res = (res*10) + rev;
        num = Math.floor(num / 10);
    }
    return res;
}

let num = 643346;
if(checkPalindrome(num) === num) {
    console.log("It is Palindrome");
} else {
    console.log('It is not Palindrome');
}