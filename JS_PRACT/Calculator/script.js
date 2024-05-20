console.log("Start Calculating");
let inputField = document.querySelector("#result");
let allClear = document.querySelector('.all-clear');
let percent = document.querySelector('.percent');
let divide = document.querySelector('.divide');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let mulitply = document.querySelector('.mulitply');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let substract = document.querySelector('.substract');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let add = document.querySelector('.add');
let doubleZero = document.querySelector('.double-zero');
let zero = document.querySelector('.zero');
let equal = document.querySelector('.equal');

let result = "";

// inputField.addEventListener('change', inputResult)
allClear.addEventListener('click', allClear)
percent.addEventListener('click', percent)
divide.addEventListener('click', divide)
seven.addEventListener('click', seven)
eight.addEventListener('click', eight)
nine.addEventListener('click', nine)
mulitply.addEventListener('click', mulitply)
four.addEventListener('click', fourCalled)
five.addEventListener('click', five)
six.addEventListener('click', six)
substract.addEventListener('click', substract)
one.addEventListener('click', one)
two.addEventListener('click', twoCalled)
three.addEventListener('click', three)
add.addEventListener('click', addCalled)
doubleZero.addEventListener('click', doubleZero)
zero.addEventListener('click', zero)
equal.addEventListener('click', equal)

function fourCalled() {
    result += "4";
    inputField.value = result;
}

function twoCalled() {
    result += "2";
    inputField.value = result;
}

function addCalled() {
    result += "+";
    inputField.value = result;
}