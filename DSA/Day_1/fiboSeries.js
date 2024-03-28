// Input : 5   (Number of Terms as we want to print)    Note : Two term already define except that we have to find after 5 term it mean we have to print 5 + 2

// Output :  0 1 1 2 3 5 8

function findFibo1(t1, t2, total_term) {
    let term_obj = {};
    term_obj['T1'] = t1;
    term_obj['T2'] = t2;
    for (let i = 3; i <= total_term + 2; i++) {
        let next_term = t1 + t2;
        t1 = t2;
        t2 = next_term;
        term_obj['T' + i] = next_term; ``
    }
    return term_obj;
}

let term1 = 0, term2 = 1;
let findUpto = 5;
let printRestTerm = findFibo1(term1, term2, findUpto)
for (const [key, value] of Object.entries(printRestTerm)) {
    console.log(`${key} : ${value}`);
}
