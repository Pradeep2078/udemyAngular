function sortC(arr) {
    let store = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) 
            store.push('red')
        else if(arr[i] === 1)
            store.push('white')
        else 
            store.push("blue")
    }

    for (let i = 0; i < store.length; i++) {
        
    }
}

let arr = [0,1,0,2,1,0,0,1,2,0,2];
sortC(arr);