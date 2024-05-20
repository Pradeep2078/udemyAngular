function add(a,b,c=null+false) {
    // console.log("HWIWWJWJ")
    this.a = a
    this.b = b
    ab = a
    bc = b
    return a+b+c;
    // console.log("vcvcvc-> ",c(1,2))
    // console.log(c)
}

// let a = new add(2,5, function (x,y){
//     return x+y;
// });
let a = new add(2,5);
// console.log(a.a)

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
const john = new Person('John', 30);
// console.log(john.name)  
// console.log(add(1))

function calculate(operation, x, y) {
    return operation(x, y);
}
  
// console.log(calculate(add, 5, 7));  // 12

// Anonymous function
// const func = (str1,num1) => {a=1; console.log(typeof str1,num1,a);}

// func("Pradeep",832323)

// console.log(2==2 && console.log("HIIII"))

const counter1 = (function() {
    return 'IIFE';
})();

const counter = (function () {
    let count = 0;
   
   
    return function () {
      count += 1;
   
   
      return count;
    };
   })();
  
// console.log(counter1)

var result = (function() {
	var x = 10;
	var y = 20;
	return x + y;
})();

// console.log(result.x); // Output: 30

// function fetchData(callback) {
//   setInterval(() => {
//     callback('Data fetched');
//   },1000);
// }
// fetchData((data) => {
//   console.log(data);
// });

const obj1 = {
    get name() {
        return "pradeep ";
    }
}
// console.log(obj1.name())


class Animal {
    constructor(name,age) {
        console.log("Name--> ",name," Age---> ",age);
    }
    dog() {
        console.log("Hi I am dog....")
    }
    tiger = () =>{
        console.log("I am also tiger");
    }
    girrafe = function () {
        console.log("I am tallest")
    }
}

class Cat extends Animal {
    dog() {
        console.log("I am barking....")
    }
}

let animal = new Cat("Tommy",15);
animal.dog();
animal.tiger();
animal.girrafe();

console.log(0==false)