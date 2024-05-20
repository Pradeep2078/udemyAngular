let firstName,lastName,companyName;
let profile = ["Pradeep","Pal","Utopiatech"];
[firstName,lastName,companyName] = ["Pradeep","Pal","Utopiatech"]
let a1 = [...profile];
// console.log("Object 1 is : ",firstName, " ",lastName, " ",companyName)
// console.log("Object 2 is : ",a1);

let [movieName,...otherMovies] = ["Spiderman","Batman","Krish"]
// console.log(movieName)
// console.log(otherMovies)

// function getCompanyName([firstName, ,[userName]]) {
//     console.log("Hi how are u?")
//     return `Hello ${userName} ${lastName} I thing u r doing well`;
// }

let profile2 = ["Pradeep","Pal",["Utopiatech","Google"]];
// console.log(getCompanyName(profile2))

function getCompanyName([firstName] = ["Pradeep"]) {
    console.log("Hi how are u?")
    return `Hello ${firstName} I thing u r doing well`;
}

// console.log(getCompanyName())

let name = ["apple",[["bat"],["catch"]],undefined];
let [a,b,c] = name;
// console.log(a,b,c)

let profile3 = {
    id: 1,
    name1: "Pradeep",
    age: 21
};

let {id:id,name1:name1,age:age} = profile3;
// console.log("id : ",id)
// console.log("name : ",name1)
// console.log("age : ",age)

let name2 = "Mahesh";

function getCollegeName() {
    return "MCC";
}

let [names,collegeName] = [name2,getCollegeName()];
console.log("college name: ",typeof getCollegeName())
