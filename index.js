// Variable: Pass by Value and reference
// pass by value
let a = 5;
let b = a;

b = b+5;

console.log(a);
console.log(b);

// pass by reference
const obj1 : {
  user : "Preeti";
  pass : "Vaishnav";
}
const obj2 = obj1;
obj2.pass : "kuchbhi";

console.log(obj1);
console.log(obj2);


// Closure
function outer() {
  let a = 10;
  var b = 20;
  console.log(a, b);

  let inner = function () {
    console.log("inner", a, b);
  };
  return inner;
}
let result = outer();
result();

// Lexical scope

function init(
  var firstname = "preeti";
  function sayfirstname(){
    console.log(firstname);
  }
  sayfirstname();
)

init();

// Call, apply and bind

let name = {
  firstname: "preeti",
  lastname:"vaishnav",
  printfullname:function (){
    console.log(this.firstname + "" + this.lastname);
  }
}
name.printfulllname();

let name2 = {
  firstname: "Sachin",
  lastname: "tendulkar"
};
// function borrowing
printfullname.call(name2, "mumbai", "maharastra");

printfullname.apply(name2, ["mumbai", "maharastra"]);

let printmyname = printfullname.bind(name2, "mumbai", "maharastra");
console.log(printmyname);
printmyname();

// new keyword

var person = {
  name: "Preeti",
  age: 28,
}

var person = new Object();

person.name = "Preeti Vaishnav";
person.age = 28;

consolw.log(person.name)

// Immediately-Invoked Function Expression (IIFE)

function authorname (){
  console.log("author name is Preeti");
}
authorname();

(function (){
  var aName = "Vaishnav"
  console.log("author name is" + aName);
} ) ();
// array (reduce)
const numbers = [175, 50, 25];
document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;

// JSON parse

  const json = '{ "fruit": "pineapple", "fingers": 10 }';
const obj = JSON.parse(json);
console.log(obj.fruit, obj.fingers);

// Getter and setter method
const student = {
  firstName: 'Monica',
  
  get getName() {
      return this.firstName;
  }
};
console.log(student.getName); 
// setter
const student = {
  firstName: 'Monica',
  
  set changeName(newName) {
      this.firstName = newName;
  }
};
student.changeName = 'Sarah';
