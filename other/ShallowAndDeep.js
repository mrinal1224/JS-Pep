

//  Spread Operator Method  //Shallow copies
// let sports = ['Cricket', 'Football' , 'Swimming' , {a:'hockey' , b:'Tennis'}]

// let copySports = [...sports]

// copySports[1] = 'Baseball'
// copySports[3]['a'] = 'BasketBall'

// console.log('Orginal Sports Array' , sports)
// console.log('Copy Sports Array' , copySports)


//Shallow copy from the Array.from method

// let sports = ['Cricket', 'Football' , 'Swimming' , {a:'hockey' , b:'Tennis'}]

// let copySports = Array.from(sports)

// copySports[1] = 'Baseball'
// copySports[3]['a'] = 'BasketBall'

// console.log('Orginal Sports Array' , sports)
// console.log('Copy Sports Array' , copySports)

// shallow copy with slice method

// let sports = ['Cricket', 'Football' , 'Swimming' , {a:'hockey' , b:'Tennis'}]

// let copySports = sports.slice(0)

// copySports[1] = 'Baseball'
// copySports[3]['a'] = 'BasketBall'

// console.log('Orginal Sports Array' , sports)
// console.log('Copy Sports Array' , copySports)



// Deep Copy 

let sports = ['Cricket', 'Football' , 'Swimming' , {a:'hockey' , b:'Tennis'}]

let copySports = JSON.parse(JSON.stringify(sports))

copySports[1] = 'Baseball'
copySports[3]['a'] = 'BasketBall'

console.log('Orginal Sports Array' , sports)
console.log('Copy Sports Array' , copySports)


