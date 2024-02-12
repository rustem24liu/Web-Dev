let user = {
    name: "John", 
    age: 52,
    sayHi(){
        console.log(this.age)
    }
}

let smth = {
    firstName: "Aman",
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow()
    }
}

smth.sayHi()

user.sayHi()