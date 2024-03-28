// Input : 2016, 2017, 2018
// Output : Ys, It is Leap Year or No, It is not a leap year 
// Process : Check input by multiple of 4 or not

function checkLeapYear(num) {
    if(num % 4 === 0) {
        return true;
    }
    return false;
}

let num = 2020
if(checkLeapYear(num)) {
    console.log("Yes, It is Leap Year");
} else {
    console.log("No, It is not a Leap Year");
}