let person1 ={
  name : 'Adam',
  age : 23,

}

let showDetails = function(city){
  console.log(this.name + ' is ' + this.age + 'years old lives in '+ city)
}




Function.prototype.myBind = function(...args){
  let obj = this
   params = args.slice(1)
  return function(...args2){
   obj.apply(args[0] , [...params, ...args2])
  }
}

let showDetailBind = showDetails.myBind(person1 , 'noida')
showDetailBind()

