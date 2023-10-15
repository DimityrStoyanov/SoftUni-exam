function weekendOrWorkingDay(input){
    let day = input[0]

    switch(day){
        case "Monday": 
        case "Tuesday": 
        case "Wednesday": 
        case "Thursday": 
        case "Friday": console.log("Working day"); break;
        case "Saturday": 
        case "Sunday": console.log("Weekend"); break;
        default: console.log("Error")

    }
}
weekendOrWorkingDay(["Sunday"])
// (["1"])	Monday
// (["2"])	Tuesday
// (["3"])	Wednesday
// (["4"])	Thursday
// (["5"])	Friday
// (["6"])	Saturday
// (["7"])	Sunday
// (["-1"])	Error