var obj = {name:"Suryansh"};

var greeting = function(a){
   return "Welcome "+this.name+" to "+a;
};

//creates a bound function that has same body and parameters 
var bound = greeting.bind(obj); 

console.log(bound("Japan")); //call the bound function

// returns output as Welcome Suryansh to Japan