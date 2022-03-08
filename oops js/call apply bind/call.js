var obj = {name:"Sumeet"};

var greeting = function(a){
    return "Welcome "+this.name+" to "+a;
};

console.log(greeting.call(obj, "Japan"));