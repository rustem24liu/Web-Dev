// let user = new Object()

// console.log(user, typeof(user))

// user = {
//     name: "Rustem",
//     age: 18,
//     university: "Kbtu",
//     student: true
// };

// console.log(`User name is ${user.name}, \nAll info: ${user.name, user.age, user.university, user.student}`)

// delete user.student

// console.log(user.student)

// user = {
//     "likes birds": true
// }

// console.log(user["likes birds"])


// let man = {
//     name: "Aslan",
//     age: 11,
//     student: true,
// }

// console.log("name" in man)
// console.log(man.name)
// console.log(man["age"])

// for(key in man){
//     console.log(man[key])
// }


// let codes = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     // ..,
//     "1": "USA"
//   };
  
//   for (let code in codes) {
//     // alert(code); // 1, 41, 44, 49
//     console.log(code)
//   }


// let user = {}

// user.name = "John"

// user.surname = "Smith"

// user.name = "Pete"

// delete user.name

// console.log(user.name)
// console.log(user.surname)  

function isEmpty(obj){ 
    for(let key in obj){
        return false
    }
    return true
}

let schedule = {};

console.log(isEmpty(schedule))

schedule["8:30"] = "get up";

console.log(isEmpty(schedule))// false

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
var sum = 0
for(let i in salaries){
    sum += salaries[i]
}

console.log(sum)


function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof(obj[key]) == typeof(1)){
            obj[key] *= 2
        }
        
    }
    
}

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
  // after the call
  console.log(menu)
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };