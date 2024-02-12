

function checkSpam(str){
    checkStr = str.toLowerCase();
    if(checkStr.includes("viagra") || checkStr.includes("xxx")){
        return true;
    }
    return false;
}

console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam("innocent rabbit"))