let person1 ={
   name:'Adam',
   age : 25,
}

let person2 ={
    name : 'Steve',
    age : 20,
}


let showDetails = function(){
    console.log(this.name + " is " + this.age + " years old")
}

showDetails.call(person1)
showDetails.call(person2)
