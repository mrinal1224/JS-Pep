var obj = {name:"Sumeet"};

var greeting = function(a){
    return "Welcome "+this.name+" to "+a;
};

// array of arguments to the actual function
var arr = ["Japan"];  
console.log(greeting.apply(obj,arr));

// returns output as Welcome Suryansh to Japan