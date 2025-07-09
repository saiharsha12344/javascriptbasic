//Identifier in java Script
//starts with Alphabets,underscore(_)
//and don't start with number.
// and start with keyword it will show error on console

// There are three types of variable in javascript
//are 1.var
//    2.let
//    3.const


var name="Sai";
    name="harsha"
    a=1
    b=6
console.log(b+5)

let name1="Sai";
console.log(name1)

const name2="Sai";
console.log(name2)


//Hoisting:we can access variables in before initializing using var key word for example
 console.log(name4)
 var name4="sai"

 //and we accessing before intializing a using let and const variable for example

 //let variable
//console.log(name)
//let name="sai"


// const variable
//console.log(name)
//const name="sai"



//Data Types in javascript are in primitive data types
// 1.Number
// 2.Booleen
// 3.String
// 4.Bigint
// 5.Null
// 6.Undefined
// 7.Symbol



// 1. is Number and in javascript there is no decimal and float and only one thing is Number data type
const num=10;
console.log(num)
console.log(typeof num)

const b=10.00;
console.log(b)
console.log(typeof b)

const c=10.123;
console.log(c)
console.log(typeof c)

//2. data type is Boolen are true or false for example 
const hi=true;
console.log(hi)
console.log(typeof hi)

const hii=false;
console.log(hii)
console.log(typeof hii)


//3.is strings we passing anything inside a double,single,and back tick

const hey="string";
console.log(hey)
console.log(typeof hey)


const hey1='string';
console.log(hey1)
console.log(typeof hey1)

const hey2=`string`;
console.log(hey2)
console.log(typeof hey2)

// 4.undefine
let notDefined; 
console.log(notDefined)
console.log(typeof notDefined)


// 5.Null when we don't want to pass any value to the variable and using null it will return null
let bangarang_balli=null; 
console.log(bangarang_balli)
console.log(typeof bangarang_balli)


//6.symbol

let sym = Symbol("privateProperty");

let obj = {
  [sym]: "private value",
  publicProperty: "public value"
};

console.log(obj.publicProperty);
console.log(obj[sym]);*/

// 7.BigInt

let bigInt1 = 12345678901234567890n;
let bigInt2 = 98765432109876543210n;

let sum = bigInt1 + bigInt2;
console.log(sum);


//2.is Non primitive data type in javascript
//there are two is 1.object
//2.arry

//1.object
const arr=[1,2,3,4,5,6,7,8]
console.log(arr)
console.log(typeof arr)

const arr1={1:1,2:2,3:3,4:4}
console.log(arr1)
console.log(typeof arr1)
