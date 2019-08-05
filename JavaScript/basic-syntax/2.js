
// functions 
// x is the parameter in this function declaration
function factorial(x) {
    // function body
   var ans = 1;
   for(var i = x; i > 0; i--)
   {
     ans *= i;
   }
   return ans;
  }
  
  // 5 is passed into the function as argument
  var sum = factorial(5);
  console.log(sum)


  // arrays

var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables[0])

// methods to use with array
var newLength = vegetables.push('Orange');
var last = vegetables.pop();
var len = vegetables.length
// spilice

var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
// starts from 2 and count 1
donuts.splice(2, 1, "chocolate cruller", "creme de leche"); 
console.log(donuts)
// for
// for each 
vegetables.forEach(function(item, index, vegetables) {
  console.log(item + " "+  index);
});

// Map
var numbers = [4, 9, 16, 25];
var sequaree = numbers.map(Math.sqrt)
console.log(sequaree)

// 2d arrays 
var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];
var row = 1
var col = 2
console.log(donutBox[row][col])

// objects 

var girl = {
    name: "Basma", 
    age: 23,
    parents: [ "Khadeega", "Ashour" ],
    siblings: ["Yasmeen", "Eman", "Enas", "Ayman", "Ahmed"],
    favoriteColor: "black",
    pets: false,
    paintPicture: function() { console.log( "Basma paints!") }
  };
  // bracket notation
  console.log(sister['parents'])
  // dot notation
  console.log(sister.parents)
  // call an object function
  sister.paintPicture();
  
  // brackey notation to access dynmically 
  var objj = 'thing'
  // 
  sister[objj] = 1;
  console.log(sister['thing'])