// import {
//     checkStartNumberIsLessThanOrEqualsEndNumber,
//     multiply,
//     createMultiplyTable
//   } from "../createMultiplyTable.js";

const { checkStartNumberIsLessThanOrEqualsEndNumber,  multiply } = require("../createMultiplyTable")
// const multiply = require("../createMultiplyTable")

it ('should check 2 is less than 3', () => {
    expect(checkStartNumberIsLessThanOrEqualsEndNumber(2,3)).toBe(true);
});

it ('should get multiply string given 2 and 2', () => {
    expect(multiply(2, 2)).toBe("2*2=4");
});

it ('should get multiply table given 2 and 3', () => {
    expect(multiply(2, 3)).toBe("2*3=6");
});


// node_modules/.bin/jest   