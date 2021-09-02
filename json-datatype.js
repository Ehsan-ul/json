// JSON datatype

// https://jsonlint.com
// String
// Number
// object (JSON object)
// Array
// Boolean
// null


// JSON don't support: date, undefined, functions

var person = {
  name: 'Ehsan', 
  age: 25,
  home: 'Dhaka',
  married: true,
  DOB: 31 - 10 - 1996,
  test_null: null,
  test_undefined: undefined,
  greet: function () {
    console.log(`hello ${this.name}`);
  },
};

// console.log(person)
// person.greet()

// converting into JSON
let person_json = JSON.stringify(person)
console.log(person_json)