function truncate(str, maxLength){
    if(str.length > maxLength){
        return str.substring(0, maxLength-1) + "..."
    }
    return str
}


// truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…"

// truncate("Hi everyone!", 20) == "Hi everyone!"

console.log(truncate("What I'd like to tell on this topic is:", 20))
console.log(truncate("Hi everyone!", 20))