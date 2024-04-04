var countPrimes = function(n) {
    let c = 0;
    if(n > 1) {
        for (let i = 2; i < n; i++) {
            let flag = 0;
            for(let j = 2;j <= i/2;j++) {
                if(i % j == 0) {
                    flag = 1;
                    break;
                }
            }
            flag == 0 ? c++ : c;
        }
        return c;
    }
    else if(n == 0) {
        return 0;
    }
    return 0;
};

console.log(countPrimes(10))