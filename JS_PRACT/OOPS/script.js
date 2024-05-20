'use strict'

const Person = function(firstName, bithYear) {

}

new Person('Pradeep',1998);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}