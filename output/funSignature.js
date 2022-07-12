"use strict";
let add;
add = (a, b) => {
    return a + b;
};
//advanced
let calculation;
calculation = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
let result = calculation(10, 5, "add");
console.log(result);
