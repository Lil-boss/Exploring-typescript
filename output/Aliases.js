"use strict";
//this is normal function with type, here we declare the type in every function and this is kind of redundant
//here is come Aliases.
// const userDetails = (id: string | number, user:{name:string, age: number}) => {
//     console.log(`user id is ${id}, name is ${user.name} and age is ${user.age} `);
// }
const userDetails = (id, user) => {
    console.log(`user id is ${id}, name is ${user.name} and age is ${user.age} `);
};
const sayHello = (user) => {
    console.log(`user age ${user.age > 50 ? "sir" : "Mr."} ${user.name} `);
};
