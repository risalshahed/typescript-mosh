// TypeScript doesn't necessarily need annotaion, just hover over the variables
let age = 103_894_632_646;
let course = 'TypeScript';
let arr = [1,2,3,4,5];

// declare a variable but don't assign & hover over the variables
let level;
// ekhn level k any type dewa jabe!

level = 1;
level = 'a';

// BUT it contradicts the GOAL of TypeScript, we MUST AVOID ANY_TYPE, to do so
let level2:string;
// level2 = 1;    // now it'll return error i.e. GOAL of TypeScript satisfies
level2 = 'a';

// the parameter implicitly has "any type"!
/* function myFunc(x) {
  console.log(x);
} */

// let numbers: number[] = [1,2,3,4,'a','6'];
let numbers: number[] = [1,2,3,4,5,6];

// let arr2 = [];
// if we wanna avoid "any type" in case of empty array
let arr2: number[] = [];

// --------- TUPLES ---------
// *** say, ekta array er length fixed kore dbo plus each element er type specific hbe
// Say, an user with [id, firstName, lastName]
let user1: [number, string, string] = [1, 'Alison', 'Bekar'];
// user1.   // etuku likhle suggestion a shob asbe

// Limitations of TypeScript! push dle new Element add hya jasse, element j fixed kore dewa hoicilo ta r thaklo na!
/* user1.push(2);
console.log(user1); */

// **** ENUMS -> A list of related constants

/* function myFunc(a: number, b: number): number {
  // let unusedVariable;
  if (a < 10_000) {
    return a ** 2;
  }
  return Math.sqrt(a);
} */

// let's make second parameter OPTIONAL
// function myFunc2(a: number, b?: number): number {
function myFunc2(a: number, b=5): number {
  const sum = a + b;
  return sum;
}

console.log(myFunc2(10));