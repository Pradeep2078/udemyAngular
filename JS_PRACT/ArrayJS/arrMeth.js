let arr = [{one:1},{two:2},{three:3},{four:4}];

let res = arr.map((obj)=>{
        // Create a new object to store the updated values
        let newObj = {};
    
        // Iterate over each key-value pair in the object
        for (let key in obj) {
            // Multiply the value by 2 and store it in the new object
            newObj[key] = obj[key] * 2;
        }
        
        return newObj;
    
})


let [first, , , ] = res;
console.log(first)

if(first.one === 2){
    console.log("ddddddddddddddddd")
}