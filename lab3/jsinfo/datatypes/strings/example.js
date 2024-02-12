let name1 = "Bruse Wayne"

console.log(name1.length)
console.log(name1[0])

name1[0] = 'A'

for(let char of name1){
    console.log(char)
}

console.log(name1.indexOf("ne"))


name1 = name1.toUpperCase();
console.log(name1);
name1 = name1[0].toLowerCase() + name1.slice(1, 12);
console.log(name1)

console.log(name1.substring(1, 12))
console.log(name1.substring(12, 1)) // same for substring but not for slice


console.log(name1.substr(1, 4)) // (start, [: length]) -> it works like this


