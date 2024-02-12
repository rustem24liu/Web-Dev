function getWeekDay(date){

    let days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"]

    for( let day in days){
        if(date.getDay() == +day+1){
            return days[day]
        }
    }
    return false


}

let date = new Date(2012, 0, 3)
let result = getWeekDay(date)

console.log(result)
