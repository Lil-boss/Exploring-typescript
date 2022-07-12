"use strict";
//Explicit & Union Types
//normal variable
let b;
b = 10;
//array
const a = [];
a.push(1, 3, "hello");
//object
let c;
c = {
    //any type of variable you can add
    name: "shaon",
    age: 20,
};
//you can put here an array because in js array is an type of object
c = [];
//define the object with variable type
let d;
d = {
    //you can't add any type of variable you need to add the specific type of variable
    name: "shaon",
    age: 20,
};
console.log(d);
