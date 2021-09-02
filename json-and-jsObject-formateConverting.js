// JS object
let student = {
  name: 'Ehsan',
  age: 25,
  home: 'Dhaka',
};

/*
// JSON
let student_json = {
  "name": "Ehsan",
  "age": 25,
  "home": "Dhaka",
};
*/

// formating JS object into JSON
let student_json = JSON.stringify(student);
console.log(student_json);

// converting JSON file into JS object
let student_new = JSON.parse(student_json);
console.log(student_new);
